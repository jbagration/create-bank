import { Theme } from '@mui/material'

import CongratsImage from '../../../assets/svg/errorNotification.svg'

export const errorImageStyles = {
    margin: '32px auto',
    width: '328px',
    height: '262px',
    backgroundImage: `url(${CongratsImage})`,
    backgroundSize: 'cover',
}

export const buttonStyles = {
    display: 'flex',
    margin: '0 auto',
    justifyContent: 'center',
    alignItems: 'center',
}

export const titleStyles = {
    textAlign: 'center',
    margin: '0 auto 20px',
    lineHeight: '36px',
    maxWidth: '343px',
}

export const textStyles = {
    textAlign: 'center',
    margin: '0 auto 20px',
    lineHeight: '36px',
}

export const errorNotificatorBoxStyles = (theme: Theme) => {
    return {
        color: theme.palette.Text.TextPrimary,
    }
}
