import { FC, ReactNode } from 'react'
import { Box, Grid, Typography } from '@mui/material'

import { ContactNumberItem } from './ContactNumberItem'

import { contactInfoDescription } from './ContactCenter.const'

import { positionsSx } from './ContactCenter.style'

interface ContactItemProps {
    title: string
    icon?: ReactNode
    iconBeforeTitle?: boolean
    description: string
    workTime: string
    workTime2?: string
    number?: string
    numberDescription?: string
    number2?: string
    numberDescription2?: string
    centralPosition?: boolean
}

export const ContactItem: FC<ContactItemProps> = ({
    title,
    iconBeforeTitle = false,
    icon,
    description,
    workTime,
    workTime2,
    number,
    numberDescription,
    number2,
    numberDescription2,
    centralPosition = false,
    ...props
}: ContactItemProps) => {
    const positionsSxStyles = positionsSx({
        centralPosition,
    })

    return (
        <Box maxWidth="700px" mt={5} p={2.5}>
            <Box display="flex" sx={positionsSxStyles}>
                {!iconBeforeTitle && (
                    <Typography
                        pr={3.5}
                        variant="strong1"
                        data-testid="contact-center-block"
                    >
                        {title}
                    </Typography>
                )}
                {icon}
                {iconBeforeTitle && <Typography pl={4.5}>{title}</Typography>}
            </Box>
            <Box mt={2}>
                <Typography
                    variant="body1"
                    sx={positionsSxStyles}
                    data-testid="contact-center-description"
                >
                    {description}
                </Typography>
                <Typography
                    variant="caption"
                    sx={positionsSxStyles}
                    mt={4}
                    data-testid="contact-center-workTime"
                >
                    {workTime}
                </Typography>
                {workTime2 && (
                    <Typography variant="caption" sx={positionsSxStyles}>
                        {workTime2}
                    </Typography>
                )}
            </Box>
            <Grid container mt={4} mb={4} gap={4} data-testid="contact-info">
                {contactInfoDescription.map((item, index) => (
                    <ContactNumberItem
                        key={index + item.contact}
                        contact={item.contact}
                        description={item.description}
                        icon={item.icon}
                        linkTo={item.linkTo}
                    />
                ))}
            </Grid>
        </Box>
    )
}
