import type { TextFieldProps } from '@mui/material'

export interface SliderTypeProps extends Pick<TextFieldProps, 'sx'> {
    name: string
    min?: number
    max?: number
    value?: number
    setValue: any
    label?: string
    start?: boolean
}

export type SliderStylesProps = Pick<SliderTypeProps, 'start'>
