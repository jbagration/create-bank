import type { Theme } from '@mui/material'
import { SxProps } from '@mui/material'

export const cardNumberStyles: (props: { mini: boolean }) => SxProps<Theme> = ({
    mini,
}) => {
    return {
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
        marginBottom: '8px',
        ...(mini && {
            gap: '4px',
            marginBottom: '3px',
        }),
    }
}

export const cardNumberFontStyles: (props: {
    mini: boolean
}) => SxProps<Theme> =
    ({ mini }) =>
    (theme) => {
        const { body2 } = theme.typography

        return {
            ...body2,
            ...(mini && {
                fontSize: '4px',
                fontWeight: 400,
                lineHeight: '5px',
            }),
        }
    }

export const cardNumberRoundStyles: (props: {
    mini: boolean
}) => SxProps<Theme> = ({ mini }) => {
    return {
        fontSize: '7px',
        lineHeight: '20px',
        letterSpacing: '1px',
        ...(mini && {
            fontSize: '1.6px',
            lineHeight: '0.1px',
            letterSpacing: '0.2px',
        }),
    }
}
