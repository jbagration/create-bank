import React, { FC } from 'react'

import { ClipboardComponent } from '../../ClipboardComponent/ClipboardComponent'

import type { ValueCreditTableProps } from './CreditTable.type'
import { GridItem } from './GridItem'

export const RightFields: FC<ValueCreditTableProps> = ({
    index,
    keysTableDetails,
    title,
    type,
    textVariantR,
    head,
}) => {
    return (
        <>
            {type === 'default' && (
                <GridItem
                    textVariantR={textVariantR}
                    textBold
                    key={keysTableDetails[0]}
                    size={6}
                    title={title}
                    rightTop={!head && index === 0 ? '6' : '0'}
                    rightBottom={
                        index === keysTableDetails.length - 1 ? '6' : '0'
                    }
                    bottomBorder={index === keysTableDetails.length - 1}
                />
            )}
            {type === 'card' && (
                <ClipboardComponent
                    title={title}
                    subtitle=""
                    copy={index >= 3}
                    rightTop={index === 0 ? '6' : '0'}
                    rightBottom={
                        index === keysTableDetails.length - 1 ? '6' : '0'
                    }
                    bottomBorder={index === keysTableDetails.length - 1}
                    size={6}
                    padding="46px 40px"
                    flex
                />
            )}
        </>
    )
}
