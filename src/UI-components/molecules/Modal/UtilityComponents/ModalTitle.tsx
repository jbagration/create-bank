import { FC } from 'react'
import { Typography } from '@mui/material'

export const ModalTitle: FC<{ title: string }> = ({ title }) => {
    return (
        <Typography variant="h3" color="Text.TextPrimary" sx={{ mb: 6 }}>
            {title}
        </Typography>
    )
}
