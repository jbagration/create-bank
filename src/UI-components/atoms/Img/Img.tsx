import { FC, memo } from 'react'
import { Box, BoxProps } from '@mui/material'

import { ImgProps } from './Img.type'

export const Img: FC<BoxProps & ImgProps> = memo(({ sx, ...props }) => {
    return <Box component="img" sx={sx} {...props} />
})
