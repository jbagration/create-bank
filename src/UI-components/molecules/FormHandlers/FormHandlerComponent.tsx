import React from 'react'
import {
    FieldValues,
    FormProvider,
    SubmitHandler,
    UseFormReturn,
} from 'react-hook-form'
import { Box } from '@mui/material'

import { formStyles } from './FormHandlers.style'

export interface FormProps<Data extends FieldValues> {
    children: React.ReactNode
    formId?: string
    methods: UseFormReturn<Data>
    onSubmit?: SubmitHandler<Data>
    onBlur?: SubmitHandler<Data>
    flex?: string
    gapCount?: string
}

const FormHandlerComponent = <Data extends object>({
    children,
    methods,
    formId,
    onSubmit,
    onBlur,
    flex,
    gapCount,
}: FormProps<Data>): JSX.Element => {
    const formStylesSx = formStyles({ flex, gapCount })

    return (
        <FormProvider {...methods}>
            <Box
                component="form"
                sx={formStylesSx}
                id={formId}
                onSubmit={onSubmit && methods.handleSubmit(onSubmit)}
                onBlur={onBlur && methods.handleSubmit(onBlur)}
            >
                {children}
            </Box>
        </FormProvider>
    )
}

export const FormHandler = React.memo(
    FormHandlerComponent
) as typeof FormHandlerComponent
