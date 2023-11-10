export const getWorkSchedule = (openingTime?: string, closingTime?: string) => {
    if (!openingTime || !closingTime) {
        return 'Нет данных'
    }

    let time = `${openingTime.replace(':00', '')} - ${closingTime.replace(
        ':00',
        ''
    )}`

    if (time === '00:00 - 23:59:59' || time === '00:00 - 23:59') {
        time = 'Круглосуточно'
    }
    return time
}
