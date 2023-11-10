import { FC, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DepositCard } from 'src/types/MyCardsType'
import { Button, DropdownMenu } from 'src/UI-components/atoms'
import { FormHandler, InputHandler } from 'src/UI-components/molecules'
import { CaptionWithCheckbox } from 'src/UI-components/molecules/Caption/CaptionWithCheckbox/CaptionWithCheckbox'
import { useFormWithRecentCardBalance } from 'src/UI-components/organisms'
import { getDropdownOptionsFromCards, OptionFields } from 'src/utils'
import {
    formatInputValueAfterComma,
    formatSumInputValue,
    formatSumInputValueNoSpacings,
} from 'src/utils/formatInputValue'
import { Box, Grid } from '@mui/material'

import {
    amountLimits,
    calculateCommision,
    defaultValues,
    isCustomNamePayee,
    openConditions,
} from '../transfers.utils'

import { getDetailsTransferScheme } from './TransferByDetails.scheme'
import { formDetailsStyles } from './TransferByDetails.styles'

import {
    accountNumberLabel,
    bicOfPayeeBankLabel,
    conditionsText,
    innPayeeLabel,
    purposeOfTheTransferLabel,
    transferAmountFieldText,
    transferButtonText,
    writeNameOfPayeeText,
    writeOffCardFieldText,
} from '../TransfersPage.const'
import { banks } from 'src/components/Payments/PaymentsBank/PaymentsBankForm.const'

interface Props {
    depositCards: DepositCard[]
}

export const TransferByDetails: FC<Props> = ({ depositCards }) => {
    const [checked, setChecked] = useState<boolean>(false)
    const [commision, setCommision] = useState<null | {
        text: string
        sum: number
    }>(null)
    const navigate = useNavigate()
    const [accountNumber, setAccountNumber] = useState<string>('')
    const cardsOptions = getDropdownOptionsFromCards(depositCards)

    const methods = useFormWithRecentCardBalance(
        {
            mode: 'onTouched',
            defaultValues: {
                ...defaultValues,
                cardName: cardsOptions[0].text,
            },
        },
        depositCards,
        { ...amountLimits, commision: commision?.sum || 30 },
        getDetailsTransferScheme(accountNumber)
    )
    const {
        formState: { errors },
        watch,
    } = methods
    const cardName = watch('cardName')
    const nameOfPayee = watch('nameOfPayee')

    const transformValueCb = useCallback((value: string) => {
        if (value === '') return setCommision(null)
        setCommision(calculateCommision(value))
        return formatSumInputValue(value, {
            lengthBeforeComma: 6,
        })
    }, [])

    const handleChangeChecked = useCallback(() => {
        setChecked((prev) => !prev)
    }, [])

    const handleSubmit = useCallback(
        (data) => {
            navigate('../transfers/info', {
                state: {
                    ...data,
                    commision: String(commision?.sum),
                    namePayee: isCustomNamePayee(nameOfPayee)
                        ? data.namePayee
                        : '',
                },
            })
        },
        [navigate, commision, nameOfPayee]
    )

    const buttonDisabled = Boolean(errors.amountToPay) || !checked
    const { label, helperText, placeholder } = transferAmountFieldText
    const { label: labelWriteOff, placeholder: placeholderWriteOff } =
        writeOffCardFieldText

    useEffect(() => {
        const accountNum = cardsOptions.reduce(
            (acc: string, card: OptionFields) => {
                if (card?.text === cardName) {
                    acc += card.accountNumber
                }
                return acc
            },
            ''
        )
        setAccountNumber(accountNum)
    }, [cardName, cardsOptions])

    return (
        <Box sx={{ width: '718px' }}>
            <FormHandler methods={methods} onSubmit={handleSubmit}>
                <Grid container sx={formDetailsStyles}>
                    <Grid item>
                        <Box>
                            <DropdownMenu
                                staticLabel={labelWriteOff}
                                size="long"
                                height="short"
                                name="cardName"
                                options={cardsOptions}
                                placeholder={placeholderWriteOff}
                            />
                        </Box>
                        <Box>
                            <InputHandler
                                type="text"
                                name="innPayee"
                                size="long"
                                maxLength={12}
                                staticLabel={innPayeeLabel}
                                transformValue={formatSumInputValueNoSpacings}
                                required
                            />
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box>
                            <InputHandler
                                type="text"
                                name="accountNumber"
                                size="long"
                                maxLength={20}
                                staticLabel={accountNumberLabel}
                                transformValue={formatSumInputValueNoSpacings}
                                required
                            />
                        </Box>
                        <Box>
                            <InputHandler
                                type="text"
                                name="bicBankPayee"
                                required
                                maxLength={9}
                                size="long"
                                staticLabel={bicOfPayeeBankLabel}
                            />
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box>
                            <DropdownMenu
                                staticLabel={writeNameOfPayeeText.label}
                                size="long"
                                name="nameOfPayee"
                                options={[
                                    ...banks,
                                    { divider: true, text: 'Юридическое лицо' },
                                    { divider: true, text: 'Физическое лицо' },
                                ]}
                                placeholder={writeNameOfPayeeText.placeholder}
                            />
                            {isCustomNamePayee(nameOfPayee) && (
                                <InputHandler
                                    type="text"
                                    staticLabel={
                                        writeNameOfPayeeText.labelInput
                                    }
                                    placeholder={
                                        writeNameOfPayeeText.placeholderInput
                                    }
                                    size="long"
                                    name="namePayee"
                                />
                            )}
                        </Box>
                        <Box>
                            <InputHandler
                                type="text"
                                name="purposeTransfer"
                                size="long"
                                staticLabel={purposeOfTheTransferLabel}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <InputHandler
                    type="text"
                    name="amountToPay"
                    size="long"
                    autosize="true"
                    staticLabel={label}
                    helperText={commision?.text || helperText}
                    placeholder={placeholder}
                    transformValueOnBlur={formatInputValueAfterComma}
                    transformValue={transformValueCb}
                />
                <CaptionWithCheckbox
                    checked={checked}
                    onChange={handleChangeChecked}
                    textBeforeLink={conditionsText[0]}
                    linkText={conditionsText[1]}
                    onClick={openConditions}
                />
                <Button disabled={buttonDisabled} size="long" type="submit">
                    {transferButtonText}
                </Button>
            </FormHandler>
        </Box>
    )
}
