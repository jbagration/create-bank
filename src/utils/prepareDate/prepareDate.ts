import format from 'date-fns/format'
// import isToday from 'date-fns/isToday'
// import isYesterday from 'date-fns/isYesterday'
import ruLocale from 'date-fns/locale/ru'

export const prepareDate = (createdAt: string, completedAt: string) => {
    const date = new Date(completedAt || createdAt || 0)

    const resultDate = format(date, 'dd.MM.yyyy', { locale: ruLocale })
    // if (isToday(date)) {
    //     resultDate = 'Сегодня'
    // } else if (isYesterday(date)) {
    //     resultDate = 'Вчера'
    // } else {
    //     resultDate = format(date, 'dd.MM.yyyy', { locale: ruLocale })
    // }
    const time = format(date, 'HH:mm', {
        locale: ruLocale,
    })

    return { resultDate, time }
}
