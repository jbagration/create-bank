import React from 'react'

import {
    fontFamilies,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
} from './fontProperties'

export type VariantsButton = {
    buttonLarge: React.CSSProperties
    buttonMedium: React.CSSProperties
    buttonSmall: React.CSSProperties
}

export const buttonFont: VariantsButton = {
    buttonLarge: {
        fontSize: fontSize['16'],
        fontWeight: fontWeight.bold,
        lineHeight: lineHeight['16'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
    buttonMedium: {
        fontSize: fontSize['14'],
        fontWeight: fontWeight.bold,
        lineHeight: lineHeight['14'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
    buttonSmall: {
        fontSize: fontSize['12'],
        fontWeight: fontWeight.bold,
        lineHeight: lineHeight['12'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
}
