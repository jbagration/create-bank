import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { applicationCardDataSchema } from 'src/utils'
import { yupResolver } from '@hookform/resolvers/yup'

import { makeFullAdress } from './ByPostTab.helper'

import { TabProps } from '../CardProductApply.type'

export const useByPostTab = ({
    createDebitCard,
    accountNumber,
    productId,
    showSuccessModal,
}: TabProps) => {
    const resolver = yupResolver(applicationCardDataSchema)

    const methods = useForm({
        resolver,
        mode: 'onChange',
    })

    const {
        formState: { isValid },
        watch,
    } = methods

    const data = watch()

    const handleSubmit = useCallback(() => {
        const address = makeFullAdress(data)

        if (productId) {
            createDebitCard({
                productId,
                shippingMethod: 'BYPOST',
                city: data.city,
                address,
                ...(accountNumber && { accountNumber }),
            })
                .unwrap()
                .then(showSuccessModal)
                .catch(() => {})
        }
    }, [accountNumber, createDebitCard, data, productId, showSuccessModal])

    return { handleSubmit, methods, isValid }
}
