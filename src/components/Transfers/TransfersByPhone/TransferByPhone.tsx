import { ChangeEvent, FC, useCallback, useState } from 'react'
import { MuiTelInputInfo } from 'mui-tel-input'
import { useNavigate } from 'react-router-dom'
import { getTransferByPhoneScheme } from 'src/components/Payments/PaymentsMobile/PaymentsMobileForm.scheme'
import { useAppSelector } from 'src/redux/hooks/redux'
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
    formatInputValueAfterComma,
    formatSumInputValue,
} from 'src/utils/formatInputValue'
import { Box } from '@mui/material'

import { amountLimits, openConditions } from '../transfers.utils'

import {
    conditionsText,
    telephoneFieldText,
    transferAmountFieldText,
    transferButtonText,
    writeOffCardFieldText,
} from '../TransfersPage.const'

interface Props {
    depositCards: DepositCard[]
}

export const TransferByPhone: FC<Props> = ({ depositCards }) => {
    const [checked, setChecked] = useState<boolean>(false)
    const [modal, setModal] = useState<boolean>(false)
    const [phoneNumber, setPhoneNumber] = useState<MuiTelInputInfo>({
        countryCallingCode: '7',
        countryCode: null,
        nationalNumber: '1',
        numberType: null,
        numberValue: '+71',
        reason: 'input',
    })
    const { user } = useAppSelector((store) => store.auth)
    const options = getDropdownOptionsFromCards(depositCards)
    const methods = useFormWithRecentCardBalance(
        {
            mode: 'onTouched',
            defaultValues: { cardName: options[0].text, amountToPay: '' },
        },
        depositCards,
        amountLimits,
        getTransferByPhoneScheme(
            phoneNumber.countryCode,
            user?.mobilePhone as string
        )
    )
    const {
        formState: { errors },
    } = methods

    const transformValueCb = useCallback((value: string) => {
        return formatSumInputValue(value, {
            lengthBeforeComma: 6,
        })
    }, [])

    const handleChangePhoneNumber = useCallback(
        (
            e: string | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            info: MuiTelInputInfo
        ) => {
            setPhoneNumber(info)
        },
        []
    )

    const handleChangeChecked = useCallback(() => {
        setChecked((prev) => !prev)
    }, [])

    const navigate = useNavigate()
    const handleSubmit = useCallback(
        (data) => {
            navigate('../transfers/info', { state: data })
        },
        [navigate]
    )

    const handleClose = useCallback(() => setModal(false), [])

    const buttonDisabled = Boolean(errors.amountToPay) || !checked
    const { label, helperText, placeholder } = transferAmountFieldText
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
                        type="tel"
                        name="phoneNumber"
                        size="long"
                        staticLabel={telephoneFieldText}
                        onChange={handleChangePhoneNumber}
                        info={phoneNumber}
                    />
                    <InputHandler
                        type="text"
                        name="amountToPay"
                        size="long"
                        staticLabel={label}
                        helperText={helperText}
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
        </>
    )
}
