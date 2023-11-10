import { FC, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreditCard, DepositCard } from 'src/types/MyCardsType'
import { Button, DropdownMenu } from 'src/UI-components/atoms'
import { FormHandler, InputHandler } from 'src/UI-components/molecules'
import { CaptionWithCheckbox } from 'src/UI-components/molecules/Caption/CaptionWithCheckbox/CaptionWithCheckbox'
import { PaymentInfoModal } from 'src/UI-components/organisms'
import {
    formatInputValueAfterComma,
    formatSumInputValue,
} from 'src/utils/formatInputValue'
import { Box } from '@mui/material'

import { useBetweenYourCardsFields } from './betweenYourCardsFields.utils'

import {
    conditionsText,
    passingToAnCardFieldText,
    transferAmountFieldText,
    transferButtonText,
    writeOffCardFieldText,
} from '../TransfersPage.const'

interface Props {
    depositCards: DepositCard[]
    creditCards?: CreditCard[]
}

export const BetweenYourCardsFields: FC<Props> = ({
    depositCards,
    creditCards = [],
}) => {
    const { methods, depositCardsList, transferCards } =
        useBetweenYourCardsFields({
            depositCards,
            creditCards,
        })
    const [checked, setChecked] = useState<boolean>(false)
    const [openModal, setOpenModal] = useState<boolean>(false)
    const {
        formState: { errors },
    } = methods

    const navigate = useNavigate()
    const handleSubmit = useCallback(
        (data) => {
            navigate('../transfers/info', { state: data })
        },
        [navigate]
    )

    const handleCloseModal = useCallback(() => {
        setOpenModal(false)
    }, [setOpenModal])

    const handleCheckboxChange = useCallback(() => {
        setChecked((prev) => !prev)
    }, [setChecked])

    const openConditions = useCallback(() => {
        window.open(require('src/assets/pdf/transferConditions.pdf'), '_blank')
    }, [])

    const transformValueCb = useCallback((value: string) => {
        return formatSumInputValue(value, {
            lengthBeforeComma: 6,
        })
    }, [])
    const buttonDisabled = Boolean(errors.amountToPay) || !checked
    return (
        <>
            <PaymentInfoModal
                open={openModal}
                onClickAddFavorite={() => {}}
                onClose={handleCloseModal}
            />
            <Box sx={{ width: '343px' }}>
                <FormHandler methods={methods} onSubmit={handleSubmit}>
                    <DropdownMenu
                        staticLabel={writeOffCardFieldText.label}
                        size="long"
                        height="short"
                        name="cardName"
                        options={depositCardsList}
                        defaultValue={depositCardsList[0].text}
                        placeholder={writeOffCardFieldText.placeholder}
                    />
                    <DropdownMenu
                        staticLabel={passingToAnCardFieldText.label}
                        size="long"
                        height="short"
                        name="passingToAnCard"
                        options={transferCards}
                        defaultValue={transferCards[0].text}
                        placeholder={passingToAnCardFieldText.placeholder}
                    />
                    <InputHandler
                        type="text"
                        name="amountToPay"
                        size="long"
                        staticLabel={transferAmountFieldText.label}
                        helperText={transferAmountFieldText.helperText}
                        placeholder={transferAmountFieldText.placeholder}
                        transformValueOnBlur={formatInputValueAfterComma}
                        transformValue={transformValueCb}
                    />

                    <CaptionWithCheckbox
                        checked={checked}
                        onChange={handleCheckboxChange}
                        textBeforeLink={conditionsText[0]}
                        linkText={conditionsText[1]}
                        onClick={openConditions}
                    />

                    <Button size="long" type="submit" disabled={buttonDisabled}>
                        {transferButtonText}
                    </Button>
                </FormHandler>
            </Box>
        </>
    )
}
