import { useState } from 'react'
import { textMainStyles } from 'src/common/common.styles'
import { ListWithFavoritePayments } from 'src/components/Payments/ListWithFavoritePayments/ListWithFavoritePayments'
import { PaymentTypesContainer } from 'src/components/Payments/PaymentTypesContainer'
import {
    AddItemToList,
    StubModal,
    WrapperWithTitle,
} from 'src/UI-components/molecules'
import { Box, Grid, Typography } from '@mui/material'

export const PaymentsMainPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const handleModalClose = () => {
        setIsModalOpen(false)
    }
    const handleModalOpen = () => {
        setIsModalOpen(true)
    }

    return (
        <>
            <Box mb="40px" mt="20px" data-testid="payments-page">
                <Typography variant="subtitle1Bold" sx={textMainStyles}>
                    Платежи
                </Typography>
            </Box>
            <Grid spacing={6} container>
                <Grid item xs={12}>
                    <WrapperWithTitle title="Все платежи" paymentTypeCard>
                        <PaymentTypesContainer
                            handleModalOpen={handleModalOpen}
                        />
                    </WrapperWithTitle>
                </Grid>
                <Grid item xs={6}>
                    <WrapperWithTitle title="Избранные платежи" paymentTypeCard>
                        <ListWithFavoritePayments />
                    </WrapperWithTitle>
                </Grid>
                <Grid item xs={6}>
                    <WrapperWithTitle title="Автоплатежи" paymentTypeCard>
                        <AddItemToList onClick={handleModalOpen} />
                    </WrapperWithTitle>
                </Grid>
            </Grid>

            <StubModal
                isOpen={isModalOpen}
                message="Функционал временно недоступен"
                onConfirmButtonClick={handleModalClose}
            />
        </>
    )
}
