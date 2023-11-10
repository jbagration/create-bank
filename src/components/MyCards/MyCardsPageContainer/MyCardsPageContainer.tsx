import { useState } from 'react'

import { SkeletonCard } from '../../../UI-components/molecules/Skeleton'
import { MyCardsExpand } from '../../../UI-components/organisms/MyCards/MyCardsExpand/MyCardsExpand'
import { MyCardsWithText } from '../../../UI-components/organisms/MyCards/MyCardsWithText'

import { MyCardsPageContainerProps } from './MyCardsPageContainer.type'

export const MyCardsPageContainer = ({
    data,
    skeletonQuantity,
    initialCardsLimit,
}: MyCardsPageContainerProps) => {
    const [cardsLimit, setCardsLimit] = useState<number>(initialCardsLimit)

    return data ? (
        <>
            <MyCardsWithText cardsLimit={cardsLimit} myCards={data} />
            <MyCardsExpand
                data={data}
                cardsLimit={cardsLimit}
                setCardsLimit={setCardsLimit}
            />
        </>
    ) : (
        <SkeletonCard quantity={skeletonQuantity} isVertical />
    )
}
