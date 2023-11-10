import { SxProps, Theme } from '@mui/material'

import { ActionButtonStylesProps } from './ModalActionButton.type'

export const modalActionButtonStyles: (
    props: ActionButtonStylesProps
) => SxProps<Theme> =
    ({ modalAction }) =>
    (theme) => {
        return {
            padding: 0,
            borderRadius: 0,
            textTransform: 'unset',
            color: 'black',
            '&:hover': {
                background: 'transparent',
            },
        }
    }

export const closeIconStyles = () => (theme: Theme) => {
    return {
        width: '24px',
        height: '24px',
        fill: theme.palette.BackGray.BackgroundSecondary,
        marginLeft: '50px',
    }
}

export const arrowStyles = (theme: Theme) => {
    return {
        width: '24px',
        height: '24px',
        color: theme.palette.BackStandart.BackgroundQuaternary,
    }
}

export const textStyles = () => (theme: Theme) => {
    return {
        color: theme.palette.Text.TextDisabled,
    }
}
