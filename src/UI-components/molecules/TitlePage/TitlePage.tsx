import { FC } from 'react'
import { Typography } from '@mui/material'

export const TitlePage: FC = ({ children }) => {
    return (
        <Typography
            variant="subtitle1Bold"
            component="h2"
            mb="40px"
            color="Text.TextPrimary"
        >
            {children}
        </Typography>
    )
}
