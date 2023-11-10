import { Dispatch, FC, SetStateAction } from 'react'
import { useFormContext } from 'react-hook-form'

import { ApplyForDepositSwitch } from './ApplyForDepositSwitch'

interface ApplyForDepositSwitchGroupProps {
    isAutoRenewalActive: [boolean, Dispatch<SetStateAction<boolean>>]
    isCapitalizationActive: [boolean, Dispatch<SetStateAction<boolean>>]
}

export const ApplyForDepositSwitchGroup: FC<
    ApplyForDepositSwitchGroupProps
> = ({ isAutoRenewalActive, isCapitalizationActive }) => {
    const { watch } = useFormContext()
    const cardName = watch('cardName')

    const [isRenewal, setIsRenewal] = isAutoRenewalActive
    const [isCapitalization, setIsCapitalization] = isCapitalizationActive

    return (
        <>
            <ApplyForDepositSwitch
                textPrimary="Продлевать автоматически"
                textSecondary="По истечении срока"
                checked={isRenewal}
                setChecked={setIsRenewal}
            />

            <ApplyForDepositSwitch
                textPrimary="Капитализация"
                textSecondary={
                    isCapitalization
                        ? 'Доход оставлять на вкладе'
                        : `Доход от вклада будет зачислен на счет ${cardName}`
                }
                checked={isCapitalization}
                setChecked={setIsCapitalization}
            />
        </>
    )
}
