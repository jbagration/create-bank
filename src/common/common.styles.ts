import { grayColor } from 'src/themes/colors/gray'
import { Theme } from '@mui/material'

export const listItemStyles = {
    flexDirection: 'column',
    width: '25%',
    marginBottom: '16px',
}

export const myLinkSx = (theme: Theme) => {
    return {
        display: 'block',
        paddingTop: '16px',
        paddingBottom: '24px',
        textDecoration: 'underline',
        textDecorationSkipInk: 'none',
        cursor: 'pointer',
        color: theme.palette.Text.TextPrimary,
    }
}

export const menuOptionTitleStyles = (theme: Theme) => {
    return {
        fontWeight: '500',
        textAlign: 'center',
        color: theme.palette.Text.TextPrimary,
    }
}

export const textMainStyles = (theme: Theme) => {
    return {
        color: theme.palette.Text.TextPrimary,
    }
}

export const myCalendarBoxStyles = (theme: Theme) => {
    return {
        '.react-datepicker': {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontSize: '14px',
            lineHeight: '20px',
            border: 0,
            borderRadius: '0.3em',
            backgroundColor: theme.palette.BackStandart.BackgroundTertiary,
            color: theme.palette.Text.TextPrimary,
        },
        '.react-datepicker__day--outside-month': {
            color: theme.palette.Text.TextDisabled,
        },
        '.react-datepicker__header': {
            textAlign: 'center',
            backgroundColor: 'transparent',
            borderBottom: 'none',
            borderTopLeftRadius: 0,
            padding: '8px 0',
            position: 'relative',
        },
        '.react-datepicker__current-month': {
            textTransform: 'capitalize',
            fontWeight: '400',
            order: -1,
            color: theme.palette.Text.TextPrimary,
            cursor: 'pointer',
        },
        '.react-datepicker__navigation': {
            alignItems: 'center',
            top: 0,
            position: 'relative',
        },
        '.react-datepicker__navigation--next': {
            right: 0,
            left: 0,
        },
        '.react-datepicker__navigation-icon--next': {
            right: 0,
            left: 0,
        },
        '.react-datepicker__navigation-icon::before': {
            borderColor: theme.palette.BackGray.BackgroundPrimary,
            height: '10px',
            width: '10px',
        },
        '.react-datepicker__navigation-icon:hover::before': {
            borderColor: theme.palette.BackGray.BackgroundHover,
        },

        '.react-datepicker__day-names .react-datepicker__day-name': {
            textTransform: 'capitalize',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '20px',
            color: theme.palette.Text.TextPrimary,
        },
        '.react-datepicker__day-name,.react-datepicker__day,.react-datepicker__time-name':
            {
                width: '1.65rem',
                lineHeight: '1.65rem',
                margin: 0,
                fontWeight: 400,
                fontSize: '12px',
            },
        '.react-datepicker__day': {
            color: theme.palette.Text.TextPrimary,
            marginTop: '2px',
        },
        '.react-datepicker__day--in-range': {
            backgroundColor: 'white',
            color: 'inherit',
        },
        '.react-datepicker__day:hover,.react-datepicker__month-text:hover,.react-datepicker__quarter-text:hover,.react-datepicker__year-text:hover':
            {
                borderRadius: '50%',
                backgroundColor: grayColor[700],
            },
        '.react-datepicker__day--in-range:hover': {
            borderRadius: 0,
            backgroundColor: grayColor[700],
        },
        '.react-datepicker__day--selected,.react-datepicker__day--in-selecting-range':
            {
                borderRadius: '50%',
                backgroundColor: ' #ffd600',
            },

        '.react-datepicker__day--in-range,.react-datepicker__day--in-selecting-range:not(.react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range, .react-datepicker__day--selecting-range-start)':
            {
                color: theme.palette.Text.TextPrimary,
                borderRadius: 0,
                background: 'rgba(255, 214, 0, 0.3)',
            },

        '.react-datepicker__day--selected,.react-datepicker__day--selecting-range-start,.react-datepicker__day--range-end':
            {
                position: 'relative',
                outline: 'invert',
                zIndex: 0,
                borderRadius: '50% !important',
                color: '#fff !important',
                backgroundColor: '#ffd600 !important',
            },
        '.react-datepicker__day--range-start::after,.react-datepicker__day--selecting-range-start::after':
            {
                content: "''",
                zIndex: -1,
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-25%, -50%)',
                width: '18.65px',
                height: '1.65rem',
                borderRadius: '5px 0 0 0 !important',
                borderWidth: '10px',
                backgroundColor: 'rgba(255, 214, 0, 0.3) !important',
            },

        '.react-datepicker__day--in-selecting-range:hover': {
            borderRadius: '0 24px 24px 0',
            transition: 'ease-out',
        },

        '.react-datepicker__day--range-end::before': {
            content: "''",
            zIndex: -1,
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-75%, -50%)',
            width: '18.65px',
            height: '1.65rem',
            borderRadius: '0 5px 5px 0 !important',
            borderWidth: '10px',
            backgroundColor: 'rgba(255, 214, 0, 0.3) !important',
        },
        '.react-datepicker__day--keyboard-selected': {
            color: 'inherit',
            backgroundColor: 'transparent',
        },
        '.react-datepicker__day--today': {
            color: '#ffd600',
        },
    }
}

export const calendarContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
}

export const switcherBoxStyles = (theme: Theme) => {
    return {
        backgroundColor: theme.palette.BackAccent.BackgroundTertiary,
        padding: '16px 12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '343px',
    }
}

export const descriptionStyles = (theme: Theme) => {
    return {
        marginTop: '4px',
        color: theme.palette.Text.TextTertiary,
    }
}

export const linkStyles = (theme: Theme) => {
    return {
        color: theme.palette.Text.TextPrimary,
        textDecoration: 'underline',
        textDecorationColor: theme.palette.Text.TextPrimary,
        '&:hover': {
            cursor: 'pointer',
        },
        display: 'inline',
    }
}

export const captionStyles = (theme: Theme) => {
    return {
        color: theme.palette.Text.TextPrimary,
        padding: '16px 32px',
        textAlign: 'center',
    }
}

export const longDropdownInputStyles = { width: '343px' }

export const modalStyle = (styles?: {}) => (theme: Theme) => {
    return {
        ...(styles || {}),
        color: theme.palette.BackStandart.BackgroundQuaternary,
        backgroundColor: theme.palette.BackStandart.BackgroundSecondary,
    }
}
