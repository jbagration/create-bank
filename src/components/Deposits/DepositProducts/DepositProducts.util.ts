import { DepositProductsType } from './DepositProducts.type'

export const filterProducts = (
    data?: DepositProductsType[]
): DepositProductsType[] => {
    const alreadyAdded = { revocable: 0, nonRevocable: 0 }
    const products = data?.filter((i) => {
        if (i.isRevocable) return alreadyAdded.revocable++ === 0
        return alreadyAdded.nonRevocable++ === 0
    })

    return products || []
}
