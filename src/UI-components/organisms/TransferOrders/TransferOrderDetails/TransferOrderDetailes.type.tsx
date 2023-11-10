export interface TransferOrderDetails {
    sum: number
    time: string
    transferTypeName: string
    currencyCode: string
    purpose: string
    name: string
}

export interface OrderDetailsItem {
    remitterCardNumber: string
    sumCommission: number
    currencyExchange: number
    type: string
    name: string
    INN: string
    BIC: string
    payeeAccountNumber: string
    payeeCardNumber: string
    createdAt: string
}

export interface TransferOrderDetailsProps {
    state: TransferOrderDetails
    data: OrderDetailsItem
}
