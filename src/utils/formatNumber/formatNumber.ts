export const formatNumber = (value: number | string, options: any = {}) =>
    new Intl.NumberFormat('ru-RU', {
        roundingMode: 'floor',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        ...options,
    }).format(
        typeof value === 'string' ? Number(value.replace(',', '.')) : value
    )
