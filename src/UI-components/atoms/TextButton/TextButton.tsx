import { FC, memo } from 'react'
import { Button as MUiButton, ButtonProps } from '@mui/material'

import { textButtonStyles } from './TextButton.style'

export const TextButton: FC<ButtonProps> = memo(({ ...props }) => {
    return (
        <MUiButton sx={textButtonStyles} {...props}>
            {props.children}
        </MUiButton>
    )
})
