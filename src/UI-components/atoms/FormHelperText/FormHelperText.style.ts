import { FormHelperText as MuiFormHelperText } from '@mui/material'
import { styled, SxProps, Theme } from '@mui/material/styles'

import { FormHelperTextGrid } from './FormHelperText.type'

export const FormHelperText = styled(MuiFormHelperText)(({ theme }) => ({
    ...theme.typography.caption,
    color: theme.palette.Text.TextTertiary,
    marginTop: '8px',
    whiteSpace: 'break-spaces',
    '&.Mui-error': {
        color: theme.palette.SystemColor.Error,
    },
    '&.Mui-disabled': {
        color: theme.palette.Text.TextDisabled,
    },
}))

export const FormHelperTextStyled =
    (props: FormHelperTextGrid): SxProps<Theme> =>
    (theme) => {
        const { gridColumn } = props

        return {
            ...(gridColumn && { gridRow: 3 }),
            gridColumn,
            ...theme.typography.caption,
            color: theme.palette.Text.TextTertiary,
            whiteSpace: 'break-spaces',
            '&.Mui-error': {
                color: theme.palette.SystemColor.Error,
            },
            '&.Mui-disabled': {
                color: theme.palette.Text.TextDisabled,
            },
        }
    }
