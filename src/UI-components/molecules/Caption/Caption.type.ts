import { ReactNode } from 'react'
import { SxProps, Theme } from '@mui/material'

export interface CaptionProps {
    text?: ReactNode
    children?: JSX.Element
    component?: boolean
    sx?: SxProps<Theme>
    info?: boolean
}
