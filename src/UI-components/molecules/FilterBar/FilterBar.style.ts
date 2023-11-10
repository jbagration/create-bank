import type { Theme } from '@mui/material'

export const branchIconContainerStyles = {
    width: '100%',
    display: 'flex',
    marginTop: '12px',
    alignItems: 'center',
}

export const branchIconStyles = (theme: Theme) => {
    const {
        BackGray: { BackgroundSlider },
    } = theme.palette

    return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '16px',
        width: '32px',
        textAlign: 'center',
        height: '32px',
        background: `${BackgroundSlider}`,
        borderRadius: '50%',
        '& svg': {
            path: {
                fill: theme.palette.BackStandart.BackgroundQuaternary,
            },
        },
    }
}
