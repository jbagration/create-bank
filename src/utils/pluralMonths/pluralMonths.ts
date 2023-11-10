import plural from 'plural-ru'

export const pluralMonths = (month: number) => {
    return `${month} ${plural(month, 'месяц', 'месяца', 'месяцев')}`
}
