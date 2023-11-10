import { FC } from 'react'
import { Grid, Icon, Typography } from '@mui/material'

import type { FilterProps } from './FilterBar.type'

import { branchIconContainerStyles, branchIconStyles } from './FilterBar.style'

export const FiltersCertainBankBranch: FC<FilterProps> = ({
    filter,
    imageSrc,
}) => {
    const FilterIcon: string = imageSrc || ''

    return (
        <Grid sx={branchIconContainerStyles}>
            <Icon sx={branchIconStyles}>
                <FilterIcon />
            </Icon>
            <Typography variant="body2">{filter}</Typography>
        </Grid>
    )
}
