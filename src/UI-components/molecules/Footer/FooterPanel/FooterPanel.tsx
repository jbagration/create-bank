import React from 'react'
import { Box, Grid } from '@mui/material'

import { StoreLinkBox } from '../../StoreLinkBox'
import { FooterItem } from '../FooterItem/FooterItem'

import { FooterInfo } from '../Footer.const'

import { StyledContentContainerLarge } from '../../Containers/Containers.style'
import {
    footerContainerLargeStyles,
    footerContainerStyles,
} from './Footer.style'

export const FooterPanel = React.memo(function FooterPanel() {
    return (
        <Box sx={footerContainerStyles} data-testid="footer">
            <StyledContentContainerLarge sx={footerContainerLargeStyles}>
                <Grid container spacing={{ xs: 6, md: 10, lg: 17 }}>
                    {FooterInfo.map((item) => (
                        <Grid
                            data-testid="footer-item"
                            item
                            xs={12}
                            md={6}
                            lg={item.id === 3 ? 2 : 3}
                            xl={3}
                            key={item.id}
                        >
                            <FooterItem {...item} />
                        </Grid>
                    ))}
                    <Grid item xs={12} sm={6} md={3}>
                        <StoreLinkBox isMinified={false} isMain={false} />
                    </Grid>
                </Grid>
            </StyledContentContainerLarge>
        </Box>
    )
})
