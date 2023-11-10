import { ErrorBoundary } from 'src/UI-components/organisms/ErrorBoundary/ErrorBoundary'
import { Grid } from '@mui/material'

import {
    ExchangeRatesTable,
    WrapperWithTitle,
} from '../../../UI-components/molecules'
import {
    FeaturedServices,
    MyCardsContainer,
    OperationHistoryContainer,
} from '../../../UI-components/organisms'

export const MainPage = () => {
    return (
        <Grid data-testid="main-page" spacing="36px" container>
            <Grid item xs={12} sm={6} md={7}>
                <WrapperWithTitle title="Мои карты">
                    <MyCardsContainer />
                </WrapperWithTitle>
                <WrapperWithTitle title="История операций">
                    <OperationHistoryContainer />
                </WrapperWithTitle>
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
                <WrapperWithTitle title="Курсы валюты">
                    <ErrorBoundary title={`"Курсы валют"`}>
                        <ExchangeRatesTable />
                    </ErrorBoundary>
                </WrapperWithTitle>
            </Grid>

            <Grid item xs={12} sm={12} md={12} sx={{ pt: '0 !important' }}>
                <WrapperWithTitle title="Популярные услуги">
                    <FeaturedServices />
                </WrapperWithTitle>
            </Grid>
        </Grid>
    )
}
