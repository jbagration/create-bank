import { FC, memo, SyntheticEvent } from 'react'
import { IconDelete } from 'src/assets'
import { Grid, Typography } from '@mui/material'

import { FavoriteKey, favoritePayments } from './favoritePayments.const'

import { favoritePaymentWrapperStyle } from './listWithFavoritePayments.style'

interface Props {
    title: FavoriteKey
    transferOrderId: string
    sum: number
    onClick?: (
        transferOrderId: string
    ) => (e: SyntheticEvent<HTMLElement>) => void
}

export const FavoritePaymentItem: FC<Props> = memo(
    ({ sum, title, transferOrderId, onClick }) => {
        const { src, name } = favoritePayments[title]
        const handleClick = onClick && onClick(transferOrderId)
        return (
            <Grid
                onClick={handleClick}
                sx={favoritePaymentWrapperStyle}
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <img src={src} />
                <Typography variant="subtitle3">{name}</Typography>
                <Typography>{`${sum} RUB`}</Typography>
                <IconDelete />
            </Grid>
        )
    }
)
