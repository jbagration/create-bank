import { Provider } from 'react-redux'
import { response } from 'src/mocks'
import { ThemeProvider } from '@mui/material'
import { render, screen } from '@testing-library/react'

import { store } from '../../../redux/store'
import { lightTheme } from '../../../themes/styleConfig'

import { MyCards } from './MyCards'

test('Mycards', async () => {
    render(
        <Provider store={store}>
            <ThemeProvider theme={lightTheme}>
                <MyCards myCards={response} />
            </ThemeProvider>
        </Provider>
    )

    expect(screen.getAllByTestId('card-item')).toHaveLength(1)
    expect(screen.getByText('Medical')).toBeInTheDocument()
    expect(screen.getByText('228 RUB')).toBeInTheDocument()
    expect(screen.getByText('Visa.svg')).toBeInTheDocument()
})
