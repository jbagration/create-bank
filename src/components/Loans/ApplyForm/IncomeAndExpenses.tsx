import { FC } from 'react'
import { InputHandler } from 'src/UI-components/molecules'
import {
    addZeroToValueOnBlur,
    formatInputValueToDigits,
    formatSumInputValue,
} from 'src/utils/formatInputValue'
import { Box, Grid, Typography } from '@mui/material'

import {
    employerIdentificationNumberLabel,
    employerIdentificationNumberText,
    expensesLabel,
    expensesText,
    incomeLabel,
    incomeText,
    incomeTitle,
} from '../loans.const'

import { NewApply } from './ApplyForm.type'

type Props = {
    defaultValues: NewApply
    labelCurrencyText: string
}

export const IncomeAndExpenses: FC<Props> = ({
    defaultValues,
    labelCurrencyText,
}) => {
    return (
        <Grid item md={6}>
            <Box mb="40px">
                <Typography variant="subtitle1Bold">{incomeTitle}</Typography>
            </Box>
            <Box mb="40px">
                <InputHandler
                    type="text"
                    size="long"
                    name="monthlyIncome"
                    placeholder={incomeLabel}
                    staticLabel={`${incomeText}, ${labelCurrencyText}`}
                    defaultValue={100}
                    required
                    transformValue={formatSumInputValue}
                    transformValueOnBlur={addZeroToValueOnBlur}
                />
            </Box>
            <Box mb="40px">
                <InputHandler
                    type="text"
                    size="long"
                    name="monthlyExpenditure"
                    placeholder={expensesLabel}
                    staticLabel={`${expensesText}, ${labelCurrencyText}`}
                    defaultValue={defaultValues.monthlyExpenditure}
                    required
                    transformValue={formatSumInputValue}
                    transformValueOnBlur={addZeroToValueOnBlur}
                />
            </Box>
            <Box mb="40px">
                <InputHandler
                    type="text"
                    size="long"
                    maxLength={12}
                    name="employerIdentificationNumber"
                    placeholder={employerIdentificationNumberText}
                    staticLabel={employerIdentificationNumberLabel}
                    defaultValue={defaultValues.employerIdentificationNumber}
                    required
                    transformValue={formatInputValueToDigits}
                />
            </Box>
        </Grid>
    )
}
