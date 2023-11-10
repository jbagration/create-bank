import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { state } from 'src/mocks'
import { ThemeProvider } from '@mui/material'
import { render, screen } from '@testing-library/react'

import { store } from '../../../redux/store'
import { lightTheme } from '../../../themes/styleConfig'

import { OrderCardInfo } from './OrderCardInfo'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        cardId: '6567',
    }),
}))

test('OrderCardInfo', async () => {
    render(
        <Provider store={store}>
            <ThemeProvider theme={lightTheme}>
                <MemoryRouter initialEntries={[{ state }]}>
                    <OrderCardInfo />
                </MemoryRouter>
            </ThemeProvider>
        </Provider>
    )

    expect(screen.getByText('0.6% на все покупки в месяц')).toBeInTheDocument()
    expect(screen.getByText(/Я ознакомлен\/-а/i)).toBeInTheDocument()
})
