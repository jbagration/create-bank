import { FC, useState } from 'react'
import { format } from 'date-fns'
import { Link as RouterLink } from 'react-router-dom'
import { textMainStyles } from 'src/common/common.styles'
import { CreditItemContainer } from 'src/components/Loans/CreditCardItemInfo/CreditItemContainer'
import { formatNumber } from 'src/utils'
import { Box, Grid, Link } from '@mui/material'

import { CreditDetailsWrapper } from '../CreditDetailsWrapper'

import { CreditDetailButton } from './CreditDetailButton'
import { CreditDetailCell } from './CreditDetailCell'
import { CreditDetailName } from './CreditDetailName'

import { creditBtnStyles, gridColumnStyles } from './CreditDetailsItem.style'

import { CreditCardDetailsProps } from './CreditDetailsItem.type'

export const CreditCardDetailsItem: FC<CreditCardDetailsProps> = ({
    cardName = 'Credit name',
    first,
    last,
    index,
    cardBalance: balance = 0,
    maxWidth,
    maxWidthBorder = '100%',
    expirationDate = '',
    paymentSystem = '',
    cardId,
    accountNumber,
}) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen((prevState) => !prevState)
    }

    return (
        <>
            <Box maxWidth={maxWidthBorder} sx={textMainStyles}>
                <CreditDetailsWrapper
                    paddingSmall
                    leftTop={first ? '8' : '0'}
                    rightTop={first ? '8' : '0'}
                    leftBottom={last || open ? '8' : '0'}
                    rightBottom={last || open ? '8' : '0'}
                    bottomBorder={open || last}
                >
                    <Grid
                        container
                        maxWidth={maxWidth}
                        justifyContent="space-between"
                        columns={15}
                    >
                        <Grid item xs={3}>
                            <CreditDetailName
                                name={cardName}
                                text={format(
                                    new Date(expirationDate),
                                    'MM/yyyy'
                                )}
                                position={index}
                            />
                        </Grid>
                        <Grid item xs={3} textAlign="center">
                            <CreditDetailCell
                                title="Текущий баланс"
                                text={`${formatNumber(balance, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })} руб.`}
                            />
                        </Grid>
                        <Grid item xs={3} textAlign="center">
                            <CreditDetailCell
                                title="Номер счета"
                                text={accountNumber}
                            />
                        </Grid>
                        <Grid item xs={3} textAlign="center">
                            <CreditDetailCell
                                title="Платежная система"
                                text={paymentSystem}
                            />
                        </Grid>
                        <Grid item xs={3} sx={gridColumnStyles}>
                            <Link
                                component={RouterLink}
                                sx={creditBtnStyles}
                                to={`/user_main/cards/my_cards/credit/${cardId}`}
                                underline="hover"
                            >
                                Информация по карте
                            </Link>

                            <CreditDetailButton
                                open={open}
                                handleClick={handleClick}
                                text="Информация по кредиту"
                            />
                        </Grid>
                    </Grid>
                </CreditDetailsWrapper>
            </Box>

            {open && cardId && (
                <CreditItemContainer cardId={cardId} open={open} />
            )}
        </>
    )
}
