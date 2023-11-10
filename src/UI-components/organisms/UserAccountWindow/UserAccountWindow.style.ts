import { Theme } from '@mui/material'

import { BorderRadius } from '../../molecules/Modal/Modal.style'

export const userAccountWindowStyles = (theme: Theme) => {
    const {
        BackGray: { BackgroundSlider },
    } = theme.palette

    return {
        width: '856px',
        padding: '45px 57px 60px',
        borderRadius: `${BorderRadius}`,
        border: `1px solid ${BackgroundSlider}`,
    }
}
