export interface OrderItem {
    transferOrderId: string
    sum: string
    transferTypeName: string
    currencyCode: string
    time: string
    remitterCardNumber: string
    name: string
    purpose: string
}

export interface TransferOrdersItem {
    dataLength: number
    date: string
    orders: Array<OrderItem>
}
