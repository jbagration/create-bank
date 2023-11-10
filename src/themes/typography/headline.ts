import React from 'react'

import {
    fontFamilies,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
} from './fontProperties'

export interface VariantsHeadline {
    h1: React.CSSProperties
    h2: React.CSSProperties
    h3: React.CSSProperties
    h4: React.CSSProperties
    h5: React.CSSProperties
}

export const headlineFont: VariantsHeadline = {
    h1: {
        fontSize: fontSize['64'],
        fontWeight: fontWeight.black,
        lineHeight: lineHeight['96'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
    h2: {
        fontSize: fontSize['48'],
        fontWeight: fontWeight.black,
        lineHeight: lineHeight['72'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
    h3: {
        fontSize: fontSize['40'],
        fontWeight: fontWeight.black,
        lineHeight: lineHeight['64'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
    h4: {
        fontSize: fontSize['32'],
        fontWeight: fontWeight.bold,
        lineHeight: lineHeight['48'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
    h5: {
        fontSize: fontSize['24'],
        fontWeight: fontWeight.bold,
        lineHeight: lineHeight['36'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
}
