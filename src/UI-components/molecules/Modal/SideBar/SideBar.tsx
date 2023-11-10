import { forwardRef, memo, ReactElement, Ref, useEffect, useState } from 'react'
import { useAppSelector } from 'src/redux/hooks/redux'
import { Box, Dialog, DialogContent } from '@mui/material'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'

import { FiltersBar } from '../../FilterBar/FiltersBar'
import { BranchList } from '../../Search/BankBranchList/BranchList'
import { Search } from '../../Search/Search'

import { SideBarConfig } from './SideBar.config'

import { sideBarDialogContentStyles, sideBarStyles } from './SideBar.style'

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement<any, any>
    },
    ref: Ref<unknown>
) {
    return <Slide direction="right" ref={ref} {...props} />
})

export const SideBar = memo(({ config }: { config: SideBarConfig }) => {
    const {
        city,
        show,
        setShow,
        variantSideBar,
        setVariantSideBar,
        handleRoute,
        geoRouteError,
        routeError,
        isRouteSuccess,
        popularFilters,
        workingFilters,
        extrasFilters,
        setPopularFilters,
        setWorkingFilters,
        setExtrasFilters,
    } = config

    const bankBranches = useAppSelector((store) => store.branches.bankBranches)
    const searchValueBankBranch = useAppSelector(
        (store) => store.branches.searchValueBankBranch
    )
    const [validBankBranches, setValidBankBranches] = useState(bankBranches)

    useEffect(() => {
        setValidBankBranches(bankBranches)
    }, [bankBranches])

    const sideBarStylesSx = sideBarStyles()

    return (
        <>
            <Search
                variant="searchBranch"
                bankBranches={bankBranches}
                setValidBankBranches={setValidBankBranches}
                setShow={setShow}
                setCity={setShow}
                setVariantSideBar={setVariantSideBar}
                selectedBankBranch={searchValueBankBranch}
            />
            <Dialog
                sx={sideBarStylesSx}
                TransitionComponent={Transition}
                keepMounted
                disableAutoFocus
                disableEnforceFocus
                disableEscapeKeyDown
                maxWidth={false}
                hideBackdrop
                open={!show}
                aria-describedby="alert-dialog-slide-description"
                disableScrollLock
                id="sidebar"
            >
                <Box sx={{ maxHeight: '100vh', overflowY: 'auto' }}>
                    <DialogContent sx={sideBarDialogContentStyles}>
                        {variantSideBar === 'filtersBar' ? (
                            <FiltersBar
                                variant="main"
                                city={city}
                                setShow={setShow}
                                popularFilters={popularFilters}
                                workingFilters={workingFilters}
                                extrasFilters={extrasFilters}
                                setPopularFilters={setPopularFilters}
                                setWorkingFilters={setWorkingFilters}
                                setExtrasFilters={setExtrasFilters}
                            />
                        ) : (
                            <BranchList
                                bankBranchesList={validBankBranches}
                                handleRoute={handleRoute}
                                geoRouteError={geoRouteError}
                                routeError={routeError}
                                isRouteSuccess={isRouteSuccess}
                                popularFilters={popularFilters}
                                extrasFilters={extrasFilters}
                            />
                        )}
                    </DialogContent>
                </Box>
            </Dialog>
        </>
    )
})
