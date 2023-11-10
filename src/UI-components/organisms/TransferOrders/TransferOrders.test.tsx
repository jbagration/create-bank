import { Provider } from 'react-redux'
import { transferOrders as data } from 'src/mocks'
import { ThemeProvider } from '@mui/material'
import { render, screen } from '@testing-library/react'

import { store } from '../../../redux/store'
import { lightTheme } from '../../../themes/styleConfig'

import { TransferOrders } from './TransferOrders'

describe('Transfer orders ui', () => {
    it('correct props conversion', () => {
        render(
            <Provider store={store}>
                <ThemeProvider theme={lightTheme}>
                    <TransferOrders
                        dataLength={3}
                        date=""
                        orders={data}
                        setSize={() => {}}
                    />
                </ThemeProvider>
            </Provider>
        )

        expect(screen.getByText('00:00')).toBeInTheDocument()
        expect(screen.getByText('Между своими картами')).toBeInTheDocument()
        expect(screen.getByText('100000 RUB')).toBeInTheDocument()
    })
})
