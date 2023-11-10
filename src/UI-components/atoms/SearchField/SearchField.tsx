import { ChangeEvent, FC, useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Box, TextField } from '@mui/material'

import { FormHelperText } from '../FormHelperText'

import { getErrorMessage } from './SearchField.util'

import { ariaLabel } from './SearchField.const'

import { searchBoxStyles, searchInputStyles } from './SearchField.style'

interface SearchFieldProps {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchField: FC<SearchFieldProps> = ({ value, onChange }) => {
    const [error, setError] = useState('')

    useEffect(() => {
        setError(getErrorMessage(value))
    }, [value])

    return (
        <Box sx={searchBoxStyles}>
            <TextField
                sx={searchInputStyles(error.length > 0)}
                data-testid="search"
                placeholder="Поиск"
                inputProps={{
                    ariaLabel,
                }}
                InputProps={{
                    endAdornment: <SearchIcon />,
                }}
                value={value}
                onChange={onChange}
                error={error.length > 0}
            />
            {error.length > 0 && <FormHelperText error>{error}</FormHelperText>}
        </Box>
    )
}
