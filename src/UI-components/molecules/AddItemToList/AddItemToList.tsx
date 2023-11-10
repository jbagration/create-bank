import { FC } from 'react'
import { AddToListIcon } from 'src/assets/svg'
import { Grid, Typography } from '@mui/material'

import { textStyles } from './AddItemToList.style'

interface AddItemToListProps {
    onClick?: () => void
}

export const AddItemToList: FC<AddItemToListProps> = ({ onClick }) => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ marginBottom: '3px' }}
        >
            <AddToListIcon onClick={onClick} style={{ cursor: 'pointer' }} />
            <Typography variant="subtitle3" sx={textStyles}>
                Добавить
            </Typography>
        </Grid>
    )
}
