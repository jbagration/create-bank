import { provideTheme } from 'src/utils'
import { render, screen } from '@testing-library/react'

import { SliderCaption } from './SliderCaption'

describe('Slider caption', () => {
    it('correct date conversion', () => {
        render(provideTheme(<SliderCaption minValue={0} maxValue={10000} />))

        expect(screen.getByText('0')).toBeInTheDocument()
        expect(screen.getByText('10000')).toBeInTheDocument()
    })
})
