import { provideTheme } from 'src/utils'
import { render, screen } from '@testing-library/react'

import { Progress } from './Progress'

describe('Progress ui', () => {
    it('correct percent display', () => {
        render(provideTheme(<Progress redeemed={80} />))

        expect(screen.getByText('80%')).toBeInTheDocument()
    })
})
