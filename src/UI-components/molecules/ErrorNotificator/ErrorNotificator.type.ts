import { BoxProps, TypographyProps } from '@mui/material'

export interface ErrorNotificatorProps {
    title: string
    text: string
    sx: TypographyProps
    imgStyles: BoxProps
    isButton?: Boolean
    handleError?: Function
}
