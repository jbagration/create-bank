import { FC } from 'react'
import {
    Box,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material'

import { useGetExchangeRatesQuery } from '../../../redux/api/infoServicesApi'
import { Img } from '../../atoms/Img'

import { countriesFlags, countriesNames } from './ExchangeRatesTable.const'

import { exchangeRatesTitleStyles } from './ExchangeRatesTable.style'
import {
    boxNameContainerStyles,
    contentTableRowStyles,
    imgStyles,
    tableCellStyles,
    tableContainerStyles,
    textNameStyles,
} from './TableCell.style'

type ExchangeRatesTableProps = { title?: string }

export const ExchangeRatesTable: FC<ExchangeRatesTableProps> = ({ title }) => {
    const { data } = useGetExchangeRatesQuery()

    const rows = data?.map((currency) => ({
        flag: countriesFlags[currency.charCode as keyof typeof countriesFlags],
        charCode: currency.charCode,
        name: countriesNames[currency.charCode as keyof typeof countriesNames],
        buyingRate: currency.buyingRate,
        sellingRate: currency.sellingRate,
        nominal: currency.nominal,
    }))

    return (
        <Grid>
            {title && (
                <Typography
                    variant="h5"
                    sx={exchangeRatesTitleStyles}
                    data-testid="exchange-rates-table-title"
                >
                    {title}
                </Typography>
            )}

            <TableContainer sx={tableContainerStyles}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow data-testid="exchange-rates-table-table">
                            <TableCell sx={tableCellStyles} variant="head">
                                Валюта
                            </TableCell>
                            <TableCell sx={tableCellStyles} variant="head">
                                Покупка
                            </TableCell>
                            <TableCell sx={tableCellStyles} variant="head">
                                Продажа
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows?.map((row) => (
                            <TableRow key={row.name} sx={contentTableRowStyles}>
                                <TableCell
                                    sx={tableCellStyles}
                                    component="th"
                                    scope="row"
                                    variant="body"
                                >
                                    <Box display="flex" alignItems="center">
                                        <Img
                                            src={row.flag}
                                            alt=""
                                            sx={imgStyles}
                                        />
                                        <Box sx={boxNameContainerStyles}>
                                            <Typography variant="strong1">
                                                {row.charCode}
                                            </Typography>
                                            <Typography
                                                sx={textNameStyles}
                                                variant="body1"
                                            >
                                                {Number(row.nominal) > 1 &&
                                                    row.nominal}{' '}
                                                {row.name}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell sx={tableCellStyles} variant="body">
                                    <Typography variant="body2">
                                        {Number(row.buyingRate).toLocaleString(
                                            'ru-RU',
                                            {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            }
                                        )}
                                    </Typography>
                                </TableCell>
                                <TableCell sx={tableCellStyles} variant="body">
                                    <Typography variant="body2">
                                        {Number(row.sellingRate).toLocaleString(
                                            'ru-RU',
                                            {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            }
                                        )}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}
