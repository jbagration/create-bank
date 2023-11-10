import { FC, memo, useEffect } from 'react'
import { Box, Typography } from '@mui/material'

import { TransferItem, TransferOrdersItem } from '../../molecules'

export const TransferOrders: FC<TransferOrdersItem & { setSize: Function }> =
    memo(({ dataLength, date, orders, setSize }) => {
        useEffect(() => {
            setSize(dataLength)
        }, [dataLength, setSize])
        return (
            <>
                <Box mb="20px">
                    <Typography
                        sx={{ fontSize: '16px', fontWeight: 'bold' }}
                        variant="strong2"
                    >
                        {date}
                    </Typography>
                </Box>
                {orders.map((item, index) => (
                    <TransferItem key={index} {...item} />
                ))}
            </>
        )
    })
