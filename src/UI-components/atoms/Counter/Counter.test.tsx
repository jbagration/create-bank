import { provideTheme } from 'src/utils'
import { render, screen } from '@testing-library/react'

import { Counter } from './Counter'

describe('Counter component UI', () => {
    it('renders counter component', () => {
        render(provideTheme(<Counter count={20} countLimit={50} />))

        expect(screen.getByText('50')).toBeInTheDocument()
        expect(screen.getByText('20')).toBeInTheDocument()
    })
})
