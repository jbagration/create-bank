import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { longDropdownInputStyles } from 'src/common/common.styles'
import { Button, DropdownMenu } from 'src/UI-components/atoms'
import {
    CalendarContainerWithFormContext,
    FormHandler,
    InputWithSlider,
} from 'src/UI-components/molecules'
import {
    defaultFilters,
    operationTypes,
    operationTypesMap,
    transferTypes,
    transferTypesMap,
} from 'src/UI-components/organisms'
import { Grid, Typography } from '@mui/material'

import {
    getCardNumberByText,
    getCardsForFilter,
    getCurrentCardCreationDate,
    getTextByCardNumber,
} from './FilterForm.util'

import { filterFormTypographyStyles } from './FilterForm.style'

import { FilterFormValues } from './Filter.type'
import { FilterFormProps, TypeName } from './FilterForm.type'

export const FilterForm: FC<FilterFormProps> = memo(
    ({ cards, setHistoryFilters, cardNumber, count, filters }) => {
        const navigate = useNavigate()
        const cardsForFilter = useMemo(() => getCardsForFilter(cards), [cards])
        const defaultCardText = useMemo(
            () => getTextByCardNumber(cardsForFilter, cardNumber),
            [cardsForFilter, cardNumber]
        )

        const getTypeName = (typesArr: TypeName[], value: string) => {
            const result = typesArr.filter((item: TypeName) => {
                return item.key === value
            })

            return result[0].text
        }

        const defaultValues = {
            cardNumber: getTextByCardNumber(cardsForFilter, filters.cardNumber),
            operationType: getTypeName(operationTypes, filters.operationType),
            type_name: getTypeName(transferTypes, filters.type_name),
            sum: [filters.min_sum, filters.max_sum],
            dates: {
                from: new Date(filters.from),
                to: new Date(filters.to),
            },
        }

        const methods = useForm({
            mode: 'onChange',
        })

        const { reset, watch } = methods
        const resetHandler = () => {
            navigate('#', { state: {}, replace: true })
            reset({
                cardNumber: getTextByCardNumber(cardsForFilter, cardNumber),
                operationType: getTypeName(
                    operationTypes,
                    defaultFilters.operationType
                ),
                type_name: getTypeName(transferTypes, defaultFilters.type_name),
                sum: [defaultFilters.min_sum, defaultFilters.max_sum],
                date: {
                    from: new Date(defaultFilters.from),
                    to: new Date(defaultFilters.to),
                },
            })
            if (setHistoryFilters) {
                setHistoryFilters(
                    {
                        cardNumber,
                        min_sum: defaultFilters.min_sum,
                        max_sum: defaultFilters.max_sum,
                        type_name: defaultFilters.type_name,
                        operationType: defaultFilters.operationType,
                        date: {
                            from: new Date(defaultFilters.from),
                            to: new Date(defaultFilters.to),
                        },
                    },
                    'reset'
                )
            }
        }

        const onSubmitHandler = useCallback(
            (data: FilterFormValues) => {
                const dates: { from?: Date; to?: Date } = {}
                if (data.date) {
                    dates.from = data.date.from
                    dates.to = data.date.to ? data.date.to : data.date.from
                }

                if (setHistoryFilters)
                    setHistoryFilters(
                        {
                            cardNumber: getCardNumberByText(
                                cardsForFilter,
                                data.cardNumber
                            ),
                            date: {
                                from: dates.from,
                                to: dates.to,
                            },
                            min_sum: data.sum && data.sum[0],
                            max_sum: data.sum && data.sum[1],
                            operationType:
                                data.operationType &&
                                operationTypesMap.get(data.operationType),
                            type_name:
                                data.type_name &&
                                transferTypesMap.get(data.type_name),
                        },
                        'start'
                    )
            },
            [cardsForFilter, setHistoryFilters]
        )

        useEffect(() => {
            if (setHistoryFilters) setHistoryFilters()
        }, [count, setHistoryFilters])

        const [cardCreationDate, setCardCreationDate] = useState<string>(
            getCurrentCardCreationDate(cards, cardNumber)
        )

        const cardNumberField = watch('cardNumber')

        useEffect(() => {
            const currentCardNumber = getCardNumberByText(
                cardsForFilter,
                cardNumberField
            )

            setCardCreationDate(
                getCurrentCardCreationDate(cards, currentCardNumber)
            )
        }, [cards, cardsForFilter, cardNumberField])

        return (
            <FormHandler methods={methods} onSubmit={onSubmitHandler}>
                <Grid container direction="row" justifyContent="space-between">
                    <Grid item xs={8}>
                        <DropdownMenu
                            defaultValue={defaultValues.cardNumber}
                            staticLabel="Карта"
                            name="cardNumber"
                            options={cardsForFilter}
                            outlined="true"
                            size="long"
                            autosize="true"
                            height="short"
                            sx={longDropdownInputStyles}
                        />

                        <DropdownMenu
                            defaultValue={defaultValues.operationType}
                            staticLabel="Доход/расход"
                            outlined="true"
                            size="long"
                            name="operationType"
                            options={operationTypes}
                        />

                        <DropdownMenu
                            defaultValue={defaultValues.type_name}
                            staticLabel="Тип операции"
                            outlined="true"
                            size="long"
                            name="type_name"
                            height="short"
                            options={transferTypes}
                        />

                        <Typography
                            mb="16px"
                            variant="body2"
                            color={filterFormTypographyStyles}
                        >
                            Сумма сделки
                        </Typography>

                        <InputWithSlider
                            withRange
                            captions
                            name="sum"
                            minValue={0}
                            maxValue={100000}
                            defaultValue={defaultValues.sum}
                            type="text"
                        />

                        <Button
                            type="submit"
                            size="long"
                            buttonVariant="primary"
                        >
                            Применить
                        </Button>
                    </Grid>

                    <Grid
                        container
                        xs={4}
                        sx={{
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <CalendarContainerWithFormContext
                            cardCreationDate={cardCreationDate}
                            defaultDates={defaultValues.dates}
                        />
                        <Button
                            type="button"
                            size="large"
                            buttonVariant="secondary"
                            onClick={resetHandler}
                        >
                            Сбросить
                        </Button>
                    </Grid>
                </Grid>
            </FormHandler>
        )
    }
)
