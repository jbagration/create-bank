import { provideTheme } from 'src/utils'
import { fireEvent, render, screen } from '@testing-library/react'

import { SearchField } from './SearchField'

describe('Search Field', () => {
    it('input working correct', () => {
        const onChange = jest.fn()
        render(provideTheme(<SearchField value="" onChange={onChange} />))

        const input = screen.getByPlaceholderText('Поиск')

        expect(screen.getByTestId('search')).toBeInTheDocument()
        expect(input).toHaveValue('')

        fireEvent.change(input, { target: { value: 'test' } })

        expect(input).toHaveValue('')
        expect(onChange).toBeCalledTimes(1)
    })
})
