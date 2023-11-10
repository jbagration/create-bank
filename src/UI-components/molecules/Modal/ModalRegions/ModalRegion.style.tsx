import { SxProps, Theme } from '@mui/material'
import { dialogClasses } from '@mui/material/Dialog'

import { DialogStylesProps } from './ModalRegions.type'

export const modalBorderRadius = '8px'

export const dialogStyles: (props: DialogStylesProps) => SxProps<Theme> =
    ({ modalVariant }) =>
    (theme) => {
        return {
            borderRadius: `${modalBorderRadius}`,
            [`& .${dialogClasses.paper}`]: {
                margin: 0,
                maxWidth: 'unset',
                maxHeight: 'unset',
                backgroundColor: theme.palette.BackStandart.BackgroundPrimary,
                borderRadius: `${modalBorderRadius}`,
            },
            ...(modalVariant === 'geolocation' && {
                width: '241px',
                position: 'absolute',
                top: '140px',
                bottom: 'unset',
                left: '80%',
                transform: 'translateX(-50%)',
            }),
            ...(modalVariant === 'searchCity' && {
                '& .MuiDialogContent-root': {
                    width: '603px',
                    height: '368px',
                    alignItems: 'flex-start',
                },
            }),
        }
    }

export const dialogContentStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
}

export const dialogActionsStyles = () => (theme: Theme) => {
    return {
        width: '100%',
        padding: 3.5,
        '& svg': {
            fill: theme.palette.Text.TextPrimary,
        },
    }
}

export const cityStyles = () => (theme: Theme) => {
    const { BackgroundPrimary, BackgroundHover } = theme.palette.BackAccent

    return {
        color: BackgroundPrimary,
        display: 'inline-block',
        cursor: 'pointer',
        borderBottom: `2px dashed ${BackgroundPrimary}`,
        ':hover': {
            color: BackgroundHover,
            borderBottom: `2px dashed ${BackgroundHover}`,
        },
    }
}

export const modalRegionTypographyStyles = (theme: Theme) => ({
    color: theme.palette.Text.TextPrimary,
    marginTop: 4,
})

export const modalRegionTypographyCityStyles = (theme: Theme) => ({
    color: theme.palette.Text.TextPrimary,
})

export const citySelectorTypographyStyles = (theme: Theme) => ({
    color: theme.palette.Text.TextPrimary,
    boxSizing: 'border-box',
})
