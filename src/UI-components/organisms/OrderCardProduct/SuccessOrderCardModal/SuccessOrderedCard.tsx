import { FC, useState } from 'react'
import { CardIcon } from 'src/assets/svg/contactsPageSvg'
import { ContactItem, NotificationModal } from 'src/UI-components/molecules'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

import {
    actions,
    confirmed,
    message,
    number,
    numberDescription,
    shortNumber,
    shortNumberDescription,
    support,
    weekdays,
    weekends,
} from './SuccessOrderedCard.const'

import {
    containerStyles,
    labelContainerStyles,
} from './SuccessOrderedCard.style'

export const SuccessOrderedCard: FC = () => {
    const [windowStatus, setWindowStatus] = useState(true)
    return (
        <NotificationModal
            type="done"
            open={windowStatus}
            handleClose={() => setWindowStatus(!windowStatus)}
        >
            <Box sx={containerStyles}>
                <Box sx={labelContainerStyles}>
                    <Typography variant="strong1">{confirmed}</Typography>
                    <Typography variant="body1">{message}</Typography>
                </Box>
                <ContactItem
                    title={support}
                    icon={<CardIcon />}
                    description={actions}
                    centralPosition
                    iconBeforeTitle
                    workTime={weekdays}
                    workTime2={weekends}
                    number={shortNumber}
                    numberDescription={shortNumberDescription}
                    number2={number}
                    numberDescription2={numberDescription}
                />
            </Box>
        </NotificationModal>
    )
}
