import React from 'react'

import {
    fontFamilies,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
} from './fontProperties'

export type VariantsSubtitle = {
    subtitle1: React.CSSProperties
    subtitle1Bold: React.CSSProperties
    subtitle2Bold: React.CSSProperties
    subtitle3Bold: React.CSSProperties
    subtitle2: React.CSSProperties
    subtitle3: React.CSSProperties
}

export const subtitleFont: VariantsSubtitle = {
    subtitle1: {
        fontSize: fontSize['24'],
        fontWeight: fontWeight.regular,
        lineHeight: lineHeight['36'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
    subtitle1Bold: {
        fontSize: fontSize['24'],
        fontWeight: fontWeight.bold,
        lineHeight: lineHeight['36'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
    subtitle2Bold: {
        fontSize: fontSize['20'],
        fontWeight: fontWeight.bold,
        lineHeight: lineHeight['32'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
    subtitle3Bold: {
        fontSize: fontSize['16'],
        fontWeight: fontWeight.bold,
        lineHeight: lineHeight['24'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
    subtitle2: {
        fontSize: fontSize['20'],
        fontWeight: fontWeight.regular,
        lineHeight: lineHeight['32'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
    subtitle3: {
        fontSize: fontSize['16'],
        fontWeight: fontWeight.regular,
        lineHeight: lineHeight['24'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
}
