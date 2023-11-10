import { ChangeEventHandler, FC } from 'react'
import { ClearButton } from 'src/UI-components/atoms'
import { Search } from '@mui/icons-material'
import { TextField } from '@mui/material'

import { searchFieldStyle } from './faq.styles'

import { searchPlaceholder } from './faq.const'

interface Props {
    value: string
    onClick: () => void
    onChange: ChangeEventHandler
}

export const FaqSearchField: FC<Props> = ({ value, onClick, onChange }) => {
    const isEmpty = !value
    const adornment = isEmpty ? <Search /> : <ClearButton onClick={onClick} />
    return (
        <TextField
            value={value}
            sx={searchFieldStyle}
            data-testid="search"
            placeholder={searchPlaceholder}
            onChange={onChange}
            InputProps={{
                endAdornment: adornment,
            }}
        />
    )
}
