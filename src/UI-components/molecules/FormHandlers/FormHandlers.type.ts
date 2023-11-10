import { MuiTelInputInfo } from 'mui-tel-input'

import { InputProps } from '../../atoms'
import { RadioButtonProps } from '../../atoms/CustomRadiobutton'

export interface InputHandlerProps
    extends Omit<
        InputProps,
        'value' | 'errorMessage' | 'error' | 'defaultValue'
    > {
    defaultValue?: string | number
    validateOnChangeAfterError?: boolean
    transformValue?: Function
    transformValueOnBlur?: Function
    info?: MuiTelInputInfo
}

export interface RadioButtonHandlerProps
    extends Omit<RadioButtonProps, 'errorMessage' | 'error'> {
    defaultValue?: string | number
    register?: any
}

export type FormHandlerProps = {
    gapCount?: string
    flex?: string
}
