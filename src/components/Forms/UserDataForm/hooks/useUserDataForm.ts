import { useCallback, useEffect } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'

import { getUserDataScheme } from '../UserDataForm.schema'
import { prepareInitialValues } from '../UserDataForm.utils'

import { FormData } from '../UserDataForm.type'

export const useUserDataForm = (
    initialValues: Partial<FormData>,
    countryCode: string | null
) => {
    const resolver = yupResolver(getUserDataScheme(countryCode))

    const methods = useForm<FormData>({
        defaultValues: prepareInitialValues(initialValues),
        resolver,
        mode: 'onChange',
    })
    const {
        formState: { errors },
        control,
        reset,
    } = methods
    const resetValues = useCallback(
        () => reset(prepareInitialValues(initialValues)),
        [initialValues, reset]
    )

    useEffect(() => {
        resetValues()
    }, [reset, initialValues, resetValues])

    const { dirtyFields } = useFormState({
        control,
    })

    return {
        methods,
        errors,
        dirtyFields,
        resetValues,
    }
}
