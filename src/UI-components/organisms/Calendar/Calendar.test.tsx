import { provideTheme } from 'src/utils'
import { render, screen } from '@testing-library/react'

import { Calendar } from './Calendar'

describe('Calendar ui', () => {
    it('correct date display', () => {
        render(provideTheme(<Calendar date="2022-08-06" />))

        expect(screen.getByText('август')).toBeInTheDocument()
        expect(screen.getByText('2022')).toBeInTheDocument()
        expect(screen.getByText('август 2022')).toBeInTheDocument()
    })
})
