export interface CreditTermsTableProps {
    keysTableDetails: string[]
    valueTableDetails: any
    head?: boolean
    dataTransform?: (data: any) => string[]
    type?: 'default' | 'card' | 'deposit'
    textVariantL?: 'body1' | 'strong1' | 'h5'
    textVariantR?: 'body1' | 'strong1' | 'h5'
    creditTable?: boolean
}
