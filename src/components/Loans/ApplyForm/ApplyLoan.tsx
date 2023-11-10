import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Preloader } from 'src/assets/svg'
import { useGetCreditProductsQuery } from 'src/redux/api/creditProductApi'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks/redux'
import { resetCreditState } from 'src/redux/slices/creditProductsSlice'
import { Typography } from '@mui/material'

import { MainMenuPage } from '../../../UI-components/organisms/MainMenuPageComponent'

import { ApplyForm } from './ApplyForm'

import { applyFormSubtitleStyles } from './ApplyFormWrapper.style'

export const ApplyLoan = () => {
    const dispatch = useAppDispatch()

    const { data, isLoading } = useGetCreditProductsQuery()

    const fieldsState = useAppSelector((state) => state.creditProductForm)

    const { id } = useParams()

    useEffect(() => {
        const { productId } = fieldsState.productFields

        if (productId && id !== productId?.toString()) {
            dispatch(resetCreditState())
        }
    }, [dispatch, fieldsState, id])

    const credit = data?.find((element) => element.id === Number(id))

    if (isLoading || !credit) {
        return <Preloader />
    }

    return (
        <MainMenuPage text={credit.name} backButton>
            <Typography
                variant="textLink1"
                component="h5"
                sx={applyFormSubtitleStyles}
            >
                {credit.details}
            </Typography>

            <ApplyForm
                id={credit.id}
                maxPeriodMonths={credit.maxPeriodMonths}
                minSum={Math.trunc(credit.minSum)}
                maxSum={Math.trunc(credit.maxSum)}
                minPeriodMonths={credit.minPeriodMonths}
                currencyCode={credit.currencyCode}
                fieldsState={fieldsState}
            />
        </MainMenuPage>
    )
}
