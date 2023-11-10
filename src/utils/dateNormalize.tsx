/* eslint-disable no-param-reassign */
export const toIsoString = (date: Date | null | string): string | null => {
    if (!date) return null
    if (typeof date === 'string') date = new Date(date)
    return date.toISOString().replace('Z', '')
}

export const toLocaleDateString = (
    date: Date | null | string
): string | null => {
    if (!date) return null
    if (typeof date === 'string') date = new Date(date)
    return date.toLocaleDateString()
}
