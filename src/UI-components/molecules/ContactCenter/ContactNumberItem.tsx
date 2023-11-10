import { FC } from 'react'
import { Link as StyledLink } from 'src/UI-components/atoms/Link'
import { Box, Grid, Typography } from '@mui/material'

import { descriptionStyles, iconLayoutSx } from './ContactCenter.style'

interface ContactNumberItemProps {
    contact: string
    description: string
    linkTo?: string
    icon: JSX.Element
}

export const ContactNumberItem: FC<ContactNumberItemProps> = ({
    contact,
    description,
    icon,
    linkTo,
    ...props
}) => {
    return (
        <Grid item display="flex" alignItems="center" gap={2}>
            <Box sx={iconLayoutSx}>{icon}</Box>
            <Box display="flex" flexDirection="column">
                {linkTo ? (
                    <StyledLink to={linkTo}>{contact}</StyledLink>
                ) : (
                    <Typography variant="subtitle3">{contact}</Typography>
                )}
                <Typography variant="caption" sx={descriptionStyles}>
                    {description}
                </Typography>
            </Box>
        </Grid>
    )
}
