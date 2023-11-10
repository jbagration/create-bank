import { useLocation, useNavigate } from 'react-router-dom'
import { longDropdownInputStyles } from 'src/common/common.styles'
import { LocationParams } from 'src/types/hooksTypes'
import { DepositCard } from 'src/types/MyCardsType'
import { Button, DropdownMenu } from 'src/UI-components/atoms'
import { FormHandler, InputHandler } from 'src/UI-components/molecules'
import { getDropdownOptionsFromCards } from 'src/utils'
import {
    formatInputValueAfterComma,
    formatSumInputValue,
    formatSumInputValueNoSpacings,
} from 'src/utils/formatInputValue'
import { Box, Grid } from '@mui/material'

import { useFormWithRecentCardBalance } from '../hooks/useFormWithRecentCardBalance'

import { getPaymentsBankScheme } from './PaymentsBankForm.scheme'

import { amountLimits } from '../PaymentsUtilities/PaymentsUtilitiesForm.const'
import {
    BankPaymentService,
    banks,
    buttonText,
    DefaultValues,
    getDefaultValues,
    labelsForAccountNumber,
    services,
} from './PaymentsBankForm.const'

interface PaymentsBankFormProps {
    depositCards: DepositCard[]
}

export const PaymentsBankForm = ({ depositCards }: PaymentsBankFormProps) => {
    const { state } = useLocation() as LocationParams<DefaultValues>
    const navigate = useNavigate()
    const defaultValues = getDefaultValues(state)

    const cards = getDropdownOptionsFromCards(depositCards)

    const methods = useFormWithRecentCardBalance(
        {
            defaultValues,
            mode: 'onTouched',
        },
        depositCards,
        amountLimits,
        getPaymentsBankScheme
    )

    const {
        formState: { isValid },
        watch,
    } = methods
    const [amount, service] = watch(['amountToPay', 'service'])
    const amountToPay = amount ? `${buttonText} ${amount} RUB` : buttonText
    const handleSubmit = (data: {}) => {
        navigate('../payments/paymentconfirm', { state: data })
    }

    const accountNumberLabel =
        labelsForAccountNumber[service as BankPaymentService] ?? 'Номер счета'
    return (
        <Box sx={{ maxWidth: '400px', width: 'fit-content' }}>
            <FormHandler onSubmit={handleSubmit} methods={methods}>
                <Grid container rowSpacing={4} direction="column">
                    <Grid item>
                        <DropdownMenu
                            staticLabel="Банк"
                            size="long"
                            name="bank"
                            options={banks}
                            defaultValue={defaultValues.bank}
                            disabled
                        />
                    </Grid>

                    <Grid item>
                        <DropdownMenu
                            staticLabel="Услуга"
                            size="long"
                            name="service"
                            options={services}
                            defaultValue={defaultValues.service}
                            disabled={'service' in state}
                        />
                    </Grid>

                    <Grid item>
                        <InputHandler
                            type="text"
                            name="accountNumber"
                            size="long"
                            staticLabel={accountNumberLabel}
                            maxLength={30}
                            defaultValue={defaultValues.accountNumber}
                            transformValue={formatSumInputValueNoSpacings}
                            required
                            disabled={'accountNumber' in state}
                        />
                    </Grid>

                    <Grid item>
                        <DropdownMenu
                            staticLabel="Карта списания"
                            name="cardName"
                            options={cards}
                            defaultValue={defaultValues.cardName}
                            size="long"
                            autosize="true"
                            height="short"
                            sx={longDropdownInputStyles}
                        />
                    </Grid>

                    <Grid item>
                        <InputHandler
                            type="text"
                            name="amountToPay"
                            size="long"
                            staticLabel="Сумма"
                            defaultValue={defaultValues.amountToPay}
                            transformValue={formatSumInputValue}
                            transformValueOnBlur={formatInputValueAfterComma}
                            required
                        />
                    </Grid>

                    <Grid item>
                        <Button
                            type="submit"
                            size="long"
                            buttonVariant="primary"
                            disabled={!isValid}
                            sx={{ mt: 4 }}
                        >
                            {amountToPay}
                        </Button>
                    </Grid>
                </Grid>
            </FormHandler>
        </Box>
    )
}
