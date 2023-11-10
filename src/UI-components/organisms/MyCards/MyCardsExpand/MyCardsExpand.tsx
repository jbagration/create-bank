import { FC } from 'react'
import { myLinkSx } from 'src/common/common.styles'
import { Typography } from '@mui/material'

import { MyCardsExpandProps } from './MyCardsExpand.type'

export const MyCardsExpand: FC<MyCardsExpandProps> = ({
    data,
    cardsLimit,
    setCardsLimit,
}) => {
    const numberCards = data?.length || 0
    const numberCardsExpand = numberCards - cardsLimit

    return numberCardsExpand <= 0 ? null : (
        <Typography
            variant="textLink1"
            sx={myLinkSx}
            onClick={() => {
                setCardsLimit(numberCards)
            }}
        >
            + {numberCardsExpand} Раскрыть
        </Typography>
    )
}
