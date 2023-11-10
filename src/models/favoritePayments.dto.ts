export interface FavoritePayment {
    transferOrderId: string
    sum: number
    transferTypeId: number
    transferTypeName: string
}

export interface FavoritePaymentInfo
    extends Pick<FavoritePayment, 'sum' | 'transferOrderId'> {
    purpose: string
    payeeId: string
    isFavorite: boolean
}
