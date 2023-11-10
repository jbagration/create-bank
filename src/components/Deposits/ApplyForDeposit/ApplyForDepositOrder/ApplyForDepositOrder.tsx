import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNewDepositOrderMutation } from 'src/redux/api/depositsApi'
import { LocationParams } from 'src/types/hooksTypes'
import { Button, Caption, Checkbox } from 'src/UI-components/atoms'
import { CreditTermsTable } from 'src/UI-components/molecules'
import { MainMenuPage } from 'src/UI-components/organisms'
import { Box, Typography } from '@mui/material'

import type { DepositOrder } from '../ApplyForDeposit.type'
import { dataTransform } from '../ApplyForDepositForm.util'
import { ApplyForDepositModal } from '../ApplyForDepositModal'
import { ApplyForDepositPdfLink } from '../ApplyForDepositPdfLink'

import {
    captionText,
    tableFieldsNonRevocable,
    tableFieldsRevocable,
} from './ApplyForDepositOrder.const'

import {
    captionContainerStyles,
    tabCheckboxStyles,
} from './ApplyForDepositOrder.style'

export const ApplyForDepositOrder = () => {
    const { state: depositData } = useLocation() as LocationParams<DepositOrder>

    const [applyDeposit, { isError }] = useNewDepositOrderMutation()

    const [isChecked, setChecked] = useState(false)
    const [isOpen, setOpen] = useState(false)

    const handleApplyDeposit = async () => {
        await applyDeposit({
            productId: depositData.id,
            initialAmount: parseFloat(depositData.amount.replace(',', '.')),
            cardNumber: depositData.cardNumber,
            autoRenewal: depositData.autoRenewal,
            interestRate: depositData.interestRate,
            durationMonth: depositData.durationMonths,
        })
        setOpen(true)
    }

    return (
        <>
            <ApplyForDepositModal
                isOpen={isOpen}
                setOpen={setOpen}
                error={isError}
            />

            <MainMenuPage text="Подать заявку на внесение депозита" backButton>
                <Typography variant="h5">Депозит {depositData.name}</Typography>
                <CreditTermsTable
                    type="default"
                    textVariantR="strong1"
                    keysTableDetails={
                        depositData.isRevocable
                            ? tableFieldsRevocable
                            : tableFieldsNonRevocable
                    }
                    valueTableDetails={depositData}
                    dataTransform={dataTransform}
                />
                <ApplyForDepositPdfLink />
                <Caption component>
                    <Box sx={captionContainerStyles}>
                        <Checkbox
                            sx={tabCheckboxStyles}
                            checked={isChecked}
                            onChange={() => setChecked(!isChecked)}
                        />
                        <Typography variant="body1">{captionText}</Typography>
                    </Box>
                </Caption>
                <Button
                    size="long"
                    buttonVariant="primary"
                    disabled={!isChecked}
                    onClick={handleApplyDeposit}
                >
                    Оформить
                </Button>
            </MainMenuPage>
        </>
    )
}
