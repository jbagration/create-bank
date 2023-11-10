import React from 'react'

import {
    fontFamilies,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
} from './fontProperties'

export type VariantsTag = {
    tagEmphasised: React.CSSProperties
    tag: React.CSSProperties
}

export const tagFont: VariantsTag = {
    tagEmphasised: {
        fontSize: fontSize['12'],
        fontWeight: fontWeight.medium,
        lineHeight: lineHeight['12'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
    tag: {
        fontSize: fontSize['12'],
        fontWeight: fontWeight.regular,
        lineHeight: lineHeight['12'],
        letterSpacing: letterSpacing[0],
        fontFamily: fontFamilies.Roboto,
    },
}
