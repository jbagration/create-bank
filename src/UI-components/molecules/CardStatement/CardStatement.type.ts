import { MouseEventHandler } from 'react'
import {
    NewCreditCardId,
    NewDepositCardId,
    StatementDepositInfo,
} from 'src/types/MyCardsType'
import { SvgIconProps } from '@mui/material'

export interface CardStatementItemProps {
    icon: SvgIconProps
    text: string
    path?: string
    onClick?: MouseEventHandler<HTMLElement>
}

export interface CardStatementProps {
    showModal?: MouseEventHandler<HTMLElement>
    startDate: Date | null
    endDate: Date | null
    valueTableDetails?: NewCreditCardId | NewDepositCardId
}

export interface CardStatementTotalProps {
    balance: number
    operations: StatementDepositInfo[] | []
}

export interface CardStatementOperationsProps {
    operations: StatementDepositInfo[] | []
}
