import { provideTheme } from 'src/utils'
import { render, screen } from '@testing-library/react'

import { HiddingCardNumber } from './HiddingCardNumber'

describe('CreditItem ui', () => {
    it('correct display props', () => {
        const { rerender } = render(
            provideTheme(<HiddingCardNumber cardNumber="" />)
        )

        expect(screen.getAllByTestId('hidding-card-number').length).toBe(3)

        rerender(provideTheme(<HiddingCardNumber cardNumber="" start />))

        expect(screen.getAllByTestId('hidding-card-number').length).toBe(2)
    })
})
