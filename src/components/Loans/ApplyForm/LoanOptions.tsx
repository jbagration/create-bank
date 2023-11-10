import { FC } from 'react'
import { textMainStyles } from 'src/common/common.styles'
import { InputWithSlider } from 'src/UI-components/molecules'
import { formatNumber } from 'src/utils'
import {
    formatInputValueToDigits,
    formatSumInputValueToInteger,
} from 'src/utils/formatInputValue'
import { Box, Grid, Typography } from '@mui/material'

import { loanAmountText, loanOptionsTitle, loanTermLabel } from '../loans.const'

import { NewApply } from './ApplyForm.type'

type Props = {
    defaultValues: NewApply
    minSum: number
    maxSum: number
    labelCurrencyText: string
    currencyText: string
    maxPeriodMonths: number
    minPeriodMonths: number
}

export const LoanOptions: FC<Props> = ({
    currencyText,
    defaultValues,
    labelCurrencyText,
    maxPeriodMonths,
    maxSum,
    minPeriodMonths,
    minSum,
}) => {
    return (
        <Grid item md={6}>
            <Box mb="40px">
                <Typography variant="subtitle1Bold" sx={textMainStyles}>
                    {loanOptionsTitle}
                </Typography>
            </Box>
            <InputWithSlider
                defaultValue={defaultValues.amount}
                minValue={minSum}
                maxValue={maxSum}
                readonly={false}
                label={`${loanAmountText}, ${labelCurrencyText}`}
                text={`От ${formatNumber(minSum)} до ${formatNumber(
                    maxSum
                )} ${currencyText}`}
                name="amount"
                type="text"
                transformValue={formatSumInputValueToInteger}
            />
            <InputWithSlider
                defaultValue={defaultValues.periodMonths}
                minValue={minPeriodMonths}
                maxValue={maxPeriodMonths}
                readonly={false}
                label={loanTermLabel}
                text={`От ${minPeriodMonths} до ${maxPeriodMonths} месяцев`}
                name="periodMonths"
                type="text"
                transformValue={formatInputValueToDigits}
            />
        </Grid>
    )
}
