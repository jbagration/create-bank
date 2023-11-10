import { FC, useState } from 'react'
import { DateInterval } from 'src/types/CommonTypes'
import {
    CalendarContainer,
    CardStatement,
    CardStatementModal,
    CreditTermsTable,
    getLast10Days,
} from 'src/UI-components/molecules'
import { Box } from '@mui/material'

import { dataTransform } from './MyCardTable.help'

import { KeysMyCardTable } from './MyCardTable.const'

import {
    cardStatementContainerStyles,
    creditTermsTableBoxStyles,
} from './MyCardsInfotab.style'

import { MyCardsInfoTabProps } from '../MyCards.type'

export const MyCardsInfotab: FC<MyCardsInfoTabProps> = ({ card }) => {
    const [show, setShow] = useState(false)
    const calendarDefaultDates = getLast10Days(card.creationDate || '')
    const [startDate, setStartDate] = useState<Date | null>(
        calendarDefaultDates.from
    )
    const [endDate, setEndDate] = useState<Date | null>(calendarDefaultDates.to)

    const handleChange = (date: DateInterval) => {
        setStartDate(date.from)
        setEndDate(date.to)
    }

    return (
        <>
            <Box sx={creditTermsTableBoxStyles}>
                <CreditTermsTable
                    type="card"
                    keysTableDetails={KeysMyCardTable}
                    valueTableDetails={card}
                    dataTransform={dataTransform}
                />
            </Box>
            <Box sx={cardStatementContainerStyles}>
                <CardStatement
                    showModal={() => setShow(true)}
                    startDate={startDate}
                    endDate={endDate}
                    valueTableDetails={card}
                />
                <CardStatementModal
                    showModal={show}
                    closeModal={() => setShow(false)}
                />
                <CalendarContainer
                    cardCreationDate={card.creationDate || '0'}
                    handleChange={handleChange}
                    defaultDates={{ from: startDate, to: endDate }}
                />
            </Box>
        </>
    )
}
