import { FC, memo } from 'react'
import {
    FormHelperText as MUIFormHelperText,
    FormHelperTextProps,
} from '@mui/material'

import { FormHelperTextStyled } from './FormHelperText.style'

import { FormHelperTextGrid } from './FormHelperText.type'

export const FormHelperText: FC<FormHelperTextProps & FormHelperTextGrid> =
    memo(({ children, gridColumn, ...props }) => {
        const FormHelperTextStyledSx = FormHelperTextStyled({ gridColumn })

        return (
            <MUIFormHelperText
                data-helperText
                sx={FormHelperTextStyledSx}
                {...props}
            >
                {children}
            </MUIFormHelperText>
        )
    })
