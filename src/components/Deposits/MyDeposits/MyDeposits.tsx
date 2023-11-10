import { FC } from 'react'
import { MainMenuPage } from 'src/UI-components/organisms'

import { DepositDetailsItem } from './DepositDetailsItem'

import { DepositItem } from './MyDeposits.type'

interface MyDepositsProps {
    data: DepositItem[]
}

export const MyDeposits: FC<MyDepositsProps> = ({ data }) => {
    return (
        <MainMenuPage text="Мои Депозиты">
            {data.map((deposit, index, array) => (
                <DepositDetailsItem
                    first={index === 0}
                    last={index === array.length - 1}
                    index={index + 1}
                    key={deposit.agreementId}
                    {...deposit}
                />
            ))}
        </MainMenuPage>
    )
}
