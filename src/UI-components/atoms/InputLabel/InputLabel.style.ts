import { SxProps, Theme } from '@mui/material/styles'

import { StyledInputLabelProps } from './InputLabel.type'

export const inputLabelStyles =
    (props: StyledInputLabelProps): SxProps<Theme> =>
    (theme) => {
        const { largelabel = 'false', type } = props

        return {
            ...(largelabel === 'true'
                ? theme.typography.body1
                : theme.typography.body2),
            color: theme.palette.Text.TextTertiary,
            display: 'inline',
            '&.Mui-disabled': {
                color: theme.palette.Text.TextDisabled,
            },
            ...(type === 'smsCode' && {
                position: 'absolute',
                top: '0px',
            }),
        }
    }
