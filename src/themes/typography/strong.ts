import React from 'react'

import {
    fontFamilies,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
} from './fontProperties'

export interface VariantsStrong {
    strong1: React.CSSProperties
    strong2: React.CSSProperties
    strong3: React.CSSProperties
    strong4: React.CSSProperties
}

export const strongFont: VariantsStrong = {
    strong1: {
        fontSize: fontSize['16'],
        fontWeight: fontWeight.bold,
        lineHeight: lineHeight['24'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
    strong2: {
        fontSize: fontSize['14'],
        fontWeight: fontWeight.bold,
        lineHeight: lineHeight['20'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
    strong3: {
        fontSize: fontSize['14'],
        fontWeight: fontWeight.bold,
        lineHeight: lineHeight['20'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
        textDecorationLine: 'underline',
    },
    strong4: {
        fontSize: fontSize['24'],
        fontWeight: fontWeight.bold,
        lineHeight: lineHeight['36'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
}
