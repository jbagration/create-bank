import { FC, useState } from 'react'
import ru from 'date-fns/locale/ru'
import DatePicker from 'react-datepicker'
import {
    calendarContainerStyles,
    myCalendarBoxStyles,
} from 'src/common/common.styles'
import { Box, Grid } from '@mui/material'

import { CreditDetailsWrapper } from '../../../components/Loans/ApplyForm/CreditDetailsWrapper/CreditDetailsWrapper'
import { RenderCustomHeader } from '../../atoms'
import { PaymentDate } from '../../molecules/PaymentDate/PaymentDate'

type Props = {
    date: string
    creditId?: string
}

export const Calendar: FC<Props> = ({ date, creditId }) => {
    const [value, setValue] = useState<Date | null>(new Date(date))

    const [isOpen, setOpen] = useState(false)

    const handleOpen = () => {
        isOpen ? setOpen(false) : setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Grid container>
            <Grid item md={6}>
                <CreditDetailsWrapper
                    containerHeight
                    leftTop="8"
                    leftBottom="8"
                    rightBorder={false}
                >
                    <PaymentDate paymentDate={date} creditId={creditId} />
                </CreditDetailsWrapper>
            </Grid>

            <Grid item md={6}>
                <CreditDetailsWrapper rightBottom="8" rightTop="8">
                    <Box sx={calendarContainerStyles}>
                        <Box sx={myCalendarBoxStyles}>
                            <DatePicker
                                selected={value}
                                onSelect={(dateValue) => setValue(dateValue)}
                                onChange={(dateValue) => setValue(dateValue)}
                                inline
                                locale={ru}
                                renderCustomHeader={({
                                    monthDate,
                                    changeYear,
                                    nextMonthButtonDisabled,
                                    prevMonthButtonDisabled,
                                    increaseMonth,
                                    decreaseMonth,
                                }) => (
                                    <RenderCustomHeader
                                        onOpen={handleOpen}
                                        onClose={handleClose}
                                        monthDate={monthDate}
                                        decreaseMonth={decreaseMonth}
                                        increaseMonth={increaseMonth}
                                        prevMonthButtonDisabled={
                                            prevMonthButtonDisabled
                                        }
                                        nextMonthButtonDisabled={
                                            nextMonthButtonDisabled
                                        }
                                        changeYear={changeYear}
                                        isOpen={isOpen}
                                    />
                                )}
                                fixedHeight
                            />
                        </Box>
                    </Box>
                </CreditDetailsWrapper>
            </Grid>
        </Grid>
    )
}
