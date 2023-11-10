import { Theme } from '@mui/material'

import {
    fontFamilies,
    fontSize,
    fontWeight,
    lineHeight,
} from '../../../themes/typography/fontProperties'

export const sxBox = {
    display: 'flex',
    alignItems: 'flexStart',
}

export const serviceHeaderFont = (theme: Theme) => {
    return {
        margin: '32px 0 0',
        height: 50,
        fontFamily: fontFamilies.Roboto,
        lineHeight: lineHeight['36'],
        fontSize: fontSize['24'],
        color: theme.palette.Text.TextPrimary,
        fontWeight: 700,
        textAlign: 'center',
    }
}

export const serviceDescriptionFont = (theme: Theme) => {
    return {
        height: 64,
        fontFamily: fontFamilies.Roboto,
        lineHeight: '24px',
        fontSize: fontSize['16'],
        color: theme.palette.Text.TextDisabled,
        fontWeight: fontWeight.regular,
    }
}

export const containerGrid = {
    height: 356,
    width: 1230,
    margin: '0 auto 227px',
    flexWrap: 'nowrap',
    gap: '24px',
}

export const itemStyle = (theme: Theme) => {
    return {
        width: 416,
        height: 380,
        padding: '32px 32px 0 32px',
        backgroundColor: theme.palette.BackGray.BackgoundFilterHover,
    }
}
