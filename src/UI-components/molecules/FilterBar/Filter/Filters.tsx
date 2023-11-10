import { FC } from 'react'
import { Grid, Typography } from '@mui/material'

import type { FiltersProps } from '../FilterBar.type'
import { FilterItems } from '../FilterItems/FilterItems'
import { FiltersCertainBankBranch } from '../FiltersCertainBankBranch'

import {
    filterContainer,
    filterIconContainerStyles,
    filterTitleStyles,
} from './Filter.style'

export const Filters: FC<FiltersProps> = ({
    title,
    icons,
    variant,
    setFilters,
    filtersArray,
}) => {
    const filterContainerStyle = filterContainer({ variant })

    return (
        <Grid sx={filterContainerStyle}>
            {variant === 'certainBankBranch' ? (
                <Typography variant="strong2">
                    {filtersArray.length > 0 && title}
                </Typography>
            ) : (
                <Typography variant="subtitle3" sx={filterTitleStyles}>
                    {filtersArray.length > 0 && title}
                </Typography>
            )}
            <Grid sx={filterIconContainerStyles}>
                {filtersArray.map((filter) => {
                    const [key, text, icon] = Object.keys(filter)

                    return variant === 'certainBankBranch' ? (
                        <FiltersCertainBankBranch
                            key={key}
                            filter={filter[text]}
                            filterKey={key}
                            imageSrc={filter[icon]}
                            icons={icons}
                            setFilters={setFilters}
                        />
                    ) : (
                        <FilterItems
                            isActive={!!filter[key]}
                            key={key}
                            filter={filter[text]}
                            filterKey={key}
                            imageSrc={filter[icon]}
                            icons={icons}
                            setFilters={setFilters}
                        />
                    )
                })}
            </Grid>
        </Grid>
    )
}
