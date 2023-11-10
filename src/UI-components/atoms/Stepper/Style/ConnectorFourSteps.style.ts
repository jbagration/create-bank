import { Theme } from '@mui/material'

export const connectorFourStepsStyles = (theme: Theme) => {
    const { BackgroundPrimary } = theme.palette.BackAccent
    const { BackgroundSlider } = theme.palette.BackGray

    return {
        '&.MuiStepConnector-alternativeLabel': {
            top: '93px',
        },

        '&.Mui-active .MuiStepConnector-line ': {
            backgroundColor: BackgroundPrimary,
        },

        '&.Mui-completed .MuiStepConnector-line': {
            backgroundColor: BackgroundPrimary,
        },

        '& .MuiStepConnector-line ': {
            height: 4,
            border: 0,

            backgroundColor: BackgroundSlider,
            marginRight: '44px',
            marginLeft: '-70px',
            borderRadius: 2,
        },
    }
}
