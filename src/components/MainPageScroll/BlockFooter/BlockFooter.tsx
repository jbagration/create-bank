import { FC } from 'react'
import { FooterPanel } from 'src/UI-components/molecules'
import Box from '@mui/material/Box'

import { footerStyle } from './BlockFooter.style'

export const BlockFooter: FC = () => {
    return (
        <Box sx={footerStyle} component="footer">
            <FooterPanel />
        </Box>
    )
}
