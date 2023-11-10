import addSeconds from 'date-fns/addSeconds'
import format from 'date-fns/format'

export const secondsToTimeLeft = (seconds: number): string => {
    if (seconds < 0) return '00:00'

    const dateFrom = Date.now()
    const dateTo = +addSeconds(Date.now(), seconds)

    const timeLeft = dateTo - dateFrom
    return format(timeLeft, 'mm:ss')
}
