import { ChangeEvent, useState } from 'react'
import { MuiTelInputInfo } from 'mui-tel-input'
import { useLocation, useNavigate } from 'react-router-dom'
import { longDropdownInputStyles } from 'src/common/common.styles'
import { DepositCard } from 'src/types/MyCardsType'
import { Button, DropdownMenu } from 'src/UI-components/atoms'
import { FormHandler, InputHandler } from 'src/UI-components/molecules'
import { getDropdownOptionsFromCards } from 'src/utils'
import {
    formatInputValueAfterComma,
    formatSumInputValue,
} from 'src/utils/formatInputValue'
import { Box, Grid } from '@mui/material'

import { informationMobileItems } from 'src/UI-components/organisms/FavoritesPayments/FavoritesItem.const'
import { useFormWithRecentCardBalance } from '../hooks/useFormWithRecentCardBalance'

import { getMobilePaymentScheme } from './PaymentsMobileForm.scheme'

import { buttonText } from '../PaymentsBank/PaymentsBankForm.const'
import {
    amountLimits,
    getDefaultValues,
    helperText,
} from './PaymentsMobileForm.const'

interface PaymentsMobileFormProps {
    depositCards: DepositCard[]
}

export const PaymentsMobileForm = ({
    depositCards,
}: PaymentsMobileFormProps) => {
    const [inputInfo, setInputInfo] = useState<MuiTelInputInfo>({
        countryCallingCode: '7',
        countryCode: null,
        nationalNumber: '1',
        numberType: null,
        numberValue: '+71',
        reason: 'input',
    })

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
        getMobilePaymentScheme(inputInfo.countryCode)
    )

    const {
        formState: { isValid },
        watch,
    } = methods

    const operators = informationMobileItems.map((operator) => ({
        text: operator.text,
        divider: true,
    }))

    const handleInputChange = (
        e: string | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        info: MuiTelInputInfo
    ) => {
        setInputInfo(info)
    }
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
                            staticLabel="Оператор"
                            size="long"
                            name="operator"
                            options={operators}
                            defaultValue={defaultValues.operator}
                            disabled
                        />
                    </Grid>

                    <Grid item>
                        <InputHandler
                            type="tel"
                            name="phoneNumber"
                            size="long"
                            staticLabel="Номер телефона"
                            defaultValue={defaultValues.phoneNumber}
                            onChange={handleInputChange}
                            info={inputInfo}
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
