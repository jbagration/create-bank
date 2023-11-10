import { CreditTermsTableProps } from '../CrediTermsTable.types'

import { LinksByTitle } from '../DepositTable/DepositTable.type'

type CreditTable = {
    index: number
    creditTable?: boolean
}

export type ValueCreditTableProps = Pick<
    CreditTermsTableProps,
    'type' | 'textVariantR' | 'textVariantL'
> &
    CreditTable & {
        keysTableDetails: string[]
        title: string
        head?: boolean
    }

export type KeysCreditTableProps = Pick<
    CreditTermsTableProps,
    'type' | 'textVariantR' | 'textVariantL'
> &
    CreditTable & {
        keysTableDetails: string[]
        title?: string
        head?: boolean
    }

export interface GridItemProp {
    title: string
    size?: number
    leftTop?: string
    rightTop?: string
    leftBottom?: string
    rightBottom?: string
    bottomBorder?: boolean
    rightBorder?: boolean
    textBold?: boolean
    textVariantL?: 'body1' | 'strong1' | 'h5'
    textVariantR?: 'body1' | 'strong1' | 'h5'
    getLinkByTitle?: LinksByTitle
    notImplemented?: boolean
    handleStubModalOpen?: () => void
}
