import { FC } from 'react'
import { MenuItem, Typography } from '@mui/material'

import { Input } from '../../../atoms'

import {
    countryTextStyles,
    labelTextStyles,
    menuItemStyles,
} from './SelectCountry.styles'

import { countries } from './SelectCountry.const'

import { SelectCountryType } from './SelectCountry.type'

export const SelectCountry: FC<SelectCountryType> = ({
    onChange,
    countryCode,
}) => {
    return (
        <Input
            select
            size="short"
            type="text"
            name=""
            onChange={onChange}
            value={countryCode}
            defaultValue={countryCode}
            sx={{ '.MuiOutlinedInput-input': { p: '12px' } }}
            customMenuPosition
        >
            {countries.map(({ label, icon, value }) => {
                const code = value.slice(0, 3)
                const currency = value.slice(3)

                return (
                    <MenuItem key={label} value={label} sx={menuItemStyles}>
                        {icon}
                        <Typography component="span">
                            <Typography
                                component="span"
                                variant="strong1"
                                sx={labelTextStyles}
                            >
                                {code}
                            </Typography>

                            <Typography
                                component="span"
                                sx={countryTextStyles}
                                data-testid="currency-converter-select"
                            >
                                {currency}
                            </Typography>
                        </Typography>
                    </MenuItem>
                )
            })}
        </Input>
    )
}
