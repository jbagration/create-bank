import { FC, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { myLinkSx } from 'src/common/common.styles'
import { CardProduct } from 'src/models/cardProducts.dto'
import { Box, Typography } from '@mui/material'

import { ItemCard } from '../../molecules'

import { CardProductsInfo } from './CardProductsInfo/CardProductsInfo'

import { cardBoxStyles, cardTitleStyles } from './CardProducts.style'

import { ModifiedProducts } from './CardProducts.type'

export const CardProducts: FC<{ data: CardProduct[] }> = memo(({ data }) => {
    const navigate = useNavigate()
    return (
        <>
            {data.map((item: ModifiedProducts) => (
                <Box
                    sx={cardBoxStyles}
                    key={item.id}
                    data-testid="card-product"
                >
                    <Box>
                        <ItemCard key={item.id} {...item} />
                    </Box>

                    <Box sx={{ maxWidth: '496px' }}>
                        <Typography sx={cardTitleStyles} variant="strong1">
                            {item.cardName}
                        </Typography>
                        <CardProductsInfo data={item} />
                        <Typography
                            data-testid="more"
                            variant="textLink3"
                            sx={myLinkSx}
                            onClick={() => {
                                navigate(`${item.id}`, { state: data })
                            }}
                        >
                            Показать больше
                        </Typography>
                    </Box>
                </Box>
            ))}
        </>
    )
})
