import {
    ChangeEvent,
    Dispatch,
    FC,
    SetStateAction,
    useEffect,
    useState,
} from 'react'
import { useForm } from 'react-hook-form'
import { Preloader } from 'src/assets/svg'
import { useRevokeDepositMutation } from 'src/redux/api/depositsApi'
import { DepositCard } from 'src/types/MyCardsType'
import { Button } from 'src/UI-components/atoms'
import {
    FormHandler,
    ItemCard,
    RadioButtonHandler,
} from 'src/UI-components/molecules'
import { ConfirmModal } from 'src/UI-components/molecules/Modal/ConfirmModal/ConfirmModal'
import { DescriptionMyCard } from 'src/UI-components/organisms'
import {
    FormControlLabel,
    FormLabel,
    Grid,
    RadioGroup,
    Typography,
} from '@mui/material'

import { infoMessage, withdraw } from './WithdrawDepositForm.const'

import { expandListStyles, formLabelStyles } from './WithdrawDepositForm.style'

interface WithdrawDepositFormProps {
    cards: DepositCard[]
    cardsToExpand: number
    setCardsLimit: Dispatch<SetStateAction<number>>
    cardsQuantity: number
    cardsLimit: number
    isSuccess: boolean
    agreementId: string
    productName: string
    selectedCardIndex: number
    setSelectedCardIndex: (index: number) => void
}

export const WithdrawDepositForm: FC<WithdrawDepositFormProps> = ({
    cards,
    cardsToExpand,
    setCardsLimit,
    cardsQuantity,
    cardsLimit,
    isSuccess,
    agreementId,
    productName,
}) => {
    const [revokeDeposit, { isLoading }] = useRevokeDepositMutation()
    const [isOpen, setIsOpen] = useState(false)
    const [type, setType] = useState('info')
    const [cardNumber, setCardNumber] = useState('')

    useEffect(() => {
        if (!cardNumber && cards.length > 0) {
            setCardNumber(cards[0]?.cardNumber || '')
        }
    }, [cards])

    const successMessage = `Депозит ${productName} успешно отозван`

    const methods = useForm({
        mode: 'onChange',
    })

    const handleSubmitOpenModal = () => {
        setIsOpen(true)
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCardNumber((event.target as HTMLInputElement).value)
    }

    const handleExpandList = () => {
        setCardsLimit(cardsQuantity)
    }

    const handleSubmitWithdraw = () => {
        revokeDeposit({ agreementId, cardNumber })
            .unwrap()
            .then(() => {
                setType('done')
            })
            .catch(() => {
                setType('error')
            })
    }

    return (
        <>
            <FormHandler methods={methods} onSubmit={handleSubmitOpenModal}>
                <FormLabel sx={formLabelStyles}>
                    Выбрать карту для начисления средств со счета депозита
                </FormLabel>

                {!isSuccess && <Preloader />}

                {isSuccess && (
                    <>
                        <RadioGroup
                            value={cardNumber}
                            onChange={handleChange}
                            sx={{ mb: '24px' }}
                            defaultValue={cardNumber}
                        >
                            {cards.slice(0, cardsLimit).map((card) => (
                                <Grid
                                    container
                                    px={4.5}
                                    py={4}
                                    key={card.cardId}
                                >
                                    <FormControlLabel
                                        value={card.cardNumber}
                                        control={
                                            <RadioButtonHandler
                                                name={card.cardNumber || ''}
                                                value={card.cardNumber}
                                                sx={{ mr: '23px' }}
                                            />
                                        }
                                        label={undefined}
                                    />

                                    <ItemCard {...card} mini />
                                    <DescriptionMyCard {...card} mini />
                                </Grid>
                            ))}
                        </RadioGroup>

                        {cardsToExpand !== 0 && cardsLimit < cards.length && (
                            <Typography
                                sx={expandListStyles}
                                onClick={handleExpandList}
                            >
                                + {cardsToExpand} раскрыть
                            </Typography>
                        )}

                        <Button
                            buttonVariant="primary"
                            size="long"
                            type="submit"
                            variant="contained"
                        >
                            Отозвать депозит
                        </Button>
                    </>
                )}
            </FormHandler>

            <ConfirmModal
                infoMessage={infoMessage}
                successMessage={successMessage}
                handleSubmit={handleSubmitWithdraw}
                confirmButtonText={withdraw}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                type={type}
                setType={setType}
                isLoading={isLoading}
            />
        </>
    )
}
