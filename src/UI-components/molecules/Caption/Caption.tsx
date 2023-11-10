import { FC, memo } from 'react'
import { Box, SxProps, Theme } from '@mui/material'

import { CaptionIcon } from './CaptionIcon/CaptionIcon'
import { CaptionText } from './CaptionText'

import { CaptionStyles } from './Caption.style'

import { CaptionProps } from './Caption.type'

export const Caption: FC<CaptionProps> = memo(
    ({ sx, text = '', children, component = false, info = false }) => {
        const CaptionStylesSx = CaptionStyles(info)
        const StylesWithSxProps = [CaptionStylesSx, sx] as SxProps<Theme>

        return (
            <Box
                data-testid={`caption-${+!text}-${+!children}-${+component}`}
                sx={StylesWithSxProps}
            >
                {info && <CaptionIcon />}

                {!component && <CaptionText text={text} info={info} />}

                {component && children}
            </Box>
        )
    }
)
