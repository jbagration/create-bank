import { FC, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { textMainStyles } from 'src/common/common.styles'
import { formatNumber } from 'src/utils'
import { Box, Grid } from '@mui/material'

import { CreditItemInfoContainer } from '../../CreditCardItemInfo/CreditItemInfoContainer'
import { CreditDetailsWrapper } from '../CreditDetailsWrapper'

import { CreditDetailButton } from './CreditDetailButton'
import { CreditDetailCell } from './CreditDetailCell'
import { CreditDetailName } from './CreditDetailName'
import { getCreditDurationInMonths } from './CreditDetailsItem.utils'

import { CreditDetailsProps } from './CreditDetailsItem.type'

export const CreditDetailsItem: FC<CreditDetailsProps> = ({
    name = 'Credit name',
    terminationDate,
    agreementDate,
    creditLimit,
    first,
    last,
    index,
    maxWidth,
    maxWidthBorder = '618px',
    creditId,
}) => {
    const { state: stateCreditId } = useLocation()
    const scrollRef = useRef<HTMLInputElement | null>(null)

    const [open, setOpen] = useState(stateCreditId === creditId)

    const creditMonth = getCreditDurationInMonths(
        terminationDate,
        agreementDate
    )

    const handleClick = () => {
        setOpen((prevState) => !prevState)
    }

    useEffect(() => {
        if (stateCreditId === creditId) {
            scrollRef.current?.scrollIntoView()
        }
    }, [creditId, stateCreditId])

    return (
        <>
            <Box
                ref={scrollRef}
                maxWidth={maxWidthBorder}
                data-testid="detail-wrapper"
                sx={textMainStyles}
            >
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
                    >
                        <Grid item xs={4} paddingLeft={0}>
                            <CreditDetailName
                                name={name}
                                text={`${creditMonth}`}
                                position={index}
                            />
                        </Grid>

                        <Grid item xs={4} textAlign="center">
                            <CreditDetailCell
                                title={`${formatNumber(
                                    Number(creditLimit)
                                )} руб.`}
                            />
                        </Grid>

                        <Grid item xs={4} textAlign="center">
                            <CreditDetailButton
                                open={open}
                                handleClick={handleClick}
                                text="Показать больше"
                            />
                        </Grid>
                    </Grid>
                </CreditDetailsWrapper>
            </Box>

            {open && (
                <Box pt={10} pb={10} sx={textMainStyles}>
                    <CreditItemInfoContainer
                        id={creditId}
                        open={open}
                        loanPeriod={creditMonth}
                    />
                </Box>
            )}
        </>
    )
}
