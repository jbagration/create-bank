import { FC } from 'react'
import { Box, Grid, ListItem, Typography } from '@mui/material'

import { listItemStyles } from '../../../common/common.styles'
import { Link as StyledLink } from '../../atoms/Link'

import { socials } from './ContactSocialMedia.const'

import { socialMediaSx } from './ContactCenter.style'

export const ContactSocialMedia: FC = () => {
    return (
        <Box width="634px" mt={2.5} p={2.5} data-testid="contact-social-media">
            <Typography>Социальные сети и мессенджеры</Typography>
            <Grid sx={socialMediaSx}>
                {socials.map(({ icon, linkTo }) => (
                    <ListItem sx={listItemStyles} key={linkTo}>
                        <StyledLink href={linkTo}>{icon}</StyledLink>
                    </ListItem>
                ))}
            </Grid>
        </Box>
    )
}
