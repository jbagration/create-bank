import { provideTheme } from 'src/utils'
import { render, screen } from '@testing-library/react'

import { ItemCard } from './ItemCard'

describe('CreditItem ui', () => {
    it('correct display props', () => {
        render(
            provideTheme(
                <ItemCard
                    cardBalance={333}
                    cardNumber=""
                    cardName=""
                    currencyCode=""
                    expirationDate=""
                    paymentSystem="VISA"
                />
            )
        )

        expect(screen.getByText('Visa.svg')).toBeInTheDocument()
        expect(screen.getByText('3000 RUB')).toBeInTheDocument()
        expect(screen.getByText('06/24')).toBeInTheDocument()
        expect(screen.getByText('Social')).toBeInTheDocument()
    })
})
