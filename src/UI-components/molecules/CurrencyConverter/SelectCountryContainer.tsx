import { ChangeEvent, ChangeEventHandler, FC } from 'react'
import { Grid } from '@mui/material'

import { InputAmount } from './InputAmount/InputAmount'
import { SelectCountry } from './SelectCountry/SelectCountry'
import { useCurrencyContext } from './useCurrencyContext'

import { amountLabel } from './SelectCountryContainer.const'

type SelectCountryContainerProps = {
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    onBlur?: () => void
    label: string
    setResult?: (event: ChangeEvent) => void
    value: string
}

export const SelectCountryContainer: FC<SelectCountryContainerProps> = ({
    onChange,
    onBlur,
    label,
    setResult,
    value,
}) => {
    const { toCurrency, fromCurrency } = useCurrencyContext()

    const countryCode = label === amountLabel ? toCurrency : fromCurrency

    return (
        <Grid container direction="column" item width="200px" gap={10}>
            <SelectCountry onChange={onChange} countryCode={countryCode} />
            <InputAmount
                name={label}
                setResult={setResult}
                value={value}
                onBlur={onBlur}
            />
        </Grid>
    )
}
