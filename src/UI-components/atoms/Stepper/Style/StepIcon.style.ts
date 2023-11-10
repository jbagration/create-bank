import { Theme } from '@mui/material'

export const stepIconStyles = (theme: Theme) => {
    return {
        display: 'flex',
        alignItems: 'center',

        height: 25,
        color: theme.palette.BackGray.BackgroundSlider,
        zIndex: 2,

        '& .QontoStepIcon-completedIcon': {
            width: 16,
            height: 16,

            borderRadius: '50%',
            backgroundColor: theme.palette.BackAccent.BackgroundPrimary,
        },

        '& .QontoStepIcon-circle': {
            width: 16,
            height: 16,
            borderRadius: '50%',
            backgroundColor: 'currentColor',
        },
        '& .QontoStepIcon-circle:last-shild': {
            width: 10,
            height: 10,
            borderRadius: '50%',
        },
    }
}
