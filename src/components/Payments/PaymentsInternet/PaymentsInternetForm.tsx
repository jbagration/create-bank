import { useLocation, useNavigate } from 'react-router-dom'
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

import { getPaymentsInternetScheme } from './PaymentsInternetForm.scheme'

import { buttonText } from '../PaymentsBank/PaymentsBankForm.const'
import {
    amountLimits,
    getDefaultValues,
    helperText,
    providers,
} from './PaymentsInternetForm.const'

interface PaymentsInternetFormProps {
    depositCards: DepositCard[]
}

export const PaymentsInternetForm = ({
    depositCards,
}: PaymentsInternetFormProps) => {
    const navigate = useNavigate()
    const { state } = useLocation()
    const defaultValues = getDefaultValues(state)

    const cards = getDropdownOptionsFromCards(depositCards)

    const methods = useFormWithRecentCardBalance(
        {
            defaultValues,
            mode: 'onTouched',
        },
        depositCards,
        amountLimits,
        getPaymentsInternetScheme
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
                        <DropdownMenu
                            staticLabel="Интернет-провайдер"
                            size="long"
                            name="provider"
                            options={providers}
                            defaultValue={defaultValues.provider}
                            disabled
                        />
                    </Grid>

                    <Grid item>
                        <InputHandler
                            type="text"
                            name="accountNumber"
                            size="long"
                            staticLabel="Номер лицевого счёта"
                            maxLength={10}
                            defaultValue={defaultValues.accountNumber}
                            transformValue={formatSumInputValueNoSpacings}
                            required
                        />
                    </Grid>

                    <Grid item>
                        <DropdownMenu
                            staticLabel="Карта списания"
                            size="long"
                            height="short"
                            name="cardName"
                            options={cards}
                            defaultValue={defaultValues.cardName}
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
