import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import { Fab } from '@mui/material'

import type { LinkButtonProps } from './LinkButton.type'

import { fabStyles } from './LinkButton.style'

export const LinkButton: FC<LinkButtonProps> = ({ link }) => {
    const navigate = useNavigate()

    return (
        <Fab sx={fabStyles} onClick={() => navigate(link)}>
            <AddIcon />
        </Fab>
    )
}
