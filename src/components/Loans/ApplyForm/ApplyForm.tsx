import { FC, useMemo, useState } from 'react'
import { format } from 'date-fns'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { TryAgainIcon } from 'src/assets/svg'
import { textMainStyles } from 'src/common/common.styles'
import { ApplyFormButtons } from 'src/components/Loans/ApplyForm/ApplyFormButtons'
import { useNewOrderMutation } from 'src/redux/api/creditOrdersApi'
import { useAppDispatch } from 'src/redux/hooks/redux'
import {
    resetCreditState,
    saveCreditState,
} from 'src/redux/slices/creditProductsSlice'
import { TextButton } from 'src/UI-components/atoms'
import { FormHandler, NotificationModal } from 'src/UI-components/molecules'
import { formatSumInputValueToDecimal } from 'src/utils/formatInputValue'
import { yupResolver } from '@hookform/resolvers/yup'
import { Grid, Typography } from '@mui/material'

import { schemaApplyInputs } from './ApplyForm.schema'
import { getCurrencyLabel } from './applyForm.utils'
import { IncomeAndExpenses } from './IncomeAndExpenses'
import { LoanOptions } from './LoanOptions'
import { useApplyFormEffect } from './useApplyFormEffect'

import { applyDefaultValue } from '../loans.const'

import { ApplyProps, NewApply } from './ApplyForm.type'
import { CreditOrderDetailsProps } from './CreditDetailsItem/CreditDetailsItem.type'

export const ApplyForm: FC<ApplyProps> = ({
    id,
    maxPeriodMonths,
    minPeriodMonths,
    maxSum,
    minSum,
    fieldsState,
    currencyCode,
}) => {
    const dispatch = useAppDispatch()

    const navigate = useNavigate()
    const location = useLocation()

    const [setOrder, { isError, isLoading, data }] = useNewOrderMutation()

    const { defaultValues, notificationTexts } = useMemo(() => {
        return applyDefaultValue(
            fieldsState?.productFields?.amount || minSum,
            fieldsState?.productFields?.periodMonths || minPeriodMonths,
            fieldsState?.productFields?.monthlyIncome || '',
            fieldsState?.productFields?.monthlyExpenditure || '',
            fieldsState?.productFields?.employerIdentificationNumber || ''
        )
    }, [fieldsState, minSum, minPeriodMonths])

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => {
        setOpen(false)
        const status = data
            ? (data as CreditOrderDetailsProps).status
            : undefined
        if (!isError && status === 'APPROVED') {
            navigate('/user_main/credits', { state: { isAccepted: true } })
            return
        }
        if (!isError && status === 'REJECT') {
            navigate('/user_main/credits', { state: { isRejected: true } })
            return
        }
        navigate('/user_main/credits')
    }

    const resolver = yupResolver(
        schemaApplyInputs(minSum, maxSum, maxPeriodMonths, minPeriodMonths)
    )

    const methods = useForm({
        defaultValues,
        resolver,
        mode: 'onChange',
    })

    const {
        formState: { isValid },
        watch,
        trigger,
        reset,
    } = methods

    useApplyFormEffect({ defaultValues, location, reset, trigger })

    const {
        amount,
        periodMonths,
        monthlyIncome,
        monthlyExpenditure,
        employerIdentificationNumber,
    } = watch()

    const [newApply, setNewApply] = useState<FormData | null>(null)

    const onSubmitHandler = (applyData: NewApply) => {
        const formData = new FormData()

        formData.append('productId', id.toString())
        formData.append('amount', applyData.amount.toString())
        formData.append('periodMonths', applyData.periodMonths.toString())
        formData.append(
            'creationDate',
            format(new Date(), 'yyyy-MM-dd').toString()
        )
        formData.append(
            'monthlyIncome',
            formatSumInputValueToDecimal(applyData.monthlyIncome)
        )
        formData.append(
            'monthlyExpenditure',
            formatSumInputValueToDecimal(applyData.monthlyExpenditure)
        )
        formData.append(
            'employerIdentificationNumber',
            applyData.employerIdentificationNumber
        )

        formData.append('files', fieldsState.passport as File)
        formData.append('files', fieldsState.incomeStatement as File)
        setNewApply(formData)
        setOrder(formData)
            .unwrap()
            .then(() => {
                dispatch(resetCreditState())
            })
        handleOpen()
    }

    const handleClick = () => {
        setOrder(newApply)
            .unwrap()
            .then(() => {
                dispatch(resetCreditState())
            })
        handleOpen()
    }

    const handleUploadDocuments = () => {
        dispatch(
            saveCreditState({
                amount,
                periodMonths,
                monthlyIncome,
                monthlyExpenditure,
                employerIdentificationNumber,
                productId: id,
            })
        )

        navigate('upload', {
            state: {
                from: location.pathname,
            },
        })
    }

    const [currencyText, labelCurrencyText] = getCurrencyLabel(currencyCode)

    const documentsUploaded =
        !!(fieldsState.passport instanceof File) &&
        !!(fieldsState.incomeStatement instanceof File)

    const isDisabled = !isValid || !documentsUploaded
    return (
        <>
            <FormHandler methods={methods} onSubmit={onSubmitHandler}>
                <Grid container sx={textMainStyles}>
                    <LoanOptions
                        currencyText={currencyText}
                        defaultValues={defaultValues}
                        labelCurrencyText={labelCurrencyText}
                        maxPeriodMonths={maxPeriodMonths}
                        minPeriodMonths={minPeriodMonths}
                        maxSum={maxSum}
                        minSum={minSum}
                    />
                    <IncomeAndExpenses
                        defaultValues={defaultValues}
                        labelCurrencyText={labelCurrencyText}
                    />
                    <ApplyFormButtons
                        isDisabled={isDisabled}
                        onClick={handleUploadDocuments}
                    />
                </Grid>
            </FormHandler>

            <NotificationModal
                type={isError && !data ? 'error' : 'done'}
                open={open}
                handleClose={handleClose}
                isLoading={isLoading}
            >
                <Typography>
                    {isError
                        ? notificationTexts.error
                        : notificationTexts.success}
                </Typography>
                {isError && (
                    <TextButton
                        variant="text"
                        type="submit"
                        startIcon={<TryAgainIcon />}
                        onClick={handleClick}
                        style={{ background: 'inherit' }}
                    >
                        Попробовать снова
                    </TextButton>
                )}
            </NotificationModal>
        </>
    )
}
