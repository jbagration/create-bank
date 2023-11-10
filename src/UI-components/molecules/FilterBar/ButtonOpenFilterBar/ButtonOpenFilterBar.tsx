import React, { FC } from 'react'
import { Box, Button, Typography } from '@mui/material'

import { FilterBarIcon } from '../../../../assets/svg'

import type { ButtonFilterType } from './ButtonOpenFilterBar.type'

import { openFilterButtonStyles } from './ButtonOpenFilterBar.style'

export const ButtonOpenFilterBar: FC<ButtonFilterType> = ({
    setShow,
    setPosition,
    setVariantSideBar,
    variantSideBar,
    show,
}) => {
    const handleToggleFilers = () => {
        setShow(false)
        setPosition(180)
        setVariantSideBar((prev: string) =>
            prev === 'filtersBar' && !show ? 'bankBranchList' : 'filtersBar'
        )
    }

    let sideBarButtonText: string = ''
    if (variantSideBar === 'filtersBar' && !show) {
        sideBarButtonText = 'Банкоматы и отделения'
    } else {
        sideBarButtonText = 'Фильтры'
    }

    return (
        <Box onClick={handleToggleFilers}>
            <Button sx={openFilterButtonStyles} disableRipple>
                <FilterBarIcon aria-label="фильтры" />
                <Typography variant="body1">{sideBarButtonText}</Typography>
            </Button>
        </Box>
    )
}
