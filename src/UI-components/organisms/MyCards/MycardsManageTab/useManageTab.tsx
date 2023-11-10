import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useChangeDepositCardLimitMutation } from 'src/redux/api/cardsApi'
import { yupResolver } from '@hookform/resolvers/yup'

import { limitSchema } from './ManageTab.schema'

import { useManageTabProps } from './ManageTab.type'

export const useManageTab = ({
    cardNumber,
    initialLimit,
    disableFields,
    handleModalOpen,
}: useManageTabProps) => {
    const [changeLimit] = useChangeDepositCardLimitMutation()

    const resolver = yupResolver(limitSchema)

    const defaultValues = {
        transactionLimit: initialLimit,
    }

    const methods = useForm({ defaultValues, resolver, mode: 'onChange' })

    const {
        getValues,
        reset,
        formState: { isValid },
    } = methods

    useEffect(() => {
        reset({ transactionLimit: initialLimit })
    }, [initialLimit])

    const handleSubmit = () => {
        const transactionLimit = getValues('transactionLimit')
        const formattedValue = transactionLimit
            .replace(/\s+/g, '')
            .replace(/,/g, '.')
        const newLimit = Number.parseFloat(formattedValue).toFixed(2)

        const cardInfo = {
            cardNumber,
            transactionLimit: newLimit,
        }

        changeLimit(cardInfo)
            .unwrap()
            .then(() => {
                disableFields()
                handleModalOpen()
            })
            .catch((error) => console.log(error))
    }

    const resetField = (limit: string) => {
        reset({ transactionLimit: limit })
    }

    return { handleSubmit, methods, isValid, resetField }
}
