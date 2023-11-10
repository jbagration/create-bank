import { SxProps, Theme } from '@mui/material'

import { ButtonType } from '../Map.type'

export const mapControllsContainerStyles = {
    position: 'absolute',
    zIndex: '1300',
    bottom: '124px',
    right: '32px',
    display: 'flex',
    flexDirection: 'column-reverse',
}

export const mapControlls: (props: Partial<ButtonType>) => SxProps<Theme> =
    ({ GeolocationIcon, GeolocationHoverIcon, ZoomInIcon, ZoomOutIcon }) =>
    (theme) => {
        const {
            BackAccent: { BackgoundFilter },
        } = theme.palette

        const Icon = GeolocationIcon || ZoomInIcon || ZoomOutIcon
        const IconHovered = GeolocationHoverIcon || ZoomInIcon || ZoomOutIcon

        return {
            minWidth: '40px',
            minHeight: '40px',
            marginTop: '15px',
            boxShadow: '0 4px 4px rgba(0, 0, 0, 0.12)',
            borderRadius: '50%',
            border: 'none',
            background: `url(${Icon}) center no-repeat`,
            backgroundColor: 'white',
            '&:hover': {
                background: `url(${IconHovered}) center no-repeat`,
                backgroundColor: 'white',
            },
            '&:active': {
                backgroundColor: BackgoundFilter,
                transition: 'all 0.02s ease-out',
            },
        }
    }
