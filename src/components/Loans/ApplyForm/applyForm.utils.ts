export const getCurrencyLabel = (code: string): string[] => {
    switch (code) {
        case 'RUB':
            return ['рублей', 'руб']
        case 'USD':
            return ['долларов', '$']
        case 'EUR':
            return ['евро', '€']
        default:
            return ['', '']
    }
}
