import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import { render, screen } from '@testing-library/react'

import { store } from '../../../../redux/store'
import { lightTheme } from '../../../../themes/styleConfig'

import { ManageTab } from './ManageTab'

test('Tab manage correct ui display', () => {
    const cardId = '9185ff31-310e-43a2-b20d-a52d2c5ef02d'
    const cardNumber = '5432432345325323'

    render(
        <Provider store={store}>
            <ThemeProvider theme={lightTheme}>
                <ManageTab
                    cardId={cardId}
                    cardNumber={cardNumber}
                    cardStatus="ACTIVE"
                    cardType="depositCard"
                />
            </ThemeProvider>
        </Provider>
    )

    expect(screen.getByText(/блокировать/i)).toBeInTheDocument()
    expect(screen.getByText(/Лимит транзакции/i)).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(
        screen.getByRole('checkbox', { name: /активна/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /принять/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /отмена/i })).toBeInTheDocument()
})
