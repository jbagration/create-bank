import { FC, memo } from 'react'
import { Clear } from '@mui/icons-material'
import { IconButton } from '@mui/material'

import { searchButtonStyle } from './Button.style'

interface Props {
    onClick: () => void
}
export const ClearButton: FC<Props> = memo(({ onClick }) => {
    return (
        <IconButton onClick={onClick} sx={searchButtonStyle}>
            <Clear fontSize="small" />
        </IconButton>
    )
})
