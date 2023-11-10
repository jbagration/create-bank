import { FC } from 'react'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Box, Typography } from '@mui/material'

import { creditBtnStyles } from '../CreditDetailsItem.style'
import { showMoreContainerStyles } from './CreditDetailButton.style'

import { CreditDetailButtonProps } from './CreditDetailButton.type'

export const CreditDetailButton: FC<CreditDetailButtonProps> = ({
    open,
    handleClick,
    text,
}) => {
    return (
        <Box
            data-testid="credit-more"
            sx={showMoreContainerStyles}
            onClick={handleClick}
        >
            <Typography whiteSpace="nowrap" sx={creditBtnStyles}>
                {text}
            </Typography>
            <Box mt="-4px">
                {open ? (
                    <ExpandLess
                        sx={{ width: '20px' }}
                        data-testid="less-icon"
                    />
                ) : (
                    <ExpandMore
                        sx={{ width: '20px' }}
                        data-testid="more-icon"
                    />
                )}
            </Box>
        </Box>
    )
}
