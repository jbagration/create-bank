import type { SxProps, Theme } from '@mui/material'

export const socialMediaSx: SxProps = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 60px)',
    marginTop: '10px',
    marginLeft: '5px',
}

export const iconLayoutSx: SxProps = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30px',
}

export const positionsSx: (props: { centralPosition: boolean }) => SxProps = ({
    centralPosition,
}) => {
    return {
        justifyContent: !centralPosition ? 'start' : 'center',
    }
}

export const descriptionStyles = (theme: Theme) => {
    return {
        color: theme.palette.Text.TextDisabled,
    }
}
