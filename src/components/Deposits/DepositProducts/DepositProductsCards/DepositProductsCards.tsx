import { FC } from 'react'
import { textMainStyles } from 'src/common/common.styles'
import { useGetDepositProductsQuery } from 'src/redux/api/depositProductApi'
import { useAppDispatch } from 'src/redux/hooks/redux'
import { pushDepositProducts } from 'src/redux/slices/depositProductsSlice'
import { MainMenuPage } from 'src/UI-components/organisms'
import { Box, Typography } from '@mui/material'

import { DepositProductCardElement } from '../DepositProductCardElement'
import { filterProducts } from '../DepositProducts.util'

import { mainContainerStyles } from './DepositProductsCards.style'

export const DepositProductsCards: FC = () => {
    const title = 'Депозитные продукты'
    const { data, isLoading, isError } = useGetDepositProductsQuery()
    const dispatch = useAppDispatch()
    dispatch(pushDepositProducts(data))

    const products = filterProducts(data)

    return (
        <MainMenuPage text={title}>
            {isError && (
                <Typography
                    variant="strong4"
                    component="h2"
                    sx={textMainStyles}
                >
                    Ошибка
                </Typography>
            )}
            {isLoading && (
                <Typography
                    variant="strong4"
                    component="h2"
                    sx={textMainStyles}
                >
                    Загрузка
                </Typography>
            )}
            <Box sx={mainContainerStyles}>
                {products
                    ?.filter((i) => i.currencyCode !== 'USD')
                    .map((i) => (
                        <DepositProductCardElement
                            key={i.id}
                            id={i.id}
                            amountMin={i.amountMin}
                            amountMax={i.amountMax}
                            currencyCode={i.currencyCode}
                            isRevocable={i.isRevocable}
                            name={i.name}
                            interestRateEarly={i.interestRateEarly}
                        />
                    ))}
            </Box>
        </MainMenuPage>
    )
}
