import { buildStyles } from 'react-circular-progressbar'
import { Theme } from '@mui/material'

export const progressCircleStyles = (theme: Theme) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.BackAccent.BackgroundPrimary,
    width: '102px',
    height: '102px',
    borderRadius: '50%',
})

export const progressBarStyles = (theme: Theme) => {
    const {
        BackAccent: { BackgroundSecondary },
        BackAccent: { BackgroundPrimary },
    } = theme.palette

    return buildStyles({
        strokeLinecap: 'butt',
        rotation: 0.5 + (1 - 75 / 100) / 2,
        trailColor: BackgroundSecondary,
        pathColor: BackgroundPrimary,
        textSize: '24px',
    })
}
