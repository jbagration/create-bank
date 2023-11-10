import { SxProps } from '@mui/material'
import { Theme } from '@mui/system'

import { WorkDetailsType } from './DetailsBranch.type'

export const timetableBankContainer = (theme: Theme) => {
    const { BackgroundSlider } = theme.palette.BackGray
    const { TextPrimary } = theme.palette.Text

    return {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '100%',
        color: TextPrimary,
        borderBottom: `1px solid ${BackgroundSlider}`,
        padding: theme.spacing(4),
    }
}

export const workDetailsContainer =
    ({ day, dayToday }: WorkDetailsType): SxProps<Theme> =>
    (theme) => {
        const { BackgoundFilter } = theme.palette.BackAccent
        const { BackgroundSlider } = theme.palette.BackGray

        return {
            width: '32px',
            height: '32px',
            marginRight: theme.spacing(3),
            marginBottom: theme.spacing(3),
            background: day === dayToday ? BackgoundFilter : BackgroundSlider,
        }
    }

export const clockContainer = {
    height: '20px',
    display: 'flex',
    gap: '14px',
}
