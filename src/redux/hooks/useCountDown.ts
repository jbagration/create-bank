import { useEffect, useState } from 'react'
import { secondsToTimeLeft } from 'src/utils'

export const useCountDown = (countdownDuration: number) => {
    const [timeLeft, setTimeLeft] = useState(countdownDuration)
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return secondsToTimeLeft(timeLeft)
}
