import type { LinksByTitle } from '../../DepositTable/DepositTable.type'
import type { GridItemProp } from '../CreditTable.type'

export type GridItemTitleStylesProps = Pick<GridItemProp, 'textBold'>

export type GridItemTitleProps = Pick<
    GridItemProp,
    'textVariantL' | 'textVariantR' | 'textBold'
> & {
    title: string
    getLinkByTitle?: LinksByTitle
    notImplemented?: boolean
    handleStubModalOpen?: () => void
}
