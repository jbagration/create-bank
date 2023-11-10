import { FC } from 'react'
import { Box, Typography } from '@mui/material'

import { wrapperStyles, wrapperTitleStyles } from './WrapperWithTitle.style'

import { WrapperProps } from './WrapperWithTitle.type'

export const WrapperWithTitle: FC<WrapperProps> = ({
    children,
    title,
    loanCard,
    subtitle,
    paymentTypeCard,
}) => {
    const wrapperStylesSx = wrapperStyles({ title, loanCard, paymentTypeCard })
    const wrapperTitleStylesSx = wrapperTitleStyles()

    let padding
    if (paymentTypeCard) {
        padding = '28px'
    } else if (!loanCard && !paymentTypeCard) {
        padding = '40px'
    } else {
        padding = '0px'
    }

    return (
        <Box sx={wrapperStylesSx}>
            <Box sx={wrapperTitleStylesSx}>
                <Typography variant="buttonLarge" color="Text.TextPrimary">
                    {title}
                </Typography>
                {loanCard && (
                    <Typography variant="buttonLarge" color="Text.TextPrimary">
                        {`${subtitle}%`}
                    </Typography>
                )}
            </Box>

            <Box p={padding}>{children}</Box>
        </Box>
    )
}
