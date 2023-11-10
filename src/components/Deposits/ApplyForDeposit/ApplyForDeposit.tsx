import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { Preloader } from 'src/assets/svg'
import { textMainStyles } from 'src/common/common.styles'
import { useGetDepositCardsQuery } from 'src/redux/api/cardsApi'
import { useAppSelector } from 'src/redux/hooks/redux'
import { MainMenuPage } from 'src/UI-components/organisms'
import { Box, Typography } from '@mui/material'

import { ApplyForDepositCaption } from './ApplyForDepositCaption'
import { ApplyForDepositForm } from './ApplyForDepositForm'
import { filterDepositByNameWithSort } from './ApplyForDepositForm.util'

export const ApplyForDeposit: FC = () => {
    const { data: depositCards, isSuccess: isDepCardSuccess } =
        useGetDepositCardsQuery()

    const { name } = useParams()

    const deposits = useAppSelector((s) => {
        const { data } = s.depositProducts
        return filterDepositByNameWithSort(data, name)
    })

    if (!isDepCardSuccess) {
        return <Preloader />
    }

    return (
        <MainMenuPage text="Оформить новый депозит" backButton>
            {depositCards.length === 0 ? (
                <ApplyForDepositCaption />
            ) : (
                <>
                    <Typography
                        variant="body1"
                        component="h2"
                        mt="40px"
                        sx={textMainStyles}
                    >
                        Заполните поля ниже, чтобы подать заявку на Депозит{' '}
                        {name}
                    </Typography>
                    <Typography
                        mt="40px"
                        mb="28px"
                        variant="subtitle1Bold"
                        component="h2"
                        sx={textMainStyles}
                    >
                        Варианты депозита
                    </Typography>

                    <Box sx={{ maxWidth: '400px', width: 'fit-content' }}>
                        <ApplyForDepositForm
                            depositVariants={deposits}
                            depositCards={depositCards}
                        />
                    </Box>
                </>
            )}
        </MainMenuPage>
    )
}
