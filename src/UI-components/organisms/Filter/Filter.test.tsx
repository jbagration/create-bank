import { provideTheme } from 'src/utils'
import { fireEvent, render, screen } from '@testing-library/react'

import { datesLastMonth } from '../TransferOrders'

import { FilterComponent } from './FilterComponent'
import { FilterForm } from './FilterForm'

describe('Filter form', () => {
    it('selects working correct', () => {
        render(
            provideTheme(
                <FilterForm
                    cards={[]}
                    filters={{
                        pageSize: 10,
                        purpose: '',
                        from: datesLastMonth.from.toISOString(),
                        to: datesLastMonth.to.toISOString(),
                        min_sum: 0,
                        max_sum: 100000,
                        type_name: '',
                        operationType: '',
                        pageNumber: 0,
                        cardNumber: '',
                    }}
                />
            )
        )

        const fields = screen.getAllByRole('textbox')
        expect(fields.length).toBe(5)

        const selects = screen.getAllByTestId('select')
        expect(selects).toHaveLength(10)

        fireEvent.click(selects[1])
        expect(screen.getAllByRole('textbox')[0]).toHaveValue('card1')
        fireEvent.click(selects[2])
        expect(screen.getAllByRole('textbox')[0]).toHaveValue('card2')
        fireEvent.click(selects[0])
        expect(screen.getAllByRole('textbox')[0]).toHaveValue(
            '**7678 Universal Card'
        )

        fireEvent.click(selects[4])
        expect(screen.getAllByRole('textbox')[1]).toHaveValue('Доход')
        fireEvent.click(selects[5])
        expect(screen.getAllByRole('textbox')[1]).toHaveValue('Расход')
        fireEvent.click(selects[3])
        expect(screen.getAllByRole('textbox')[1]).toHaveValue('Все транзакции')
    })

    it('сomponent ui', () => {
        const { rerender } = render(
            provideTheme(<FilterComponent open={false} setOpen={() => {}} />)
        )

        const icon = screen.getByTestId('filter-icon')

        expect(icon).toBeInTheDocument()
        expect(icon).toHaveStyle('transition: 0.5s ease 0s')
        expect(icon).toHaveStyle('background: rgb(238, 238, 238)')

        rerender(provideTheme(<FilterComponent open setOpen={() => {}} />))
        expect(screen.getByTestId('filter-icon')).toHaveStyle(
            'background: rgb(33, 37, 41)'
        )
    })
})
