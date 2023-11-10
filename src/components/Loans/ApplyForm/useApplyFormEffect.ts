import { useEffect } from 'react'
import { UseFormReset, UseFormTrigger } from 'react-hook-form'
import { Location } from 'react-router-dom'

import { NewApply } from './ApplyForm.type'

interface Props {
    defaultValues: NewApply
    location: Location
    reset: UseFormReset<NewApply>
    trigger: UseFormTrigger<NewApply>
}

export const useApplyFormEffect = ({
    defaultValues,
    location,
    reset,
    trigger,
}: Props) => {
    useEffect(() => {
        reset(defaultValues)
    }, [defaultValues, reset])

    useEffect(() => {
        if (location.state?.from === 'upload') {
            trigger()
        }
    }, [location.state?.from, trigger])
}
