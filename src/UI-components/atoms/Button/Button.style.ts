import { SxProps, Theme } from '@mui/material/styles'

import { StyledButtonProps } from './Button.type'

export const ButtonStyled =
    (props: StyledButtonProps): SxProps<Theme> =>
    (theme) => {
        const { buttonVariant, cancel } = props

        return {
            borderRadius: '2px',
            textTransform: 'none',
            fontFamily: 'Nunito Sans',
            color: theme.palette.Text.TextQuaternary,
            boxShadow: 'none',
            ...(buttonVariant === 'primary' && {
                '&.MuiButton-contained': {
                    background: theme.palette.BackAccent.BackgroundPrimary,
                    '&:hover': {
                        background: theme.palette.BackAccent.BackgroundHover,
                    },
                },
                '&.Mui-disabled': {
                    background: theme.palette.BackAccent.BackgroundSecondary,
                    color: theme.palette.Text.TextDisabled,
                },
            }),
            ...(buttonVariant === 'secondary' && {
                '&.MuiButton-contained': {
                    background: theme.palette.BackGray.BackgroundPrimary,
                    '&:hover': {
                        background: theme.palette.BackGray.BackgroundHover,
                    },
                },
                '&.Mui-disabled': {
                    color: theme.palette.Text.TextDisabled,
                    backgroundColor: theme.palette.BackGray.BackgroundPrimary,
                },
            }),
            ...(cancel && {
                '&.MuiButton-contained': {
                    background: theme.palette.BackAccent.BackgroundSecondary,
                    '&:hover': {
                        background: theme.palette.BackAccent.BackgroundHover,
                    },
                },
            }),
            '&.MuiButton-sizeLarge': {
                width: '171px',
                height: '56px',
            },
            '&.MuiButton-sizeSmall': {
                minWidth: '89px',
                height: '28px',
                padding: '8px 12px',
            },
            '&.MuiButton-sizeMedium': {
                width: '143px',
                height: '48px',
            },
            '&.MuiButton-sizeLong': {
                width: '343px',
                height: '56px',
            },
            '&.MuiButton-fullWidth': {
                width: '100%',
            },
        }
    }
export const searchButtonStyle = (theme: Theme) => ({
    color: theme.palette.BackStandart.BackgroundQuaternary,
    '&:hover': {
        backgroundColor: theme.palette.BackAccent.BackgroundPrimary,
    },
})
