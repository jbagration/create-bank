import { FC } from 'react'
import { Button } from '@mui/material'

import { tagButtonStyle } from 'src/UI-components/molecules/FilterBar/FilterItems/FilterItems.style'

interface Props {
    isActive: boolean
    onClick: (tag: string, active: boolean) => void
    text: string
}

export const TagButton: FC<Props> = ({ isActive, text, onClick }) => {
    const style = tagButtonStyle({ isActive })
    const handleClick = () => {
        onClick(text, isActive)
    }
    return (
        <Button disableTouchRipple data-tag sx={style} onClick={handleClick}>
            {text}
        </Button>
    )
}
