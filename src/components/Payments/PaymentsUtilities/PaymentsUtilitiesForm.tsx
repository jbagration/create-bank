import { useLocation, useNavigate } from 'react-router-dom'
import { longDropdownInputStyles } from 'src/common/common.styles'
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

import { getUtilitiesPaymentSchema } from './PaymentsUtilitiesForm.scheme'

import { buttonText } from '../PaymentsBank/PaymentsBankForm.const'
import {
    amountLimits,
    getDefaultValues,
    helperText,
} from './PaymentsUtilitiesForm.const'

interface PaymentsUtilitiesFormProps {
    depositCards: DepositCard[]
}

export const PaymentsUtilitiesForm = ({
    depositCards,
}: PaymentsUtilitiesFormProps) => {
    const { state } = useLocation()
    const navigate = useNavigate()
    const defaultValues = getDefaultValues(state)

    const options = getDropdownOptionsFromCards(depositCards)

    const methods = useFormWithRecentCardBalance(
        {
            defaultValues,
            mode: 'onTouched',
        },
        depositCards,
        amountLimits,
        getUtilitiesPaymentSchema
    )

    const {
        formState: { isValid },
        watch,
    } = methods
    const amount = watch('amountToPay')
    const amountToPay = amount ? `${buttonText} ${amount} RUB` : buttonText
    const handleSubmit = (data: {}) => {
        navigate('../payments/paymentconfirm', { state: data })
    }
    return (
        <Box sx={{ maxWidth: '400px', width: 'fit-content' }}>
            <FormHandler onSubmit={handleSubmit} methods={methods}>
                <Grid container rowSpacing={4} direction="column">
                    <Grid item>
                        <InputHandler
                            type="text"
                            staticLabel="Код плательщика"
                            size="long"
                            name="accountNumber"
                            defaultValue={defaultValues.accountNumber}
                            transformValue={formatSumInputValueNoSpacings}
                        />
                    </Grid>

                    <Grid item>
                        <DropdownMenu
                            staticLabel="Карта списания"
                            name="cardName"
                            options={options}
                            defaultValue={defaultValues.cardName}
                            size="long"
                            autosize="true"
                            height="short"
                            sx={longDropdownInputStyles}
                        />
                    </Grid>

                    <Grid item>
                        <InputHandler
                            helperText={helperText}
                            type="text"
                            name="amountToPay"
                            size="long"
                            staticLabel="Сумма"
                            defaultValue={defaultValues.amountToPay}
                            transformValue={(value: string) =>
                                formatSumInputValue(value, {
                                    lengthBeforeComma: 5,
                                })
                            }
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
