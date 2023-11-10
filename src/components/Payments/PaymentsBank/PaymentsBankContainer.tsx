import { Preloader } from 'src/assets/svg'
import { ApplyForDepositCaption } from 'src/components/Deposits'
import { useGetDepositCardsQuery } from 'src/redux/api/cardsApi'
import { MainMenuPage } from 'src/UI-components/organisms/MainMenuPageComponent'
import { Box } from '@mui/material'

import { PaymentsBankForm } from './PaymentsBankForm'

export const PaymentsBankContainer = () => {
    const title = 'Банковский платёж'

    const { data: depositCards, isSuccess: isDepCardSuccess } =
        useGetDepositCardsQuery()

    if (!isDepCardSuccess) {
        return <Preloader />
    }

    return (
        <Box sx={{ marginLeft: '50px', marginTop: '20px' }}>
            <MainMenuPage text={title} backButton>
                {depositCards.length === 0 ? (
                    <ApplyForDepositCaption />
                ) : (
                    <PaymentsBankForm depositCards={depositCards} />
                )}
            </MainMenuPage>
        </Box>
    )
}
