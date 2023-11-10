export interface DepositAccount {
    accountNumber: string
}

interface Product {
    idProduct: number
    accountNumber?: string
    shipping_method: 'TAKEPERSONALLY' | 'BYPOST'
}

export interface PersonalShipping extends Product {
    bankBranchId: string
}

export interface PostShipping extends Product {
    city: string
    address: string
}
