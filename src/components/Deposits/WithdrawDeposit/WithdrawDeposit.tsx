import { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useGetDepositCards } from 'src/hooks/useGetDepositCards'
import { useAppSelector } from 'src/redux/hooks/redux'
import { LocationParams } from 'src/types/hooksTypes'
import { Caption } from 'src/UI-components/molecules'
import { MainMenuPage } from 'src/UI-components/organisms'
import { ratioToPercent } from 'src/utils'
import { Typography } from '@mui/material'

import { WithdrawDepositForm } from './WithdrawDepositForm'

import { depositAmountHeadingStyles } from './WithdrawDepositForm/WithdrawDepositForm.style'

import { WithdrawDepositState } from './WithdrawDeposit.type'

export const WithdrawDeposit: FC = () => {
    const {
        depositCards,
        cardsToExpand,
        setCardsLimit,
        cardsQuantity,
        cardsLimit,
        isSuccess,
    } = useGetDepositCards(3)
    const { state } = useLocation() as LocationParams<WithdrawDepositState>
    const rate = useAppSelector(
        (s) =>
            s.depositProducts.data.find((dep) => dep.isRevocable)
                ?.interestRateEarly
    )

    const [selectedCardIndex, setSelectedCardIndex] = useState<number>(0)

    useEffect(() => {
        if (depositCards.length > 0) {
            setSelectedCardIndex(0)
        }
    }, [depositCards])

    const mainMenuHeading = `Досрочное расторжение депозита ${state.productName}`
    const withdrawCaptionText = `Сумма процентного дохода по вашему депозиту будет пересчитана по ставке ${ratioToPercent(
        rate ?? 1,
        5
    )} % годовых`

    return (
        <MainMenuPage text={mainMenuHeading} backButton>
            <Caption info text={withdrawCaptionText} sx={{ mb: '28px' }} />

            <Typography sx={depositAmountHeadingStyles}>
                Сумма депозита
                <Typography component="span">
                    {state.balance} {state.currencyCode}
                </Typography>
            </Typography>
            <WithdrawDepositForm
                {...{
                    cards: depositCards,
                    cardsToExpand,
                    setCardsLimit,
                    cardsQuantity,
                    cardsLimit,
                    isSuccess,
                    agreementId: state.agreementId,
                    productName: state.productName,
                }}
                selectedCardIndex={selectedCardIndex}
                setSelectedCardIndex={setSelectedCardIndex}
            />
        </MainMenuPage>
    )
}
