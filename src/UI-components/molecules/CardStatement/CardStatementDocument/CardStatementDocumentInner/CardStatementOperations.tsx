import { FC } from 'react'
import { formatNumber } from 'src/utils'
import { toLocaleDateString } from 'src/utils/dateNormalize'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material'

import { CardStatementDocumentTitleBox } from './CardStatementDocumentTitleBox'

import { depositFullListTotal } from '../../../../organisms/CardStatementDocument/CardStatementDocument.const'

import {
    contentTableRowStyles,
    tableCellStyles,
    tableContainerStyles,
    tableLeftSideStyles,
    tableSummaryAmountStyles,
    tableSummaryStyles,
} from '../../../../organisms/CardStatementDocument/CardStatementDocument.style'

import { CardStatementOperationsProps } from '../../CardStatement.type'

const CardStatementOperations: FC<CardStatementOperationsProps> = ({
    operations,
}) => {
    let totalSum = 0
    return (
        <>
            <CardStatementDocumentTitleBox title="Расшифровка операций" />

            <TableContainer sx={tableContainerStyles}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={tableLeftSideStyles} variant="head">
                                <Typography
                                    variant="strong1"
                                    textTransform="uppercase"
                                >
                                    Дата
                                </Typography>
                            </TableCell>
                            <TableCell sx={tableCellStyles} variant="head">
                                <Typography
                                    variant="strong1"
                                    textTransform="uppercase"
                                >
                                    Описание
                                </Typography>
                            </TableCell>
                            <TableCell sx={tableCellStyles} variant="head">
                                <Typography
                                    variant="strong1"
                                    textTransform="uppercase"
                                >
                                    Сумма
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {operations.map((row) => {
                            totalSum += row.sum
                            return (
                                <TableRow
                                    sx={contentTableRowStyles}
                                    key={row.transferOrderId}
                                >
                                    <TableCell
                                        sx={tableLeftSideStyles}
                                        variant="body"
                                    >
                                        <Typography variant="strong1">
                                            {toLocaleDateString(
                                                row.completedAt
                                            )}
                                        </Typography>
                                    </TableCell>
                                    <TableCell
                                        sx={tableCellStyles}
                                        variant="body"
                                    >
                                        <Typography variant="body1">
                                            {row.purpose}
                                        </Typography>
                                    </TableCell>
                                    <TableCell
                                        sx={tableCellStyles}
                                        variant="body"
                                    >
                                        <Typography variant="body1">
                                            {formatNumber(row.sum)}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            )
                        })}

                        <TableRow>
                            <TableCell sx={tableSummaryStyles} variant="head">
                                <Typography variant="strong1">
                                    {depositFullListTotal.totalTitle}
                                </Typography>
                            </TableCell>
                            <TableCell sx={tableSummaryStyles} variant="head" />
                            <TableCell
                                sx={tableSummaryAmountStyles}
                                variant="head"
                            >
                                {totalSum && (
                                    <Typography variant="strong1">
                                        {formatNumber(totalSum)}
                                    </Typography>
                                )}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default CardStatementOperations
