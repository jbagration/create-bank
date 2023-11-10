import { SxProps } from '@mui/material'
import { Theme } from '@mui/system'

export const branchItemButtonContainer = (): SxProps<Theme> => (theme) => {
    const { BackgroundPrimary } = theme.palette.BackStandart

    return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        backgroundColor: BackgroundPrimary,
        width: '100%',
        height: '116px',
    }
}

export const branchListContainer =
    ({ sx }: any): SxProps<Theme> =>
    (theme) => {
        const { BackgroundSlider } = theme.palette.BackGray
        const { BackgroundPrimary } = theme.palette.BackStandart

        return {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            backgroundColor: BackgroundPrimary,
            border: `1px solid ${BackgroundSlider}`,
            borderRadius: '2px',
            overflowX: 'hidden',
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
                width: '8px',
                borderRadius: '20px',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: theme.palette.grey[300],
                borderRadius: '20px',
            },
            ...sx,
        }
    }
