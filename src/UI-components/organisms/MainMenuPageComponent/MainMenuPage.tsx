import { FC, memo } from 'react'
import { ModalActionButton } from 'src/UI-components/molecules'
import { CSSProperties } from '@emotion/serialize'
import { Box, Typography } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

interface PageProps {
    className?: string
    style?: CSSProperties
    text: string
    backButton?: boolean
}

const mainMenuPageStyles = {
    minWidth: '700px',
    maxWidth: '950px',
}

export const MainMenuPage: FC<PageProps> = memo(
    ({ children, text, backButton = false }) => {
        return (
            <CssBaseline>
                <Box display="flex" gap={10}>
                    {backButton && (
                        <Box>
                            <ModalActionButton modalAction="back" />
                        </Box>
                    )}
                    <Box width="100%">
                        <Typography
                            variant="h5"
                            marginBottom="40px"
                            color="Text.TextPrimary"
                            data-testid="page-title"
                        >
                            {text}
                        </Typography>
                        <Box sx={mainMenuPageStyles}>{children}</Box>
                    </Box>
                </Box>
            </CssBaseline>
        )
    }
)
