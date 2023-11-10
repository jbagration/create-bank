import { provideTheme } from 'src/utils'
import { render, screen } from '@testing-library/react'

import { FeaturedItem } from './FeaturedItem'

test('Featured services icon', () => {
    const { rerender } = render(
        provideTheme(<FeaturedItem operation="карта" />)
    )

    expect(screen.getByText('Cards.svg')).toBeInTheDocument()

    rerender(provideTheme(<FeaturedItem operation="телефон" />))

    expect(screen.getByTestId('PhoneIphoneIcon')).toBeInTheDocument()
})
