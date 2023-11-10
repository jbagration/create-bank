export interface DepositTableProps {
    keysTableDetails: string[]
    amount?: string
    validity?: string
    data: string[]
}

export interface LinkFunc {
    (state?: { agreementId?: string }): string
}

export interface LinksByTitle {
    [key: string]: LinkFunc
}
