import { FC } from 'react'
import { Box } from '@mui/material'

import { ChangeEventType } from '../../../../types/CommonTypes'
import { Input } from '../../../atoms'
import { useCurrencyContext } from '../useCurrencyContext'

import { countries } from '../SelectCountry/SelectCountry.const'
import { amountLabel, priceLabel } from '../SelectCountryContainer.const'

import { inputAmountStyles } from './InputAmount.style'

import { InputAmountProps } from './InputAmount.type'

export const InputAmount: FC<InputAmountProps> = ({
    name,
    setResult,
    value,
    onBlur,
}) => {
    const { toCurrency, fromCurrency, price } = useCurrencyContext()

    const isAmountLabel = name === amountLabel
    const isPriceLabel = name === priceLabel

    const handleChange = (event: ChangeEventType) => {
        if (setResult) {
            setResult(event, price)
        }
    }

    const currencySymbol = countries.map((country) => {
        const currencyCode = isPriceLabel ? toCurrency : fromCurrency

        if (country.label === currencyCode) return country.symbol

        return ''
    })

    return (
        <Box>
            <Input
                name={name}
                size="short"
                type="text"
                outlined="true"
                staticLabel={name}
                startAdornment={currencySymbol}
                onChange={handleChange}
                value={value}
                sx={inputAmountStyles}
                onBlur={onBlur}
                readOnly={isAmountLabel}
                data-testid={`${name}`}
            />
        </Box>
    )
}
