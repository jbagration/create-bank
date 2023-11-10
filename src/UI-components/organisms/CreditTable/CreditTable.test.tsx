import { provideTheme } from 'src/utils'
import { render, screen } from '@testing-library/react'

import { CreditTable } from './CreditTable'

describe('CreditRable info ui', () => {
    it('correct display props', () => {
        render(
            provideTheme(
                <CreditTable
                    accountNumber="222"
                    agreementNumber="111"
                    interestRate={0.5}
                    paymentInterest={100}
                    paymentPrincipal={5000}
                    principalDebt={3000}
                    creditLimit={100000}
                    loanPeriod="1 год (12 месяцев)"
                    interestDebt={500}
                />
            )
        )

        // должно быть именно в отформатированом формате валют
        expect(screen.getByText('8 333 руб.')).toBeInTheDocument()
        expect(screen.getByText('50%')).toBeInTheDocument()
    })
})
