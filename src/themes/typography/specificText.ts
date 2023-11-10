import React from 'react'

import { systemColor } from '../colors/_index'

import {
    fontFamilies,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
} from './fontProperties'

export type VariantsSpecificText = {
    specificTextBold: React.CSSProperties
    specificText1: React.CSSProperties
}

export const specificTextFont: VariantsSpecificText = {
    specificTextBold: {
        fontSize: fontSize['14'],
        fontWeight: fontWeight.bold,
        lineHeight: lineHeight['20'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
        color: systemColor.Error,
    },
    specificText1: {
        fontSize: fontSize['14'],
        fontWeight: fontWeight.regular,
        lineHeight: lineHeight['20'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
        color: systemColor.Error,
    },
}
