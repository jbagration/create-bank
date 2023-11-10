import { FC } from 'react'
import Typography from '@mui/material/Typography'

import { captionTextStyles } from './CaptionText.style'

import { CaptionTextProps } from './CaptionText.type'

export const CaptionText: FC<CaptionTextProps> = ({ text, info }) => {
    const captionTextStylesSx = captionTextStyles(info)

    return <Typography sx={captionTextStylesSx}>{text}</Typography>
}
