import {
    FC,
    SyntheticEvent,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks/redux'
import { selectItemBankBranch } from 'src/redux/slices/bankBranchSlice'
import { Button } from 'src/UI-components/atoms'
import { MapContext } from 'src/UI-components/organisms'
import { swapAndMakeNumberElements } from 'src/utils'
import { Box, Grid } from '@mui/material'

import { BasicBranch } from '../BasicBranch/BasicBranch'

import { ServicesBranchItem } from './DetailsBranch/ServicesBranchItem'
import { TimetableBankBranch } from './DetailsBranch/TimetableBankBranch'

import {
    branchItemContainerStyles,
    timetableContainer,
} from '../BasicBranch/BasicBranch.style'
import { branchItemButtonContainer } from './BankBranchList.style'

import { BranchItemProps } from '../BasicBranch/BasicBranch.type'

export const BranchItem: FC<BranchItemProps> = ({
    bankBranch,
    handleRoute,
    geoRouteError,
    routeError,
    isRouteSuccess,
    popularFilters,
    extrasFilters,
}) => {
    const selectedBankBranch = useAppSelector(
        (store) => store.branches.selectedBankBranch
    )

    const dispatch = useAppDispatch()
    const [mapInstance] = useContext(MapContext)
    const [isBranchItemInfoOpen, setBranchItemInfoOpen] = useState(false)

    useEffect(() => {
        if (selectedBankBranch.branchNumber === bankBranch.branchNumber) {
            setBranchItemInfoOpen(true)
        } else {
            setBranchItemInfoOpen(false)
        }
    }, [bankBranch, selectedBankBranch.branchNumber])

    const onHandleRoute = useCallback(() => {
        const branchCoords = swapAndMakeNumberElements(
            bankBranch.branchCoordinates
        )

        handleRoute(branchCoords)
    }, [bankBranch.branchCoordinates, handleRoute])

    const handleOpenDetails = (event: SyntheticEvent) => {
        const branchCoords = swapAndMakeNumberElements(
            bankBranch.branchCoordinates
        )

        mapInstance.setCenter(branchCoords)
        mapInstance.setZoom(14)
        if (selectedBankBranch.branchNumber === bankBranch.branchNumber) {
            dispatch(selectItemBankBranch({}))
        } else {
            dispatch(selectItemBankBranch(bankBranch))
        }

        event.preventDefault()
    }

    const timetableContainerStyles = timetableContainer()
    const branchItemButtonContainerStyles = branchItemButtonContainer()

    const isRouteLoading = !(geoRouteError || routeError || isRouteSuccess)

    return (
        <>
            <Grid sx={branchItemContainerStyles} onClick={handleOpenDetails}>
                <BasicBranch
                    bankBranchType={bankBranch.bankBranchType}
                    branchNumber={bankBranch.branchNumber}
                    branchAddress={bankBranch.branchAddress}
                    closed={bankBranch.closed}
                    openingTime={bankBranch.openingTime}
                    closingTime={bankBranch.closingTime}
                    bankCoordinates={bankBranch.branchCoordinates}
                />
                {isBranchItemInfoOpen && (
                    <Box sx={timetableContainerStyles}>
                        <TimetableBankBranch
                            workAtWeekends={bankBranch.workAtWeekends}
                            openingTime={bankBranch.openingTime}
                            closingTime={bankBranch.closingTime}
                        />
                        <ServicesBranchItem
                            bankBranch={bankBranch}
                            popularFilters={popularFilters}
                            extrasFilters={extrasFilters}
                        />
                    </Box>
                )}
            </Grid>
            {isBranchItemInfoOpen && (
                <Box sx={branchItemButtonContainerStyles}>
                    <Button
                        onClick={onHandleRoute}
                        size="long"
                        buttonVariant="primary"
                        disabled={isRouteLoading}
                    >
                        Построить маршрут
                    </Button>
                </Box>
            )}
        </>
    )
}
