import { Box, Grid, Typography } from '@mui/material'

import { ContactNumberItem } from '../ContactCenter'

import {
    contactInfo,
    contactInfoDescription,
} from '../ContactCenter/ContactCenter.const'
import { callCaption } from './HelpModal.const'

import {
    helpModalCallBoxStyles,
    helpModalCallTitleStyles,
} from './HelpModal.style'

export const HelpModalCallOption = () => {
    const contactCallInfo = contactInfoDescription.slice(0, 2)
    const { title, icon, description, workTime } = contactInfo

    return (
        <Box sx={helpModalCallBoxStyles}>
            <Grid container direction="column" gap={2}>
                <Box sx={helpModalCallTitleStyles}>
                    <Typography variant="strong1">{title}</Typography>
                    {icon}
                </Box>
                <Typography variant="body1" textAlign="center">
                    {description}
                </Typography>
                <Typography variant="caption" textAlign="center">
                    {workTime}
                </Typography>
            </Grid>
            <Grid container gap={6} justifyContent="center" alignItems="center">
                {contactCallInfo.map((item) => (
                    <ContactNumberItem
                        key={item.contact}
                        contact={item.contact}
                        description={item.description}
                        icon={item.icon}
                        linkTo={item.linkTo}
                    />
                ))}
            </Grid>
            <Typography variant="caption" textAlign="center">
                {callCaption}
            </Typography>
        </Box>
    )
}
