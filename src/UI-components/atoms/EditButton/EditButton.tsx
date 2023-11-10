import { FC } from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { Button } from '@mui/material'

import { EditButtonStyled, EditOutlinedIconStyled } from './EditButton.style'

type EditButtonType = {
    handleClick: () => void
}

export const EditButton: FC<EditButtonType> = ({ handleClick }) => {
    const EditButtonStyledSx = EditButtonStyled()
    return (
        <Button sx={EditButtonStyledSx} onClick={handleClick}>
            <EditOutlinedIcon sx={EditOutlinedIconStyled} />
        </Button>
    )
}
