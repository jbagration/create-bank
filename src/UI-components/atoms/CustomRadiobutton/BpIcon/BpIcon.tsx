import { FC, memo } from 'react'
import { Typography, TypographyProps } from '@mui/material'

export const BpIcon: FC<TypographyProps> = memo(({ sx, ...props }) => {
    return <Typography component="span" sx={sx} {...props} />
})
