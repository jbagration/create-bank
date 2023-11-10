import React from 'react'

import {
    fontFamilies,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
} from './fontProperties'

export interface VariantsTextLink {
    textLink1: React.CSSProperties
    textLink2: React.CSSProperties
    textLink3: React.CSSProperties
}

export const textLinkFont: VariantsTextLink = {
    textLink1: {
        fontSize: fontSize['16'],
        fontWeight: fontWeight.regular,
        lineHeight: lineHeight['24'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
    textLink2: {
        fontSize: fontSize['14'],
        fontWeight: fontWeight.regular,
        lineHeight: lineHeight['20'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
    textLink3: {
        fontSize: fontSize['12'],
        fontWeight: fontWeight.regular,
        lineHeight: lineHeight['16'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
}
