import { useLayoutEffect, useMemo, useState } from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import { getAmountToPayValidationRules } from 'src/common/common.schemes'
import { findLatestOpenedCard } from 'src/components/Payments/Payments.util'
import { CreditCard, DepositCard } from 'src/types/MyCardsType'
import { OptionFields } from 'src/utils'
import { yupResolver } from '@hookform/resolvers/yup'

import { getOptions, getTransferCards } from '../transfers.utils'

interface Return {
    methods: UseFormReturn
    depositCardsList: OptionFields[]
    creditCardsList: OptionFields[]
    transferCards: OptionFields[]
}

export const useBetweenYourCardsFields = ({
    depositCards,
    creditCards = [],
}: {
    depositCards: DepositCard[]
    creditCards?: CreditCard[]
}): Return => {
    const [balance, setBalance] = useState<number>(0)
    const schema = getAmountToPayValidationRules({
        amountMin: 10,
        amountMax: 100000,
        availableBalance: balance,
    })

    const methods = useForm({
        mode: 'onTouched',
        resolver: yupResolver(schema),
    })
    const { watch, setValue, trigger } = methods
    const [cardName, amountToPay] = watch(['cardName', 'amountToPay'])
    const [depositCardsList, creditCardsList] = useMemo(
        () => getOptions([depositCards, creditCards]),
        [depositCards, creditCards]
    )
    const allCards = depositCardsList.concat(creditCardsList)
    const transferCards = getTransferCards(allCards, cardName)

    useLayoutEffect(() => {
        const { balance } = findLatestOpenedCard(depositCards, cardName)
        setBalance(balance)
        setValue('passingToAnCard', transferCards[0].text)
        if (balance) {
            setTimeout(() => {
                trigger('amountToPay')
            }, 0)
        }
    }, [cardName, amountToPay, setValue, trigger, depositCards, transferCards])
    return {
        methods,
        depositCardsList,
        creditCardsList,
        transferCards,
    }
}
