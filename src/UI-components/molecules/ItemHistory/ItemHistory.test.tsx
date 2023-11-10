import { provideTheme } from 'src/utils'
import { render, screen } from '@testing-library/react'

import { ItemHistory } from './ItemHistory'

describe('History list item ui', () => {
    it('correct display props', () => {
        render(
            provideTheme(
                <ItemHistory
                    date=""
                    sum="10000"
                    transferTypeName="BETWEEN_CARDS"
                    currencyCode="RUB"
                    time="август 01, Понедельник"
                    remitterCardNumber="1111222233334444"
                    name="Ваня"
                    purpose="Перевод"
                />
            )
        )

        expect(screen.getByText('август 01, Понедельник')).toBeInTheDocument()
        expect(screen.getByText('Между своими картами')).toBeInTheDocument()
        expect(screen.getByText('*4444 Ваня')).toBeInTheDocument()
        expect(screen.getByText('-10000')).toBeInTheDocument()
    })
})
