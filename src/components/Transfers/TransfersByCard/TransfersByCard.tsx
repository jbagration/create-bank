import { FC, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DepositCard } from 'src/types/MyCardsType'
import { Button, DropdownMenu } from 'src/UI-components/atoms'
import { FormHandler, InputHandler } from 'src/UI-components/molecules'
import { CaptionWithCheckbox } from 'src/UI-components/molecules/Caption/CaptionWithCheckbox/CaptionWithCheckbox'
import {
    PaymentInfoModal,
    useFormWithRecentCardBalance,
} from 'src/UI-components/organisms'
import { getDropdownOptionsFromCards } from 'src/utils'
import {
    formatCardNumberInput,
    formatInputValueAfterComma,
    formatSumInputValue,
} from 'src/utils/formatInputValue'
import { Box } from '@mui/material'

import { amountLimits } from '../transfers.utils'

import { getCardNumberValidationRules } from './cardValidationUtils'

import {
    cardFieldText,
    conditionsText,
    transferAmountFieldText,
    transferButtonText,
    writeOffCardFieldText,
} from '../TransfersPage.const'

interface Props {
    depositCards: DepositCard[]
}

export const TransferByCard: FC<Props> = ({ depositCards }) => {
    const [checked, setChecked] = useState<boolean>(false)
    const [modal, setModal] = useState<boolean>(false)
    const [cardNumber, setCardNumber] = useState<string>('')
    const navigate = useNavigate()
    const isCardNumberValid = /^[0-9]{16}$/.test(cardNumber)
    const options = getDropdownOptionsFromCards(depositCards)

    const cardNumberValidationSchema = getCardNumberValidationRules({
        cardNumberMinLength: 16,
    })

    const methods = useFormWithRecentCardBalance(
        {
            mode: 'onTouched',
            defaultValues: { cardName: options[0].text, amountToPay: '' },
        },
        depositCards,
        amountLimits,
        () => cardNumberValidationSchema
    )

    const [hasInteracted, setHasInteracted] = useState(false)
    const [amountInputValue, setAmountInputValue] = useState<string>('')

    const {
        formState: { errors },
    } = methods

    const openConditions = useCallback(() => {
        window.open(require('src/assets/pdf/transferConditions.pdf'), '_blank')
    }, [])

    const transformValueCb = useCallback((value: string) => {
        return formatSumInputValue(value, {
            lengthBeforeComma: 6,
        })
    }, [])

    const handleChangeChecked = useCallback(() => {
        setChecked((prev) => !prev)
    }, [])

    const handleSubmit = useCallback(
        (data) => {
            navigate('../transfers/info', { state: data })
        },
        [navigate]
    )
    const handleClose = useCallback(() => setModal(false), [])
    const buttonDisabled = Boolean(errors.amountToPay) || !checked
    return (
        <>
            <PaymentInfoModal
                open={modal}
                onClose={handleClose}
                onClickAddFavorite={() => {}}
            />
            <Box sx={{ width: '343px' }}>
                <FormHandler methods={methods} onSubmit={handleSubmit}>
                    <DropdownMenu
                        staticLabel={writeOffCardFieldText.label}
                        size="long"
                        height="short"
                        name="cardName"
                        options={options}
                        defaultValue={options[0].text}
                        placeholder={writeOffCardFieldText.placeholder}
                    />
                    <InputHandler
                        type="text"
                        name="cardNumber"
                        size="long"
                        maxLength={19}
                        staticLabel={cardFieldText.label}
                        helperText={
                            !hasInteracted ? '' : cardFieldText.helperText
                        }
                        placeholder={cardFieldText.placeholder}
                        transformValue={formatCardNumberInput}
                        required
                    />
                    <InputHandler
                        type="text"
                        name="amountToPay"
                        size="long"
                        staticLabel={transferAmountFieldText.label}
                        helperText={
                            amountInputValue
                                ? transferAmountFieldText.commissionText
                                : transferAmountFieldText.helperText
                        }
                        placeholder={transferAmountFieldText.placeholder}
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
                    <Button
                        disabled={buttonDisabled || !isCardNumberValid}
                        size="long"
                        type="submit"
                    >
                        {transferButtonText}
                    </Button>
                </FormHandler>
            </Box>
        </>
    )
}
