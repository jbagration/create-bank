import { SxProps, Theme } from '@mui/material/styles'

import { StyledButtonProps } from './LanguageSwitchButton.type'

export const ButtonStyled =
    (props: StyledButtonProps): SxProps<Theme> =>
    (theme) => {
        const { isActive } = props

        return {
            border: '1px',
            borderRadius: '2px',
            padding: 0,
            minHeight: '32px',
            minWidth: '32px',

            '&.MuiButton-outlined': {
                backgroundColor: isActive
                    ? theme.palette.BackAccent.BackgroundPrimary
                    : 'transparent',
                color: isActive
                    ? theme.palette.Text.TextPrimary
                    : theme.palette.Text.TextSecondary,
            },
            '&:hover': {
                border: `1px solid ${theme.palette.BackAccent.BackgroundPrimary}`,
            },
        }
    }
