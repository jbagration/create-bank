import { Theme } from '@mui/material'

export const searchFieldStyle = (theme: Theme) => {
    const focused = {
        borderColor: theme.palette.BackGray.BackgroundPrimary,
        borderWidth: '2px',
    }
    return {
        width: '746px',
        height: 50,
        borderRadius: 100,
        '& .MuiOutlinedInput-root': {
            fieldSet: {
                borderRadius: 100,
                borderColor: theme.palette.BackGray.BackgroundPrimary,
            },
            '&:hover': {
                fieldset: focused,
            },
            '&.Mui-focused': {
                fieldset: focused,
            },
            '& .MuiButtonBase-root': {
                left: '1px',
            },
        },
    }
}

export const tagsBarStyle = {
    mt: 3,
    width: '746px',
    minHeight: 50,
    maxHeight: 'fit-content',
    display: 'flex',
    flexWrap: 'wrap',
    mb: 15,
}

export const rightBarStyle = (theme: Theme) => {
    return {
        minWidth: '306px',
        height: 'fit-content',
        position: 'relative',
        right: -20,
        mt: 19,
        border: `1px solid ${theme.palette.BackGray.BackgroundPrimary}`,
        borderRadius: '8px',
        '& button': {
            color: theme.palette.BackStandart.BackgroundQuaternary,
            justifyContent: 'start',
            textTransform: 'none',
            fontWeight: 'normal',
        },
        '& .Mui-selected': {
            color: theme.palette.BackStandart.BackgroundQuaternary,
            fontWeight: 'bold',
        },
    }
}
export const tabStyle = (theme: Theme) => {
    return {
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
            color: '#fff',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }
}
export const faqCaptionStyle = (theme: Theme) => {
    return {
        width: '746px',
        height: 'fit-content',
        mt: 19,
        color: theme.palette.Text.TextPrimary,
        padding: '16px 32px',
        textAlign: 'center',
    }
}
