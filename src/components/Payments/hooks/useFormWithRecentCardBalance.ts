import { useEffect, useState } from 'react'
import { Resolver, useForm, UseFormProps } from 'react-hook-form'
import { DepositCard } from 'src/types/MyCardsType'
import { AmountValidationProps } from 'src/types/schemeTypes'
import { ObjectSchema } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'

import { findLatestOpenedCard } from '../Payments.util'

export interface UseFormWithRecentCardBalanceValues {
    cardName: string
    amountToPay: string
    [key: string]: string
}

export const useFormWithRecentCardBalance = (
    props: UseFormProps<UseFormWithRecentCardBalanceValues>,
    depositCards: DepositCard[],
    validationData: Omit<AmountValidationProps, 'availableBalance'>,
    getSchema: (
        amountValidationData: AmountValidationProps
    ) => ObjectSchema<any>
) => {
    const [recentCardBalance, setRecentCardBalance] = useState(0)

    const amountValidationData = {
        ...validationData,
        availableBalance: recentCardBalance,
    }

    const resolver: Resolver<UseFormWithRecentCardBalanceValues> = yupResolver(
        getSchema(amountValidationData)
    )

    const methods = useForm<UseFormWithRecentCardBalanceValues>({
        ...props,
        resolver,
    })

    const { watch, trigger, setValue } = methods

    const [cardName, amountToPay] = watch(['cardName', 'amountToPay'])
    useEffect(() => {
        const { text, balance } = findLatestOpenedCard(depositCards, cardName)

        setRecentCardBalance(balance)
        setValue('cardName', text)

        if (amountToPay !== '' && recentCardBalance !== balance) {
            setTimeout(() => {
                trigger('amountToPay')
            }, 0)
        }
    }, [depositCards, setValue, cardName, trigger])
    return methods
}
