import { RowInPaymentTable as Row } from 'src/UI-components/atoms'
import { TableBody, TableContainer } from '@mui/material'

const wrapperStyle = { borderCollapse: 'collapse' }

export const PaymentInfoTable = ({
    rows,
}: {
    rows: [string, string | number][]
}) => {
    const elements = rows.map(([name, value], id) => (
        <Row name={name} value={value} key={id} />
    ))

    return (
        <TableContainer sx={wrapperStyle}>
            <TableBody>{elements}</TableBody>
        </TableContainer>
    )
}
