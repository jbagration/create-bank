import { ButtonProps } from '@mui/material'

export type LabelKeys = 'save' | 'send' | 'done' | 'continue'

export type OmittedProps =
    | 'children'
    | 'form'
    | 'uppercase'
    | 'color'
    | 'htmlType'

export interface SubmitButtonProps extends Omit<ButtonProps, OmittedProps> {
    form?: string
    label: LabelKeys
}
