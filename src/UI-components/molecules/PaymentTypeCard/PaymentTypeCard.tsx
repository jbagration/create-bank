import { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { menuOptionTitleStyles } from 'src/common/common.styles'
import { Box, Link, Typography } from '@mui/material'

import { paymentTypeCardBoxStyles } from './PaymentTypeCard.style'

import { PaymentTypeCardProps } from './PaymentTypeCard.type'

export const PaymentTypeCard: FC<PaymentTypeCardProps> = ({
    icon,
    title,
    path,
    state,
}) => {
    return (
        <Link
            sx={{ textDecoration: 'none', color: 'red' }}
            to={path}
            component={RouterLink}
            state={{ title, ...state }}
        >
            <Box sx={paymentTypeCardBoxStyles}>
                <img src={icon} alt="icon" />
                <Typography variant="subtitle3" sx={menuOptionTitleStyles}>
                    {title}
                </Typography>
            </Box>
        </Link>
    )
}
