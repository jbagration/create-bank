import { FC, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
    nonRevocableDepositRateByDuration,
    revocableDepositRateByDuration,
} from 'src/common'
import { getAmountToPayValidationRules } from 'src/common/common.schemes'
import { LocationParams } from 'src/types/hooksTypes'
import { DepositCard } from 'src/types/MyCardsType'
import { FormHandler } from 'src/UI-components/molecules'
import {
    useFormWithRecentCardBalance,
    UseFormWithRecentCardBalanceValues,
} from 'src/UI-components/organisms'
import { getDropdownOptionsFromCards } from 'src/utils'
import { Grid } from '@mui/material'

import { DepositProductsType } from '../DepositProducts'

import { ApplyForDepositDuration } from './ApplyForDepositDuration'
import { createDepositOptions } from './ApplyForDepositForm.util'
import { ApplyForDepositPayment } from './ApplyForDepositPayment'
import { ApplyForDepositSubmitButton } from './ApplyForDepositSubmitButton'
import { ApplyForDepositSwitchGroup } from './ApplyForDepositSwitch'

import { ApplyForDepositState } from './ApplyForDeposit.type'

interface ApplyForDepositFormProps {
    depositVariants: DepositProductsType[]
    depositCards: DepositCard[]
}

export const ApplyForDepositForm: FC<ApplyForDepositFormProps> = ({
    depositVariants,
    depositCards,
}) => {
    const {
        state: { isRevocable, amountMin, amountMax, currencyCode },
    } = useLocation() as LocationParams<ApplyForDepositState>

    const defaultValues = {
        cardName: 'Loading...',
        amountToPay: '',
        durationMonths: '3 месяца',
        interestRate: isRevocable
            ? revocableDepositRateByDuration['3 месяца']
            : nonRevocableDepositRateByDuration['3 месяца'],
    }

    const methods = useFormWithRecentCardBalance(
        {
            defaultValues,
            mode: 'onChange',
        },
        depositCards,
        {
            amountMax,
            amountMin,
            currencyCode,
        },
        getAmountToPayValidationRules
    )

    const navigate = useNavigate()

    const cardOptions = getDropdownOptionsFromCards(depositCards)
    const depositOptions = createDepositOptions(depositVariants)

    const [chosenDeposit, setChosenDeposit] = useState(depositVariants[0] ?? {})
    const isAutoRenewalActive = useState<boolean>(true)
    const isCapitalizationActive = useState<boolean>(true)

    const handleSubmit = (data: UseFormWithRecentCardBalanceValues) => {
        const cardNumberObj = cardOptions.find((i) => i[data.cardName])
        const cardNumber = cardNumberObj && cardNumberObj[data.cardName]
        const newDepositFields = {
            amount: data.amountToPay,
            cardNumber,
            cardName: data.cardName,
            autoRenewal: isAutoRenewalActive[0],
            isCapitalizationActive: isCapitalizationActive[0],
        }

        navigate(`/user_main/deposits/products/order/${chosenDeposit.id}`, {
            state: {
                ...chosenDeposit,
                ...newDepositFields,
            },
        })

        return data
    }

    return (
        <FormHandler methods={methods} onSubmit={handleSubmit}>
            <Grid container rowSpacing={4} direction="column">
                <ApplyForDepositDuration
                    setChosenDeposit={setChosenDeposit}
                    depositOptions={depositOptions}
                    depositVariants={depositVariants}
                />
                <ApplyForDepositPayment cardOptions={cardOptions} />
                <ApplyForDepositSwitchGroup
                    isAutoRenewalActive={isAutoRenewalActive}
                    isCapitalizationActive={isCapitalizationActive}
                />
                <ApplyForDepositSubmitButton />
            </Grid>
        </FormHandler>
    )
}
