import { FC, Fragment } from 'react'
import { MainMenuPage } from 'src/UI-components/organisms'

import { CreditListProps } from './CreditList.type'

export const CreditList: FC<CreditListProps> = ({ data, renderItem, text }) => {
    return (
        <MainMenuPage text={text}>
            {data
                .filter((credit) => credit.status !== 'APPROVED')
                .map((credit, index: number, array) => (
                    <Fragment key={credit.id}>
                        {credit.status !== 'APPROVED' &&
                            renderItem(credit, index, array)}
                    </Fragment>
                ))}
        </MainMenuPage>
    )
}
