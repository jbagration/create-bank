import React, { FC } from 'react'

import type { KeysCreditTableProps } from './CreditTable.type'
import { GridItem } from './GridItem'

export const LeftFields: FC<KeysCreditTableProps> = ({
    index,
    keysTableDetails,
    textVariantL,
    head,
}) => {
    return (
        <GridItem
            size={6}
            textVariantL={textVariantL}
            key={keysTableDetails[index]}
            title={keysTableDetails[index]}
            leftTop={!head && index === 0 ? '6' : '0'}
            rightBorder={false}
            leftBottom={index === keysTableDetails.length - 1 ? '6' : '0'}
            bottomBorder={index === keysTableDetails.length - 1}
        />
    )
}
