import { provideTheme } from 'src/utils'
import { render, screen } from '@testing-library/react'

import { Pagination } from './Pagination'

describe('Pagination ui', () => {
    it('correct display props', () => {
        render(
            provideTheme(
                <Pagination
                    count={3}
                    setCount={() => {}}
                    dataLength={3}
                    error
                    size={3}
                />
            )
        )

        expect(screen.getByTestId('arrow-next')).toBeInTheDocument()
        expect(screen.getByTestId('arrow-prew')).toBeInTheDocument()
        expect(screen.getByTestId('arrow-next')).toHaveProperty(
            'disabled',
            true
        )
    })
})
