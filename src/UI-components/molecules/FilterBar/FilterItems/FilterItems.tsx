import { FC } from 'react'
import type { Filters } from 'src/pages/BankBranchPage.type'
import { Button, Icon, Typography } from '@mui/material'

import type { FilterProps } from '../FilterBar.type'

import { filterItemsButtonStyles, iconStyles } from './FilterItems.style'

export const FilterItems: FC<FilterProps> = ({
    filter,
    imageSrc,
    setFilters,
    filterKey,
    isActive = false,
    ...props
}) => {
    const handleFilterClick = () => {
        if (!setFilters) {
            return
        }

        setFilters((prevData: Filters) => {
            return prevData.map((filterItem) => {
                const newFilter = { ...filterItem }
                const [key] = Object.keys(newFilter)

                if (key === filterKey) {
                    if (isActive) {
                        newFilter[key] = ''
                    } else if (filterKey === 'closed') {
                        newFilter[key] = 'false'
                    } else {
                        newFilter[key] = 'true'
                    }
                }
                return newFilter
            })
        })
    }

    const filterItemsButtonSxStyles = filterItemsButtonStyles({
        isActive,
    })

    const FilterIcon: string = imageSrc || ''

    return (
        <Button
            sx={filterItemsButtonSxStyles}
            {...props}
            value={filter}
            disableTouchRipple
            onClick={handleFilterClick}
        >
            <Icon sx={iconStyles}>
                <FilterIcon />
            </Icon>
            <Typography variant="body2">{filter}</Typography>
        </Button>
    )
}
