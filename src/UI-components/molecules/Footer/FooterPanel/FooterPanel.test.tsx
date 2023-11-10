import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import { render, screen } from '@testing-library/react'

import { store } from '../../../../redux/store'
import { lightTheme } from '../../../../themes/styleConfig'

import { FooterPanel } from './FooterPanel'

test('footer ui', () => {
    render(
        <Provider store={store}>
            <ThemeProvider theme={lightTheme}>
                <FooterPanel />
            </ThemeProvider>
        </Provider>
    )

    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(screen.getAllByTestId('footer-item').length).toBe(3)
})
