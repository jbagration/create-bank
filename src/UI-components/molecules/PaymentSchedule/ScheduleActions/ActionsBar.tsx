import { FC } from 'react'
import { ActionsItem } from 'src/UI-components/atoms/PaymentSchedule/ScheduleActionsItem/ActionsItem'
import { DownloadOutlined, ShareOutlined } from '@mui/icons-material'
import { Box } from '@mui/material'

import {
    downloadText,
    shareText,
} from 'src/UI-components/atoms/PaymentSchedule/paymentSchedule.const'

import { actionsBarWrapperStyle } from '../paymentSchedule.style'

interface Props {
    onClickSharedButton?: () => void
    onClickDownloadButton?: () => void
}

export const ActionsBar: FC<Props> = ({
    onClickDownloadButton,
    onClickSharedButton,
}) => {
    return (
        <Box sx={actionsBarWrapperStyle}>
            <ActionsItem
                icon={<ShareOutlined />}
                text={shareText}
                onClick={onClickSharedButton}
            />
            <ActionsItem
                icon={<DownloadOutlined />}
                text={downloadText}
                onClick={onClickDownloadButton}
            />
        </Box>
    )
}
