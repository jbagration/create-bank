import React from 'react'
import { BoxProps } from '@mui/material'

export type CountDownTimerProps = {
    seconds: number
    fallback: React.ComponentType
    onTimerDestroy?: Function
    sx?: Pick<BoxProps, 'sx'>
}
