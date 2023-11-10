import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import { render, screen } from '@testing-library/react'

import { store } from '../../../../redux/store'
import { lightTheme } from '../../../../themes/styleConfig'

import { CloseCardWindow } from './CloseCardWindow'

test('Close card window correct ui display', () => {
    render(
        <Provider store={store}>
            <ThemeProvider theme={lightTheme}>
                <CloseCardWindow
                    cardNumber="5432432345325323"
                    cardType="depositCard"
                    setModalState={() => {}}
                />
            </ThemeProvider>
        </Provider>
    )
    const btn = screen.getByRole('button', { name: /close/i })
    expect(
        screen.getByText(/Подтвердите, что хотите закрыть карту/i)
    ).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /отмена/i })).toBeInTheDocument()
    expect(screen.queryByText(/Карта успешно закрыта/i)).toBeNull()
})
