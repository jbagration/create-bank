import { ChangeEvent, useEffect, useState } from 'react'
import {
    formatSumInputValue,
    formatSumInputValueToDecimal,
} from 'src/utils/formatInputValue'
import { Grid, Typography } from '@mui/material'

import { converterTitleStyles } from './CurrencyConverter.styles'
import { SelectCountryContainer } from './SelectCountryContainer'
import { SwitchCurrency } from './SwitchCurrency'
import { CurrencyProvider } from './useCurrencyContext'
import { useCurrencyConverter } from './useCurrencyConverter'

import { amountLabel, priceLabel } from './SelectCountryContainer.const'

export const CurrencyConverter = () => {
    const {
        toCurrency,
        fromCurrency,
        handleSwitchCurrency,
        handleChangeFromCurrency,
        handleChangeToCurrency,
        amount,
        setAmount,
        price,
    } = useCurrencyConverter()

    const [fromAmount, setFromAmount] = useState<string>('1')
    const [toAmount, setToAmount] = useState<string>(
        formatSumInputValue((1 / price).toString(), {
            mayBeZero: true,
        })
    )

    useEffect(() => {
        setFromAmount('1')
        setToAmount(
            formatSumInputValue((1 / price).toString(), {
                mayBeZero: true,
            })
        )
    }, [price])

    const setFromResult = (event: ChangeEvent | string) => {
        let inputValue
        if (typeof event === 'string') {
            inputValue = event
        } else {
            inputValue = (event.target as HTMLInputElement).value
        }

        if (inputValue === '0') {
            setFromAmount(inputValue)
        } else if (/^0(?=\d)/.test(inputValue)) {
            setFromAmount(inputValue.slice(1))
        } else if (!inputValue.includes('.')) {
            setFromAmount(formatSumInputValue(inputValue, { mayBeZero: true }))
        }

        const result = (
            Number(formatSumInputValueToDecimal(inputValue)) / price
        ).toLocaleString('ru-RU', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })

        setToAmount(result)
    }

    const handleBlur = () => {
        const result = Number(
            formatSumInputValueToDecimal(fromAmount)
        ).toLocaleString('ru-RU', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })

        setFromAmount(result)
    }

    return (
        <CurrencyProvider
            value={{
                amount,
                toCurrency,
                fromCurrency,
                setAmount,
                price,
            }}
        >
            <Grid>
                <Typography
                    component="h2"
                    sx={converterTitleStyles}
                    mb="40px"
                    data-testid="currency-converter-title"
                >
                    Конвертер Валют
                </Typography>

                <Grid container gap={10}>
                    <SelectCountryContainer
                        label={priceLabel}
                        onChange={handleChangeFromCurrency}
                        onBlur={handleBlur}
                        setResult={(event) => setFromResult(event)}
                        value={fromAmount}
                    />

                    <SwitchCurrency clickHandler={handleSwitchCurrency} />

                    <SelectCountryContainer
                        label={amountLabel}
                        onChange={handleChangeToCurrency}
                        value={toAmount}
                    />
                </Grid>
            </Grid>
        </CurrencyProvider>
    )
}
