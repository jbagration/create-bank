import { FC, useCallback, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import { useNewDebitCardOrderMutation } from '../../../../redux/api/cardsApi'
import { TabsWithContent } from '../../../atoms/Tabs'

import { ByPostTab } from './ByPostTab'
import { CardProductApplyModal } from './CardProductApplyModal'
import { PickPersonallyTabContainer } from './PickPersonallyTabContainer'

export const CardProductApply: FC = () => {
    const [createDebitCard] = useNewDebitCardOrderMutation()

    const location = useLocation()

    const accountNumber = location.state

    const { cardId } = useParams()

    const navigate = useNavigate()

    const [modalActive, setModalActive] = useState(false)
    const onClickActive = useCallback(() => {
        setModalActive(true)
    }, [])

    const handleCloseModal = useCallback(() => {
        setModalActive(false)
        navigate('/user_main/cards/my_cards')
    }, [navigate])

    return (
        <>
            <TabsWithContent
                small="true"
                padding={false}
                labels={['По почте', 'Забрать лично']}
            >
                <ByPostTab
                    showSuccessModal={onClickActive}
                    accountNumber={accountNumber}
                    productId={cardId}
                    createDebitCard={createDebitCard}
                />
                <PickPersonallyTabContainer
                    showSuccessModal={onClickActive}
                    accountNumber={accountNumber}
                    productId={cardId}
                    createDebitCard={createDebitCard}
                />
            </TabsWithContent>
            <CardProductApplyModal
                active={modalActive}
                onClose={handleCloseModal}
            />
        </>
    )
}
