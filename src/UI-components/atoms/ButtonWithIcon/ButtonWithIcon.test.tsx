import { provideTheme } from 'src/utils'
import { render, screen } from '@testing-library/react'

import { ButtonWithIcon } from './ButtonWithIcon'

test('Button styles', () => {
    const { rerender } = render(provideTheme(<ButtonWithIcon yellowLight />))

    expect(screen.getByTestId('button-item')).toHaveStyle('background: #FFF176')

    rerender(provideTheme(<ButtonWithIcon transparent />))

    expect(screen.getByTestId('button-item')).toHaveStyle(
        'background: transparent'
    )
})
