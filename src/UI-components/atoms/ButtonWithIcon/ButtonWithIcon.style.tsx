import { SxProps, Theme } from '@mui/material'

import { ButtonWithIconPropsStyles } from './ButtonWithIcon.type'

export const ButtomWithIconStyled =
    (props: ButtonWithIconPropsStyles): SxProps<Theme> =>
    (theme) => {
        const {
            yellow,
            yellowLight,
            transparent,
            size = 'medium',
            radius = true,
        } = props

        return {
            ...(yellow && {
                background: theme.palette.BackAccent.BackgroundPrimary,
                '& > svg': {
                    fill: theme.palette.BackStandart.BackgroundPrimary,
                },
            }),
            ...(yellowLight && {
                background: theme.palette.BackAccent.BackgroundSecondary,
            }),
            ...(transparent && {
                background: 'transparent',
                color: theme.palette.Text.TextTertiary,
                '&:hover': {
                    background: theme.palette.BackAccent.BackgroundSecondary,
                    cursor: 'pointer',
                },
            }),
            ...(size === 'small' && {
                width: '48px',
                height: '48px',
            }),
            ...(size === 'medium' && {
                width: '56px',
                height: '56px',
            }),
            '&:hover': {
                background: theme.palette.BackAccent.BackgroundSecondary,
                cursor: 'pointer',
            },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: radius ? '16px' : 0,
            transition: '0.3s ease',
        }
    }
