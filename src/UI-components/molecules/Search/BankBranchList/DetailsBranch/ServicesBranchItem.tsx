import { FC } from 'react'
import { Grid } from '@mui/material'

import { Filters } from '../../../FilterBar/Filter'

import { findExistingFilters } from './ServicesBranchItem.helper'

import { ServicesBranchItemProps } from './ServicesBranchItem.type'

export const ServicesBranchItem: FC<ServicesBranchItemProps> = ({
    popularFilters,
    extrasFilters,
    bankBranch,
}) => {
    const existPopularFilters = findExistingFilters(popularFilters, bankBranch)
    const existExtrasFilters = findExistingFilters(extrasFilters, bankBranch)

    return (
        <Grid pl={4} width="322px">
            <Filters
                title="Основные услуги"
                variant="certainBankBranch"
                icons="popular"
                filtersArray={existPopularFilters}
            />
            <Grid mt={6.5}>
                <Filters
                    title="Дополнительно"
                    variant="certainBankBranch"
                    icons="extras"
                    filtersArray={existExtrasFilters}
                />
            </Grid>
        </Grid>
    )
}
