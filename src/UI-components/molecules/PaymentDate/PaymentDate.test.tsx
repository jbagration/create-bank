import { provideTheme } from 'src/utils'
import { render, screen } from '@testing-library/react'

import { PaymentDate } from './PaymentDate'

describe('Payment Date ui', () => {
    it('correct date conversion', () => {
        render(provideTheme(<PaymentDate paymentDate="2022-08-04" />))

        expect(screen.getByText('4')).toBeInTheDocument()
        expect(screen.getByText('августа')).toBeInTheDocument()
        expect(screen.getByText('2022')).toBeInTheDocument()
    })
})
