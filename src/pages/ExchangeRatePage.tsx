import { FC } from 'react'
import { ErrorBoundary } from 'src/UI-components/organisms/ErrorBoundary/ErrorBoundary'
import { Grid } from '@mui/material'

import {
    CurrencyConverter,
    ModalActionButton,
    StyledContentContainerLarge,
} from '../UI-components/molecules'
import { ExchangeRatesTable } from '../UI-components/molecules/ExchangeRatesComponent/ExchangeRatesTable'
import { FooterPanel } from '../UI-components/molecules/Footer/FooterPanel/FooterPanel'
import { Header } from '../UI-components/molecules/Header/Header'

export const ExchangeRatePage: FC = () => {
    const headerStyles = {
        marginLeft: '-15px',
    }
    return (
        <>
            <div style={headerStyles}>
                <Header main={false} />
            </div>
            <StyledContentContainerLarge
                sx={{ paddingBottom: 0, overflowX: 'hidden' }}
            >
                <Grid minHeight="calc(100vh - 382px)">
                    <ModalActionButton
                        modalAction="back"
                        data-testid="exchange-back-button"
                    />
                    <ErrorBoundary
                        title="курсах валют или конвертере валют"
                        isButton
                    >
                        <Grid container ml="142px" mt={5} gap="110px">
                            <ExchangeRatesTable title="Курсы Валют" />
                            <CurrencyConverter />
                        </Grid>
                    </ErrorBoundary>
                </Grid>
            </StyledContentContainerLarge>
            <FooterPanel />
        </>
    )
}
