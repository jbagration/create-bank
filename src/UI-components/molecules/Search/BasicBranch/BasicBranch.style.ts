import { SxProps, Theme } from '@mui/material'

import { BranchTypeTextProps } from './BasicBranch.type'

export const branchItemContainerStyles = (theme: Theme) => {
    const { BackgroundSlider, BackgoundFilter } = theme.palette.BackGray

    return {
        '&:not(:first-child)': {
            borderTop: `1px solid ${BackgroundSlider}`,
        },
        width: '100%',
        cursor: 'pointer',
        '&:hover': {
            background: BackgoundFilter,
            transition: 'background 0.5s',
        },
    }
}

export const timetableContainer = (): SxProps<Theme> => (theme) => {
    const { BackgroundSlider } = theme.palette.BackGray

    return {
        width: '100%',
        height: '100%',
        position: 'relative',
        borderTop: `1px solid ${BackgroundSlider}`,
    }
}

export const basicBranchContainerStyles = (theme: Theme) => {
    return {
        color: theme.palette.Text.TextPrimary,
        padding: '16px',
    }
}

export const branchInfoContainerStyles = {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    '& img': { width: '40px', height: '40px' },
}

export const workTimeContainerStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: '17px',
}

export const branchTimeText =
    ({ closed }: BranchTypeTextProps): SxProps<Theme> =>
    (theme) => {
        const { Success, Error } = theme.palette.SystemColor

        return {
            color: Success,
            ...(closed && {
                color: Error,
            }),
        }
    }
