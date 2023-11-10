import React from 'react'

import {
    fontFamilies,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
} from './fontProperties'

export interface VariantsSystem {
    emphasis: React.CSSProperties
    caption: React.CSSProperties
    menu: React.CSSProperties
}

export const systemFont: VariantsSystem = {
    emphasis: {
        fontSize: fontSize['14'],
        fontWeight: fontWeight.medium,
        lineHeight: lineHeight['20'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
    caption: {
        fontSize: fontSize['12'],
        fontWeight: fontWeight.regular,
        lineHeight: lineHeight['16'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
    menu: {
        fontSize: fontSize['16'],
        fontWeight: fontWeight.regular,
        lineHeight: lineHeight['16'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
}
