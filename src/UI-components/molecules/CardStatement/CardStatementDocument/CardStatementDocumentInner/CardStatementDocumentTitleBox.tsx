import { FC } from 'react'
import { Box, Typography, useTheme } from '@mui/material'

import {
    boxTitleStyles,
    hrThinStyles,
    mainTitleStyles,
} from '../../../../organisms/CardStatementDocument/CardStatementDocument.style'

import { CardStatementTitleBoxProps } from '../../../../organisms/CardStatementDocument/CardStatementDocument.type'

export const CardStatementDocumentTitleBox: FC<CardStatementTitleBoxProps> = ({
    title,
}) => {
    const theme = useTheme()

    const { BackgroundQuaternary } = theme.palette.BackStandart

    return (
        <Box sx={boxTitleStyles}>
            <Box sx={mainTitleStyles}>
                <Typography
                    variant="strong4"
                    component="h2"
                    textAlign="center"
                    sx={{ textWrap: 'nowrap' }}
                >
                    {title}
                </Typography>
            </Box>
            <Box width="100%">
                <hr
                    style={{
                        ...hrThinStyles,
                        backgroundColor: BackgroundQuaternary,
                    }}
                />
            </Box>
        </Box>
    )
}
