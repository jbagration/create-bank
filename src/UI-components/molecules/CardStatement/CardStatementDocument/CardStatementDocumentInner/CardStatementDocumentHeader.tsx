import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { textMainStyles } from 'src/common/common.styles'
import { formatNumber } from 'src/utils'
import { toLocaleDateString } from 'src/utils/dateNormalize'
import { Box, Typography, useTheme } from '@mui/material'
import Grid from '@mui/material/Grid'

import logoDark from '../../../Header/CreateBankDark.svg'

import { hrStyles } from '../../../../organisms/CardStatementDocument/CardStatementDocument.style'
import { infoStatementStyles } from '../../CardStatement.style'

export const CardStatementDocumentHeader: FC = () => {
    const theme = useTheme()
    const { BackgroundQuaternary } = theme.palette.BackStandart
    const {
        state: {
            from,
            to,
            accountNumber,
            holderName,
            currencyCode,
            cardBalance,
            cardNumber,
            cardName,
        },
    } = useLocation()
    return (
        <Grid container spacing={2} sx={textMainStyles}>
            <Grid item xs={6} sx={infoStatementStyles}>
                <Box sx={{ display: 'flex', alignItems: 'center' }} mb={5}>
                    <img src={logoDark} alt="logo" style={{ height: '75px' }} />
                </Box>
                <Box>
                    <Typography variant="body1">ФИО:</Typography>
                    <Typography variant="strong1">{holderName}</Typography>
                </Box>
                <Box>
                    <Typography variant="body1">Название карты:</Typography>
                    <Typography variant="strong1">{cardName}</Typography>
                </Box>
                <Box>
                    <Typography variant="body1">Номер карты:</Typography>
                    <Typography variant="strong1">
                        {`****${cardNumber?.slice(-4)}`}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body1">Валюта:</Typography>
                    <Typography variant="strong1">{currencyCode}</Typography>
                </Box>

                <Box>
                    <Typography variant="body1">Доступно:</Typography>
                    <Typography variant="strong1">
                        {formatNumber(cardBalance)}
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={6} sx={infoStatementStyles}>
                <Typography mt="10px" variant="strong1" component="h2">
                    {toLocaleDateString(from)} - {toLocaleDateString(to)}
                </Typography>
                <Typography variant="body1" mb="20px">
                    Основной счет:{' '}
                    <Typography variant="strong1">{accountNumber}</Typography>
                </Typography>

                <hr
                    style={{
                        ...hrStyles,
                        backgroundColor: BackgroundQuaternary,
                    }}
                />
                <Typography
                    variant="body1"
                    sx={{ textTransform: 'uppercase', textAlign: 'center' }}
                >
                    информация по обслуживанию клиентов
                </Typography>
                <hr
                    style={{
                        ...hrStyles,
                        backgroundColor: BackgroundQuaternary,
                    }}
                />
                <Typography mt="20px" variant="body2" component="h2">
                    Юридический адрес: г. Москва, ул.Московская, 2, 07100
                </Typography>
                <Typography variant="body2">
                    Эл.почта: info@CreateBank.ru
                    <br />
                    Сервисный центр: +7 (910) 385-79-04
                </Typography>
            </Grid>
        </Grid>
    )
}
