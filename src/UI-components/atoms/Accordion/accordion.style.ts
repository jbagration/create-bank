import { keyframes } from '@emotion/react'
import { Theme } from '@mui/material'

const animation = keyframes`
    0% {
        transform: rotate(0deg)
    }

    50% {
        transform: rotate(180deg)
    }



    100% {
        transform: rotate(360deg)
    }
    `

export const accordionStyle = (theme: Theme) => {
    return {
        '&:before': {
            display: 'none',
        },
        '&.MuiPaper-root': {
            boxShadow: 'none',
            borderRadius: '8px',
            backgroundColor: 'inherit',
            color: theme.palette.BackGray.BackgoundDark,
            '& .MuiButtonBase-root': {
                borderRadius: '8px',
                backgroundColor: theme.palette.BackGray.BackgroundPrimary,
                '&:hover': {
                    backgroundColor: theme.palette.BackGray.BackgroundHover,
                    '& .MuiSvgIcon-root': {
                        transformOrigin: 'center',
                        animation: `${animation}  1.5s infinite`,
                    },
                },
            },
            '& .MuiAccordionDetails-root': {
                backgroundColor: 'inherit',
                color: theme.palette.BackStandart.BackgroundQuaternary,
            },
            '& svg': {
                color: theme.palette.BackGray.BackgoundDark,
                borderRadius: '16px',
                backgroundColor: theme.palette.BackAccent.BackgroundHover,
            },
        },
    }
}
