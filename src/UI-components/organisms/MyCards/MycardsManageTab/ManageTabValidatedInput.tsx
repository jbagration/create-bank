import { Dispatch, FC, SetStateAction } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { Pencil } from 'src/assets/svg'
import { ButtonWithIcon } from 'src/UI-components/atoms'
import { FormHandler, InputHandler } from 'src/UI-components/molecules'
import { formatSumInputValue } from 'src/utils/formatInputValue'
import { Box, Typography } from '@mui/material'

import { inputLabel } from './ManageTab.const'

import {
    inputButtonStyles,
    inputContainerStyles,
    inputLabelStyles,
} from './ManageTab.style'

interface FormValues {
    transactionLimit: string
}

interface ValidatedInputProps {
    isDisabled: boolean
    setDisabled: Dispatch<SetStateAction<boolean>>
    methods: UseFormReturn<FormValues>
    initialLimit: string
}

export const ValidatedInput: FC<ValidatedInputProps> = ({
    isDisabled,
    setDisabled,
    methods,
    initialLimit,
}) => {
    return (
        <FormHandler<FormValues>
            methods={methods}
            onSubmit={() => console.log('11111')}
        >
            <Box sx={inputContainerStyles}>
                <Typography sx={inputLabelStyles}>{inputLabel}</Typography>

                <InputHandler
                    size="long"
                    type="text"
                    name="transactionLimit"
                    defaultValue={initialLimit}
                    disabled={isDisabled}
                    transformValue={formatSumInputValue}
                    withoutHelperText
                />
                <Box
                    sx={inputButtonStyles}
                    onClick={() => {
                        setDisabled(!isDisabled)
                    }}
                >
                    <ButtonWithIcon yellow radius={false} size="small">
                        <Pencil />
                    </ButtonWithIcon>
                </Box>
            </Box>
        </FormHandler>
    )
}
