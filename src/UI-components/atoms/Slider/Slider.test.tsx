import { provideTheme } from 'src/utils'
import { fireEvent, render, screen } from '@testing-library/react'

import { SliderComponent } from './Slider'

describe('Slider ui', () => {
    it('correct props conversion', () => {
        const setValue = jest.fn()

        render(
            provideTheme(
                <SliderComponent
                    name="amount"
                    value={250}
                    setValue={setValue}
                    max={500}
                    min={250}
                />
            )
        )

        const slider = screen.getByRole('slider')

        expect(slider).toBeInTheDocument()
        expect(slider).toHaveValue('250')

        fireEvent.change(slider, { target: { value: '300' } })
        expect(setValue).toBeCalled()
        expect(setValue).toBeCalledTimes(1)
    })
})
