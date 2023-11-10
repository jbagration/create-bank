import { FC, memo } from 'react'
import { Box, SxProps, Theme, Typography } from '@mui/material'

import { CaptionStyles } from './Caption.style'

import { CaptionProps } from './Caption.type'

export const Caption: FC<CaptionProps> = memo(
    ({ sx, text, children, component = false }) => {
        const CaptionStylesSx = CaptionStyles()
        const StylesWithSxProps = [CaptionStylesSx, sx] as SxProps<Theme>

        return (
            <Box
                data-testid={`caption-${+!text}-${+!children}-${+component}`}
                sx={StylesWithSxProps}
            >
                {component ? (
                    children
                ) : (
                    <Typography variant="caption">{text}</Typography>
                )}
            </Box>
        )
    }
)
