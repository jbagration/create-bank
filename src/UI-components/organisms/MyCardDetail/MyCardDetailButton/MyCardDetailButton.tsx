import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'src/UI-components/atoms'

const DepositButton = () => {
    const navigate = useNavigate()
    const text = 'Перевести с карты на карту'
    return (
        <Button size="long" onClick={() => navigate('/transfers/card')}>
            {text}
        </Button>
    )
}

const LoanButton: FC<{ id?: string }> = ({ id }) => {
    const text = 'Информация о кредите'
    const navigate = useNavigate()
    return (
        <Button
            size="long"
            onClick={() => {
                navigate(`/user_main/credits`, { state: id })
            }}
        >
            {text}
        </Button>
    )
}

export const MyCardDetailButton: FC<{
    type: string | undefined
    id: string
}> = ({ type, id }) => {
    return type === 'depositCard' ? <DepositButton /> : <LoanButton id={id} />
}
