import { FC, memo } from 'react'
import {
    InputLabel as MUIInputLabel,
    InputLabelProps,
    SxProps,
    Theme,
} from '@mui/material'

import { inputLabelStyles } from './InputLabel.style'

import { StyledInputLabelProps } from './InputLabel.type'

export const InputLabel: FC<InputLabelProps & StyledInputLabelProps> = memo(
    ({ children, largelabel, sx, type, ...props }) => {
        const inputLabelStylesSx = inputLabelStyles({ largelabel, type })

        const stylesWithSxProps = [sx, inputLabelStylesSx] as SxProps<Theme>

        return (
            <MUIInputLabel sx={stylesWithSxProps} {...props}>
                {children}
            </MUIInputLabel>
        )
    }
)
