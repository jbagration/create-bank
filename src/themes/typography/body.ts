import React from 'react'

import {
    fontFamilies,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
} from './fontProperties'

export interface VariantsBody {
    body1: React.CSSProperties
    body2: React.CSSProperties
}

export const bodyFont: VariantsBody = {
    body1: {
        fontSize: fontSize['16'],
        fontWeight: fontWeight.regular,
        lineHeight: lineHeight['24'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
    body2: {
        fontSize: fontSize['14'],
        fontWeight: fontWeight.regular,
        lineHeight: lineHeight['20'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
}
