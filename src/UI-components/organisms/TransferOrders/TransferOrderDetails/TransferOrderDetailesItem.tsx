import { format } from 'date-fns'
import { useAppSelector } from 'src/redux/hooks/redux'
import { CreditTermsTable } from 'src/UI-components/molecules'
import { formatNumber } from 'src/utils'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import { Box, Container, Typography } from '@mui/material'

import { transferInfo } from 'src/UI-components/molecules/TransferItem/TransferItem.const'
import { MainMenuPage } from '../../MainMenuPageComponent/MainMenuPage'

import { KeysOrderDetails } from './TransferOrderDetailsItem.const'

import {
    transferPurposeStyles,
    transferSumStyles,
} from './TransferOrderDetailes.style'
import { transferBoxIconStyles } from 'src/UI-components/molecules/TransferItem/TransferItem.style'

import { TransferOrderDetailsProps } from './TransferOrderDetailes.type'

export const TransferOrderDetailsItem = ({
    state,
    data,
}: TransferOrderDetailsProps) => {
    const cardName = useAppSelector((store) => store.myCards.cardName)
    const { sum, time, transferTypeName, currencyCode, purpose, name } = state
    const { payeeAccountNumber, createdAt } = data
    const date = format(new Date(createdAt), 'dd/MM/yyyy')

    const valueOrderDetails = [
        `${date} ${time}`,
        formatNumber(+sum, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }),
        currencyCode,
        name,
        payeeAccountNumber,
        transferInfo[transferTypeName],
    ]

    return (
        <MainMenuPage text={cardName} backButton>
            <Box>
                <Container sx={transferPurposeStyles}>
                    <Box sx={transferBoxIconStyles}>
                        <KeyboardDoubleArrowLeftIcon fontSize="small" />
                    </Box>
                    <Typography
                        sx={{ display: 'inline' }}
                        variant="textLink2"
                        color="BackGray.BackgroundSecondary"
                    >
                        {purpose}
                    </Typography>
                </Container>

                <Typography sx={transferSumStyles}>
                    {`${formatNumber(+sum, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })} ${currencyCode}`}
                </Typography>

                <CreditTermsTable
                    type="default"
                    keysTableDetails={KeysOrderDetails}
                    valueTableDetails={valueOrderDetails}
                    dataTransform={(valueOrderDetails) => valueOrderDetails}
                />
            </Box>
        </MainMenuPage>
    )
}
