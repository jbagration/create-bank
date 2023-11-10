import { Theme } from '@mui/material'

import Triangle from '../../../../../assets/svg/BankBranchPageSvg/ModalSvg/triangle.svg'

export const buttonStyles = () => (theme: Theme) => {
    return {
        position: 'absolute',
        zIndex: '1300',
        top: '112px',
        left: '408px',
        padding: 0,
        minWidth: '24px',
        minHeight: '32px',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.15)',
        background: `url${Triangle} center no-repeat`,

        backgroundColor: theme.palette.BackAccent.BackgroundPrimary,

        '&:hover': {
            background: theme.palette.BackAccent.BackgroundPrimary,
        },
        '&:active': {
            backgroundColor: theme.palette.BackAccent.BackgoundFilter,
        },
    }
}
