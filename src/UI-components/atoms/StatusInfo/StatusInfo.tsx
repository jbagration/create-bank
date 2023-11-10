import { FC, memo } from 'react'
import { Box } from '@mui/material'

import type { StatusInfoProps } from './StatusIfo.type'

import { statusInfoStyles } from './StatusInfo.style'

enum StatusTypes {
    PENDING = 'В обработке',
    APPROVED = 'Одобрено',
    REJECT = 'Отказано',
}

export const StatusInfo: FC<StatusInfoProps> = memo(({ status }) => {
    const statusInfoStylesSx = statusInfoStyles({ status })

    return (
        <Box sx={statusInfoStylesSx} data-testid="status-info">
            {status === 'PENDING' && StatusTypes.PENDING}
            {status === 'APPROVED' && StatusTypes.APPROVED}
            {status === 'REJECT' && StatusTypes.REJECT}
        </Box>
    )
})
