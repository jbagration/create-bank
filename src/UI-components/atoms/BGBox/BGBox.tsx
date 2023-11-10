import { FC, memo } from 'react'
import { Box, BoxProps } from '@mui/material'

import { BGBoxStyled } from './BGBox.style'

export const BGBox: FC<BoxProps> = memo(({ children }) => {
    return <Box sx={BGBoxStyled}>{children}</Box>
})
