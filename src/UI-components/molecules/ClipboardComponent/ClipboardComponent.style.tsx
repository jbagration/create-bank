import type { SxProps, Theme } from '@mui/material'

import {
    ClipboardProps,
    SubtitleProps,
    TitleContainerStylesProps,
} from './ClipboardComponent.type'

export const clicboardIconStyles = (theme: Theme) => {
    return {
        color: theme.palette.BackGray.BackgoundDark,
        width: '19px',
        height: '22px',
        '&:hover': {
            background: 'transparent',
            cursor: 'pointer',
        },
    }
}

export const clicboardIconSvgStyles = (theme: Theme) => {
    return {
        width: '19px',
        height: '22px',
        color: theme.palette.BackStandart.BackgroundQuaternary,
    }
}

export const subtitleStyles: (
    props: SubtitleProps & Pick<ClipboardProps, 'loanDetails'>
) => SxProps<Theme> =
    ({ center, loanDetails }) =>
    (theme) => {
        return {
            ...(center
                ? { display: 'block', textAlign: 'center' }
                : { textAlign: 'start' }),
            color: loanDetails ? theme.palette.Text.TextTertiary : '',
            marginBottom: '8px',
        }
    }

export const titleContainerStyles: (
    props: TitleContainerStylesProps
) => SxProps = ({ flexCenter }) => {
    return {
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        ...(flexCenter && { justifyContent: 'center' }),
    }
}

export const clicboardTitleStyles = (theme: Theme) => ({
    color: theme.palette.Text.TextPrimary,
    overflow: 'hidden',
})
