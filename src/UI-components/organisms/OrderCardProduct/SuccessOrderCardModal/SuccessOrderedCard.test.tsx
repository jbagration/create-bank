import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import { fireEvent, render, screen } from '@testing-library/react'

import { store } from '../../../../redux/store'
import { lightTheme } from '../../../../themes/styleConfig'

import { SuccessOrderedCard } from './SuccessOrderedCard'

test('Order modal window correct ui display', () => {
    render(
        <Provider store={store}>
            <ThemeProvider theme={lightTheme}>
                <SuccessOrderedCard />
            </ThemeProvider>
        </Provider>
    )
    const btn = screen.getByRole('button', { name: /close/i })
    expect(screen.getByText(/поддержка карт/i)).toBeInTheDocument()
    expect(screen.getByText(/Международные звонки/i)).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.getByText(/поддержка карт/i)).toBeInTheDocument()
})
