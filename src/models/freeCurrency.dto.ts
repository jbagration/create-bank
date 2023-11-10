export interface CurrencyDto {
    codeFromCurrency: string
    codeToCurrency: string
}

export interface CurrencyDifferenceDto {
    data: { [key: string]: number }
}
