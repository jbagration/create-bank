import { MuiTelInputInfo } from 'mui-tel-input'
import { InputBaseProps, TextFieldProps } from '@mui/material'

export type ModifierStateKeys = 'CapsLock'

export type Type = 'password' | 'tel' | 'text' | 'smsCode' | 'number'

export interface InputProps
    extends Pick<TextFieldProps, 'select' | 'multiline' | 'sx'> {
    size: 'short' | 'long'
    type: Type
    name: string
    error?: boolean
    disabled?: boolean
    label?: string
    staticLabel?: string
    errorMessage?: string
    helperText?: string
    onChange?: Function
    value?: string | number
    required?: boolean
    placeholder?: string
    autoFocus?: boolean
    maxLength?: number
    onBlur?: Function
    onKeyDown?: Function
    onFocus?: Function
    onHandleSubmit?: Function
    gridColumn?: number
    open?: boolean
    readOnly?: boolean
    dropdown?: boolean
    defaultValue?: string
    outlined?: string
    autosize?: string
    smallHeight?: string
    largelabel?: string
    outFocusLabel?: string
    isCounter?: boolean
    countLimit?: number
    info?: MuiTelInputInfo
    startAdornment?: any
    customMenuPosition?: boolean
    withoutHelperText?: boolean
}

export interface InputWrapperProps {
    gridColumn: number | undefined
    type: Type
}

export interface InputStyledProps
    extends Pick<TextFieldProps, 'select' | 'multiline'> {
    size: 'short' | 'long'
    isEmptyInput: boolean
    type: Type
    dropdown?: boolean
    initialType: Type
    outlined?: string
    autosize?: string
    smallHeight?: string
    gridColumn: number | undefined
    select: boolean
    customMenuPosition?: boolean
}

export type HandleFocusEvent = React.FocusEvent<
    HTMLInputElement | HTMLTextAreaElement
>

export type HandleChangeEvent =
    | string
    | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

export type EventMouse = React.MouseEvent<HTMLDivElement>

export type EventKeyboard = React.KeyboardEvent<HTMLDivElement>

export type InputMaskType = (isFocused: boolean) => InputBaseProps
