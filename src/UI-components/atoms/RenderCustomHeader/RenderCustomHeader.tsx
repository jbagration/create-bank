import { FC } from 'react'
import { getYear } from 'date-fns'
import range from 'lodash/range'
import {
    Box,
    ClickAwayListener,
    Collapse,
    List,
    ListItem,
    ListItemText,
} from '@mui/material'

import {
    collapseStyles,
    listItemStyles,
    listStyles,
    renderCustomHeaderContainerStyles,
} from './RenderCustomHeader.styles'
import type { RenderCustomHeaderProps } from './RenderCustomHeader.type'

export const RenderCustomHeader: FC<RenderCustomHeaderProps> = ({
    monthDate,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
    changeYear,
    isOpen,
    onClose,
    onOpen,
}) => {
    const years = range(1970, getYear(new Date()) + 20, 1)

    const handleChange = (year: number) => () => {
        changeYear(year)
        onClose()
    }

    return (
        <Box sx={renderCustomHeaderContainerStyles}>
            <ClickAwayListener onClickAway={onClose}>
                <Box position="relative">
                    <span
                        className="react-datepicker__current-month"
                        onClick={onOpen}
                    >
                        {monthDate
                            .toLocaleString('ru', {
                                month: 'long',
                                year: 'numeric',
                            })
                            .slice(0, -3)}
                    </span>

                    <Collapse timeout={100} in={isOpen} sx={collapseStyles}>
                        <List sx={listStyles}>
                            {years.map((year) => {
                                return (
                                    <ListItem
                                        sx={listItemStyles({
                                            isChosen:
                                                year ===
                                                monthDate.getFullYear(),
                                        })}
                                        key={year}
                                        onClick={handleChange(year)}
                                    >
                                        <ListItemText>
                                            {year.toString()}
                                        </ListItemText>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Collapse>
                </Box>
            </ClickAwayListener>

            <Box sx={{ display: 'flex' }}>
                <button
                    type="button"
                    aria-label="Previous Month"
                    className="react-datepicker__navigation react-datepicker__navigation--previous"
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                >
                    <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--previous">
                        {'<'}
                    </span>
                </button>

                <button
                    type="button"
                    aria-label="Next Month"
                    className="react-datepicker__navigation react-datepicker__navigation--next"
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                >
                    <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--next">
                        {'>'}
                    </span>
                </button>
            </Box>
        </Box>
    )
}
