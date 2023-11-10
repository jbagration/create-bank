import { ChangeEvent } from 'react'
import { BoxProps } from '@mui/material'

export type Nullable<T> = null | T
export type sxType = Pick<BoxProps, 'sx'>
export type InputTypes = 'text' | 'tel' | 'password' | 'smsCode'

export type ChangeEventType = ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
>

export interface DateInterval {
    from: Date | null
    to: Date | null
}
