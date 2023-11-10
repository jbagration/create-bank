import { Checkbox } from 'src/UI-components/atoms'
import { SxProps, Theme } from '@mui/material'
import { Box, styled } from '@mui/system'

export const mainContainerStyles = {
    marginTop: '50px',
    maxWidth: '636px',
}

export const switchContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '32px',
}

export const switchLabelStyles = (theme: Theme) => {
    return {
        marginRight: '59px',
        color: theme.palette.Text.TextTertiary,
    }
}

export const inputContainerStyles = {
    marginBottom: '32px',
    display: 'flex',
    alignItems: 'center',
    '& > div:last-child': {
        marginLeft: '20px',
    },
}

export const inputLabelStyles = (theme: Theme) => {
    return {
        width: '192px',
        marginRight: 'auto',
        color: theme.palette.Text.TextTertiary,
    }
}

export const CaptionContainer = styled(Box)(() => ({
    display: 'flex',
    padding: '16px 32px',
}))

export const captionContainerStyles = {
    display: 'flex',
    padding: '16px 32px',
}

export const TabCheckbox = styled(Checkbox)(() => ({
    alignItems: 'start',
    marginRight: '16px',
    padding: '0px',
}))

export const tabCheckboxStyles = {
    height: '25px',
    alignItems: 'start',
    marginRight: '16px',
    padding: '0px',
}

export const buttonContainerStyles = {
    marginTop: '56px',
}

export const yellowSwitchStyles = (theme: Theme) => {
    return {
        '& .MuiSwitch-switchBase.Mui-checked': {
            color: theme.palette.BackAccent.BackgroundPrimary,
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: theme.palette.BackAccent.BackgroundPrimary,
        },
    }
}

export const inputButtonStyles = {
    border: 'none',
    padding: '0',
    cursor: 'pointer',
}

export const formControlStyles: (props: {
    cardStatus: string
}) => SxProps<Theme> =
    ({ cardStatus }) =>
    (theme) => {
        const { BackgroundPrimary } = theme.palette.BackAccent
        const { TextPrimary } = theme.palette.Text

        return {
            color: cardStatus !== 'ACTIVE' ? BackgroundPrimary : TextPrimary,
        }
    }
