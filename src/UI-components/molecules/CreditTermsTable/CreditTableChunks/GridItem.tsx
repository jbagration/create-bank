import { FC } from 'react'

import { CreditDetailsWrapper } from '../../../../components/Loans/ApplyForm/CreditDetailsWrapper/CreditDetailsWrapper'

import { GridItemTitle } from './GridItemTitle/GridItemTitle'
import type { GridItemProp } from './CreditTable.type'

export const GridItem: FC<GridItemProp> = ({
    title,
    size = 5,
    leftTop = '0',
    rightTop = '0',
    leftBottom = '0',
    rightBottom = '0',
    bottomBorder = false,
    rightBorder = true,
    textBold,
    textVariantL,
    textVariantR,
    getLinkByTitle,
    notImplemented = false,
    handleStubModalOpen,
}) => {
    return (
        <CreditDetailsWrapper
            bottomBorder={bottomBorder}
            rightBorder={rightBorder}
            leftTop={leftTop}
            rightTop={rightTop}
            leftBottom={leftBottom}
            rightBottom={rightBottom}
            size={size}
            padding="46px 40px"
            flex
        >
            <GridItemTitle
                textBold={textBold}
                textVariantL={textVariantL}
                textVariantR={textVariantR}
                title={title}
                getLinkByTitle={getLinkByTitle}
                notImplemented={notImplemented}
                handleStubModalOpen={handleStubModalOpen}
            />
        </CreditDetailsWrapper>
    )
}
