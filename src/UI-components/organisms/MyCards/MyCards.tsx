import { useNavigate } from 'react-router-dom'

import { CreditAndDepositCard, Type } from '../../../types/MyCardsType'
import { SliderArrow } from '../../atoms/SliderArrow'
import { ItemCard } from '../../molecules'
import { SliderSlick } from '../../molecules/SliderSlick/SliderSlick'

import { MyCardsProps } from './MyCards.type'

export const MyCards = ({ myCards }: MyCardsProps) => {
    const controller = '/user_main/cards/my_cards'
    const navigate = useNavigate()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        prevArrow: <SliderArrow direction="left" top="21px" right="60px" />,
        nextArrow: <SliderArrow direction="right" top="21px" right="20px" />,
    }

    const handleCardClick = (cardType: Type, cardId: string) => {
        const lowerCaseCardType = cardType.replace('Card', '').toLowerCase()
        if (cardType === 'creditCard' && cardId) {
            navigate(`${controller}/credit/${cardId}`)
        } else if (cardId) {
            navigate(`${controller}/${lowerCaseCardType}/${cardId}`)
        }
    }

    return (
        <SliderSlick settings={settings}>
            {myCards?.map((card: CreditAndDepositCard) => {
                const { type, cardId } = card
                const cardType: Type = type ?? 'depositCard'

                return (
                    <div
                        key={cardId}
                        onClick={() =>
                            cardId && handleCardClick(cardType, cardId)
                        }
                    >
                        <ItemCard {...card} />
                    </div>
                )
            })}
        </SliderSlick>
    )
}
