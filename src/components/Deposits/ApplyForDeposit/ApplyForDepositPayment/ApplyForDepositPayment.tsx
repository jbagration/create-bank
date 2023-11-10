import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { longDropdownInputStyles } from 'src/common/common.styles'
import { LocationParams } from 'src/types/hooksTypes'
import { DropdownMenu } from 'src/UI-components/atoms'
import { InputHandler } from 'src/UI-components/molecules'
import { OptionFields } from 'src/utils'
import {
    formatInputValueAfterComma,
    formatSumInputValue,
} from 'src/utils/formatInputValue'
import { Grid } from '@mui/material'

import { getHelperText } from '../ApplyForDepositForm.util'

import { ApplyForDepositState } from '../ApplyForDeposit.type'

interface ApplyForDepositPaymentProps {
    cardOptions: OptionFields[]
}

export const ApplyForDepositPayment: FC<ApplyForDepositPaymentProps> = ({
    cardOptions,
}) => {
    const { state } = useLocation() as LocationParams<ApplyForDepositState>

    return (
        <>
            <Grid item>
                <DropdownMenu
                    staticLabel="Карты"
                    name="cardName"
                    options={cardOptions}
                    size="long"
                    autosize="true"
                    height="short"
                    sx={longDropdownInputStyles}
                />
            </Grid>

            <Grid item>
                <InputHandler
                    helperText={getHelperText(state)}
                    staticLabel={`Сумма вклада, ${state.currencyCode}`}
                    type="text"
                    name="amountToPay"
                    size="long"
                    placeholder="Введите сумму"
                    required
                    transformValue={formatSumInputValue}
                    transformValueOnBlur={formatInputValueAfterComma}
                />
            </Grid>
        </>
    )
}
