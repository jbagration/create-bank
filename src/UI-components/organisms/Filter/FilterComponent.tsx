import { FC } from 'react'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import { IconButton } from '@mui/material'

import { transferIconStyles } from './Filter.style'

import { FilterComponentProps } from './Filter.type'

export const FilterComponent: FC<FilterComponentProps> = ({
    setOpen,
    open = false,
}) => {
    const transferIconStylesSx = transferIconStyles({ open })

    return (
        <IconButton
            sx={transferIconStylesSx}
            data-testid="filter-icon"
            // open={open}
            onClick={() => {
                setOpen(!open)
            }}
            size="large"
        >
            <FilterAltOutlinedIcon />
        </IconButton>
    )
}
