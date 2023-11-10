import { Dispatch, FC, SetStateAction, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import {
    nonRevocableDepositRateByDuration,
    revocableDepositRateByDuration,
} from 'src/common'
import { LocationParams } from 'src/types/hooksTypes'
import { DropdownMenu } from 'src/UI-components/atoms'
import { InputHandler } from 'src/UI-components/molecules'
import { OptionFields } from 'src/utils'
import { Grid } from '@mui/material'

import { DepositProductsType } from '../../DepositProducts'

import { ApplyForDepositState } from '../ApplyForDeposit.type'

interface ApplyForDepositDurationProps {
    setChosenDeposit: Dispatch<SetStateAction<DepositProductsType>>
    depositOptions: OptionFields[]
    depositVariants: DepositProductsType[]
}

export const ApplyForDepositDuration: FC<ApplyForDepositDurationProps> = ({
    setChosenDeposit,
    depositOptions,
    depositVariants,
}) => {
    const {
        state: { isRevocable },
    } = useLocation() as LocationParams<ApplyForDepositState>
    const { setValue, watch } = useFormContext()

    const durationMonths = watch('durationMonths')
    useEffect(() => {
        const chosenOption = depositOptions.find((i) => i[durationMonths])
        const chosenDuration = chosenOption ? chosenOption[durationMonths] : 3

        setChosenDeposit(
            (prev) =>
                depositVariants.find(
                    (i) => i.durationMonths === chosenDuration
                ) ?? prev
        )
        if (chosenOption) {
            setValue(
                'interestRate',
                isRevocable
                    ? `${
                          revocableDepositRateByDuration[chosenOption.text]
                      } годовых`
                    : `${
                          nonRevocableDepositRateByDuration[chosenOption.text]
                      } годовых`
            )
        }
    }, [
        depositOptions,
        depositVariants,
        durationMonths,
        setValue,
        isRevocable,
        setChosenDeposit,
    ])

    return (
        <>
            <Grid item>
                <DropdownMenu
                    staticLabel="Срок депозита"
                    name="durationMonths"
                    options={depositOptions}
                    size="long"
                />
            </Grid>
            <Grid item>
                <InputHandler
                    staticLabel="Процентная ставка"
                    size="long"
                    type="text"
                    name="interestRate"
                    readOnly
                />
            </Grid>
        </>
    )
}
