import { FC, memo } from 'react'
import { CSSProperties } from '@emotion/serialize'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'

import { pageStyles } from './Page.style'

interface PageProps {
    className?: string
    style?: CSSProperties
}

export const Page: FC<PageProps> = memo(({ children }) => {
    return (
        <CssBaseline>
            <Box sx={pageStyles}>{children}</Box>
        </CssBaseline>
    )
})
