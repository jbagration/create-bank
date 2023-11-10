type StartDate = '2023-08-17T11:40:16.149Z'

export interface PayeeDTO {
    payeeType: string
    payeeAccountNumber: string | undefined
    payeeCardNumber?: string
    payeeMobilePhone?: string
    payeeName?: string
    payeeInn?: string
    payeeBic?: string
}

export interface MoneyTransferDTO {
    transferTypeId: number
    sum: string | number
    sumComission: string
    startDate?: string
    remitterCardNumber: string | undefined
    payeeDTO: PayeeDTO
    isFavorite?: boolean
    periodicity?: string
    purpose?: string
    currencyExchange?: string
}
