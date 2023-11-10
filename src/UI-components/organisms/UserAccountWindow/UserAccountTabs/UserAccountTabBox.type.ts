import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form'

export type TabBoxProps = {
    labelPadding?: boolean
    type?: 'notifications'
    methods?: UseFormReturn<FieldValues>
    onSubmit?: SubmitHandler<FieldValues>
}

export type TabBoxStylesProps = Pick<TabBoxProps, 'labelPadding' | 'type'>
