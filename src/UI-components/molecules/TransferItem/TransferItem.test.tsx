import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import { render, screen } from '@testing-library/react'

import { store } from '../../../redux/store'
import { lightTheme } from '../../../themes/styleConfig'

import { TransferItem } from './TransferItem'

describe('Transfer orders ui', () => {
    it('correct props conversion', () => {
        render(
            <Provider store={store}>
                <ThemeProvider theme={lightTheme}>
                    <TransferItem
                        transferOrderId="01"
                        sum="14400"
                        transferTypeName=""
                        currencyCode="RUB"
                        time="август 01, Понедельник"
                        remitterCardNumber="1111222233334444"
                        name="Лена"
                        purpose="Перевод"
                    />
                </ThemeProvider>
            </Provider>
        )

        expect(screen.getByText('август 01, Понедельник')).toBeInTheDocument()
        expect(screen.getByText('14400 RUB')).toBeInTheDocument()
        expect(screen.getByText('Перевод')).toBeInTheDocument()
    })
})
