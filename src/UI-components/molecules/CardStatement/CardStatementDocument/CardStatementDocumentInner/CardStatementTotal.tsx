import { FC, useEffect, useState } from 'react'
import { formatNumber } from 'src/utils'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material'

import { depositStartTitles } from '../../../../organisms/CardStatementDocument/CardStatementDocument.const'

import {
    contentTableRowStyles,
    tableCellStyles,
    tableContainerStyles,
    tableLeftSideStyles,
    tableSummaryAmountStyles,
    tableSummaryStyles,
} from '../../../../organisms/CardStatementDocument/CardStatementDocument.style'

import { CardStatementTotalProps } from '../../CardStatement.type'

const CardStatementTotal: FC<CardStatementTotalProps> = ({
    balance,
    operations,
}) => {
    const [writeOffs, setWriteOffs] = useState<number>(0)

    const [replenishment, setReplenishment] = useState<number>(0)
    const [startBalance, setStartBalance] = useState<number>(balance)
    useEffect(() => {
        setWriteOffs(
            operations
                .filter(
                    (el) =>
                        el.typeName === 'TO_ANOTHER_CARD' ||
                        el.typeName === 'Transfer'
                )
                .reduce((acc, el) => acc + el.sum, 0)
        )
        setStartBalance(balance + writeOffs)
    }, [balance, operations, writeOffs])
    return (
        <TableContainer sx={tableContainerStyles}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={tableCellStyles} variant="head" />
                        <TableCell sx={tableCellStyles} variant="head" />
                        <TableCell sx={tableCellStyles} variant="head">
                            <Typography
                                variant="strong1"
                                textTransform="uppercase"
                            >
                                Сумма
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={tableLeftSideStyles} variant="head">
                            <Typography variant="strong1">
                                {depositStartTitles.titleHeader}
                            </Typography>
                        </TableCell>
                        <TableCell sx={tableCellStyles} variant="head" />
                        <TableCell sx={tableCellStyles} variant="head">
                            <Typography variant="strong1">
                                {formatNumber(startBalance)}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={contentTableRowStyles}>
                        <TableCell sx={tableLeftSideStyles} variant="body">
                            <Typography variant="body1">
                                Всего пополнений
                            </Typography>
                        </TableCell>
                        <TableCell sx={tableCellStyles} variant="body" />
                        <TableCell sx={tableCellStyles} variant="body">
                            <Typography variant="body1">
                                {formatNumber(replenishment)}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={contentTableRowStyles}>
                        <TableCell sx={tableLeftSideStyles} variant="body">
                            <Typography variant="body1">
                                Всего списаний
                            </Typography>
                        </TableCell>
                        <TableCell sx={tableCellStyles} variant="body" />
                        <TableCell sx={tableCellStyles} variant="body">
                            <Typography variant="body1">
                                {formatNumber(writeOffs)}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={tableLeftSideStyles} variant="head">
                            <Typography variant="strong1">
                                {depositStartTitles.titleFooter}
                            </Typography>
                        </TableCell>
                        <TableCell sx={tableSummaryStyles} variant="head" />
                        <TableCell sx={tableSummaryAmountStyles} variant="head">
                            <Typography variant="strong1">
                                {formatNumber(balance)}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

CardStatementTotal.propTypes = {}

export default CardStatementTotal
