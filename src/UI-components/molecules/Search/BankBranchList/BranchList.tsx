import { FC } from 'react'
import { Box } from '@mui/material'

import { BankBranchesState } from '../../../../redux/slices/bankBranchSlice'
import { sxType } from '../../../../types'

import { BranchItem } from './BranchItem'

import { branchListContainer } from './BankBranchList.style'

import { BranchListProps } from './BankBranchList.type'

export const BranchList: FC<BranchListProps & sxType> = ({
    bankBranchesList,
    sx,
    handleRoute,
    geoRouteError,
    routeError,
    isRouteSuccess,
    popularFilters,
    extrasFilters,
}) => {
    const branchListContainerStyle = branchListContainer({ sx })
    return (
        <Box sx={branchListContainerStyle}>
            {bankBranchesList?.map((bankBranch: BankBranchesState) => {
                return (
                    <BranchItem
                        geoRouteError={geoRouteError}
                        routeError={routeError}
                        isRouteSuccess={isRouteSuccess}
                        handleRoute={handleRoute}
                        key={bankBranch.branchCoordinates}
                        bankBranch={bankBranch}
                        popularFilters={popularFilters}
                        extrasFilters={extrasFilters}
                    />
                )
            })}
        </Box>
    )
}
