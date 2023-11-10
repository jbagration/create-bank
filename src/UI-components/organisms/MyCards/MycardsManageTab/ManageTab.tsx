import { FC, useEffect, useState } from 'react'
import { useGetDepositCardInfoQuery } from 'src/redux/api/cardsApi'
import { Button, Caption, Checkbox } from 'src/UI-components/atoms'
import { StubModal } from 'src/UI-components/molecules'
import { formatSumInputValue } from 'src/utils/formatInputValue'
import { Box, FormControlLabel, Switch, Typography } from '@mui/material'

import { MyCardDetailButton } from '../../MyCardDetail/MyCardDetailButton'
import { BlockCardWindow } from '../BlockCardModalWindow/BlockCardWindow'
import { CloseCardWindow } from '../CloseCardModalWindow/CloseCardWindow'

import { ManageTabAliasInput } from './ManageTabAliasInput'
import { ValidatedInput } from './ManageTabValidatedInput'
import { useManageTab } from './useManageTab'

import {
    captionText,
    successMessage,
    switchBLockText,
    switchUnlockText,
} from './ManageTab.const'

import {
    buttonContainerStyles,
    captionContainerStyles,
    formControlStyles,
    mainContainerStyles,
    switchContainerStyles,
    switchLabelStyles,
    tabCheckboxStyles,
    yellowSwitchStyles,
} from './ManageTab.style'

import { ManageTabProps } from './ManageTab.type'

export const ManageTab: FC<ManageTabProps> = ({
    cardId,
    cardStatus,
    cardNumber,
    cardType,
    cardAlias,
}) => {
    const { data } = useGetDepositCardInfoQuery(cardId)

    const [modalState, setModalState] = useState<boolean>(false)
    const [closeModalState, setCloseModalState] = useState<boolean>(false)
    const [isChecked, setChecked] = useState<boolean>(false)
    const [isLimitInputDisabled, setIsLimitInputDisabled] =
        useState<boolean>(true)
    const [isAliasInputDisabled, setIsAliasInputDisabled] =
        useState<boolean>(true)
    const [initialLimit, setInitialLimit] = useState<string>('0')
    const [isModalOpen, setModalOpen] = useState(false)

    const getFormattedValue = (value: number) => {
        const transformedValue = Number.parseFloat(String(value))
            .toFixed(2)
            .replace(/\./g, ',')

        return formatSumInputValue(transformedValue)
    }

    useEffect(() => {
        if (data) {
            const transformedLimit = getFormattedValue(data.transactionLimit)

            setInitialLimit(transformedLimit)
        }
    }, [data])

    const disableFields = () => {
        setIsLimitInputDisabled(true)
        setChecked(false)
    }

    const handleModalOpen = () => setModalOpen(true)

    const handleModalClose = () => setModalOpen(false)

    const {
        handleSubmit,
        methods,
        isValid: isInputValid,
        resetField,
    } = useManageTab({
        cardNumber,
        initialLimit,
        disableFields,
        handleModalOpen,
    })

    const cancel = () => {
        resetField(initialLimit)

        disableFields()
    }

    const isSubmitDisabled = !isChecked || !isInputValid

    const formControlStylesSx = formControlStyles({ cardStatus })

    return (
        <Box sx={mainContainerStyles}>
            {data && (
                <>
                    <ManageTabAliasInput
                        setIsDisabled={setIsAliasInputDisabled}
                        isDisabled={isAliasInputDisabled}
                        cardNumber={cardNumber}
                        initialAlias={cardAlias ?? ''}
                    />
                    <Box sx={switchContainerStyles}>
                        <Typography sx={switchLabelStyles}>
                            {cardStatus === 'ACTIVE'
                                ? switchBLockText
                                : switchUnlockText}
                        </Typography>
                        <FormControlLabel
                            value={cardStatus === 'ACTIVE'}
                            control={
                                <Switch
                                    sx={yellowSwitchStyles}
                                    checked={cardStatus === 'ACTIVE'}
                                />
                            }
                            label={
                                cardStatus === 'ACTIVE'
                                    ? 'АКТИВНА'
                                    : 'БЛОКИРОВАНА'
                            }
                            labelPlacement="end"
                            sx={formControlStylesSx}
                            onClick={(event) => {
                                event.preventDefault()
                                setModalState(!modalState)
                            }}
                        />
                    </Box>
                    {closeModalState && (
                        <CloseCardWindow
                            cardNumber={cardNumber}
                            cardType={cardType}
                            setModalState={setCloseModalState}
                        />
                    )}
                    {modalState && (
                        <BlockCardWindow
                            cardStatus={cardStatus}
                            cardNumber={cardNumber}
                            cardType={cardType}
                            setModalState={setModalState}
                        />
                    )}
                    <ValidatedInput
                        isDisabled={isLimitInputDisabled}
                        setDisabled={setIsLimitInputDisabled}
                        methods={methods}
                        initialLimit={initialLimit}
                    />
                    <Caption component>
                        <Box sx={captionContainerStyles}>
                            <Checkbox
                                sx={tabCheckboxStyles}
                                checked={isChecked}
                                onChange={() => setChecked(!isChecked)}
                            />
                            <Typography>{captionText}</Typography>
                        </Box>
                    </Caption>
                    <Box sx={buttonContainerStyles}>
                        <Button
                            sx={{ marginRight: '32px' }}
                            buttonVariant="primary"
                            size="medium"
                            disabled={isSubmitDisabled}
                            onClick={handleSubmit}
                        >
                            Принять
                        </Button>
                        <Button cancel size="medium" onClick={cancel}>
                            Отмена
                        </Button>
                    </Box>
                    <Box
                        sx={{ marginTop: '56px', display: 'flex', gap: '30px' }}
                    >
                        <MyCardDetailButton type={cardType} id={cardId} />
                        <Button
                            size="long"
                            onClick={(event) => {
                                event.preventDefault()
                                setCloseModalState(!closeModalState)
                            }}
                        >
                            Закрыть карту
                        </Button>
                    </Box>

                    <StubModal
                        isOpen={isModalOpen}
                        message={successMessage}
                        onConfirmButtonClick={handleModalClose}
                        type="success"
                    />
                </>
            )}
        </Box>
    )
}
