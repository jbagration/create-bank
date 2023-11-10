import React, { FC, useEffect, useState } from 'react'
import { Typography } from '@mui/material'

import { useCountDown } from '../../redux/hooks/useCountDown'

import { CountDownTimerProps } from './CountDownTimer.type'

export const CountDownTimer: FC<CountDownTimerProps> = ({
    seconds,
    fallback: Component,
    onTimerDestroy,
}) => {
    const [isVisible, setIsVisible] = useState(true)
    const destroyTimer = () => {
        setIsVisible(false)
        onTimerDestroy && onTimerDestroy()
    }
    return isVisible ? (
        <CountDown seconds={seconds} destroyTimer={destroyTimer} />
    ) : (
        <Component />
    )
}

export const CountDown: FC<{ seconds: number; destroyTimer?: Function }> = ({
    seconds,
    destroyTimer,
}) => {
    const timeLeft = useCountDown(seconds)
    useEffect(() => {
        if (timeLeft === '00:00') {
            destroyTimer && destroyTimer()
        }
    }, [timeLeft])
    return (
        <Typography variant="strong2">
            Отправить код повторно через {timeLeft}
        </Typography>
    )
}
