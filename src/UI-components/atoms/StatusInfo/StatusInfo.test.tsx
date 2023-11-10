import { provideTheme } from 'src/utils'
import { render, screen } from '@testing-library/react'

import { StatusInfo } from './StatusInfo'

test('Statusinfo uses the correct styles depending on the props', () => {
    const { rerender } = render(provideTheme(<StatusInfo status="rejected" />))

    expect(screen.getByTestId('status-info')).toHaveStyle(
        'background:rgba(242, 69, 61, 0.2)'
    )

    rerender(provideTheme(<StatusInfo status="pending" />))

    expect(screen.getByTestId('status-info')).toHaveStyle(
        'background:rgba(255, 249, 196, 0.5)'
    )
})
