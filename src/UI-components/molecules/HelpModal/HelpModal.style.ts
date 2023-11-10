import { Theme } from '@mui/material'

export const helpModalStyle = (theme: Theme) => {
    return {
        cursor: 'default',
        color: theme.palette.BackStandart.BackgroundQuaternary,
        backgroundColor: theme.palette.BackStandart.BackgroundSecondary,
    }
}

export const helpModalBoxStyle = {
    width: '550px',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '50px',
}

export const helpModalTitleStyle = {
    cursor: 'default',
    width: '420px',
    textAlign: 'center',
}

export const helpModalCallBoxStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '36px',
}

export const helpModalCallTitleStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
}

export const helpModalButtonStyle =
    (position: 'left' | 'right') => (theme: Theme) => {
        return {
            position: 'absolute',
            top: 8,
            ...(position === 'left' && {
                left: 8,
            }),
            ...(position === 'right' && {
                right: 8,
            }),
            '& svg': {
                fill: theme.palette.BackStandart.BackgroundQuaternary,
            },
        }
    }

export const helpModalOptionStyle = (disabled: boolean) => (theme: Theme) => {
    const { BackgroundHover } = theme.palette.BackAccent

    return {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
        ...(!disabled && {
            cursor: 'pointer',
            '&:hover > .MuiBox-root:first-child': {
                transition: '0.1s ease-in-out',
                backgroundColor: BackgroundHover,
                borderColor: BackgroundHover,
            },
        }),
    }
}

export const helpModalOptionIconStyle =
    (disabled: boolean) => (theme: Theme) => {
        const { BackgroundSecondary } = theme.palette.BackAccent
        const { BackgroundPrimary } = theme.palette.BackStandart
        const { TextDisabled } = theme.palette.Text

        return {
            transition: '0.1s ease-in-out',
            display: 'grid',
            placeItems: 'center',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            border: `2px solid`,
            borderColor: BackgroundSecondary,
            backgroundColor: BackgroundSecondary,
            ...(disabled && {
                backgroundColor: BackgroundPrimary,
                borderColor: TextDisabled,
            }),
        }
    }

export const helpModalOptionStatusStyle = {
    display: 'flex',
    gap: '5px',
    alignItems: 'center',
}
