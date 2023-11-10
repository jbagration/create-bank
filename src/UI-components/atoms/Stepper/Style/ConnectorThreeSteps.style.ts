import { Theme } from '@mui/material'

export const connectorThreeStepsStyles = (theme: Theme) => {
    const { BackgroundPrimary } = theme.palette.BackAccent
    const { BackgroundSlider } = theme.palette.BackGray

    return {
        '&.MuiStepConnector-alternativeLabel': {
            top: '73px',
        },
        '&.Mui-active .MuiStepConnector-line': {
            backgroundColor: BackgroundPrimary,
        },
        '&.Mui-completed .MuiStepConnector-line': {
            backgroundColor: BackgroundPrimary,
        },
        '& .MuiStepConnector-line': {
            height: 4,
            border: 0,
            backgroundColor: BackgroundSlider,
            marginRight: '61.7px',
            marginLeft: '-98px',
            borderRadius: 2,
        },
    }
}
