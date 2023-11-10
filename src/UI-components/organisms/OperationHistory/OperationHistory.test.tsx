import { Provider } from 'react-redux'
import { operations } from 'src/mocks'
import { ThemeProvider } from '@mui/material'
import { render, screen } from '@testing-library/react'

import { store } from '../../../redux/store'
import { lightTheme } from '../../../themes/styleConfig'

import { OperationHistory } from './OperationHistory'

test('Operation history correct ui display', () => {
    render(
        <Provider store={store}>
            <ThemeProvider theme={lightTheme}>
                <OperationHistory
                    setSize={() => {}}
                    dataLength={3}
                    date=""
                    orders={operations}
                />
            </ThemeProvider>
        </Provider>
    )

    expect(screen.getByTestId('history')).toBeInTheDocument()
    expect(screen.getByText('*1111 Лена')).toBeInTheDocument()
    expect(screen.getByText('*1111 Антон')).toBeInTheDocument()
    expect(screen.getByText('14:08')).toBeInTheDocument()
    expect(screen.getByText('19:08')).toBeInTheDocument()
})
