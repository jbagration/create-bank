import { SxProps, Theme } from '@mui/material'

export type Props = {
    active?: string | boolean
}

export const linkStyles = (theme: Theme) => {
    return {
        padding: 0,
        background: 'transparent',
        display: 'flex',
        marginBottom: '30px',
        alignItems: 'center',
        gap: '32px',
        outline: 'none !important',
        '&:focusVisible': {
            background: 'transparent',
        },
        '& svg': {
            fill: theme.palette.Text.TextTertiary,
            transition: '0.3s ease',
        },
        '&:hover': {
            '& div': {
                background: theme.palette.BackAccent.BackgroundSecondary,
                color: '#fff',
            },
            '& svg': {
                fill: theme.palette.BackStandart.BackgroundPrimary,
                transition: '0.3s ease',
            },
        },
        '.link': {
            padding: '8px 16px',
            color: theme.palette.Text.TextTertiary,
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            width: '100%',
        },
        '.link-active': {
            padding: '8px 16px',
            color: theme.palette.Text.TextPrimary,
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            width: '100%',
        },
    }
}

export const subLinkStyles: (props: Props) => SxProps<Theme> =
    ({ active = false }) =>
    (theme) => ({
        outline: 'none !important',
        padding: 0,
        marginBottom: '30px',
        borderLeft: '4px solid',
        borderColor: 'transparent',
        whiteSpace: 'nowrap',
        a: {
            textDecoration: 'none',
            color: theme.palette.Text.TextTertiary,
            width: '100%',
            padding: '16px',
            paddingLeft: '32px',
        },
        ...(active === 'true' && {
            borderColor: theme.palette.BackAccent.BackgroundPrimary,
            a: {
                textDecoration: 'none',
                color: theme.palette.Text.TextPrimary,
                width: '100%',
                padding: '16px',
                paddingLeft: '32px',
            },
        }),
    })
