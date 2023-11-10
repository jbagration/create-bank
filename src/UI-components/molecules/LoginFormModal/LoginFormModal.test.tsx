import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { render, screen } from '@testing-library/react'

import { store } from '../../../redux/store'
import { lightTheme } from '../../../themes/styleConfig'

import { LoginFormModal } from './LoginFormModal'

describe('History list item ui', () => {
    it('correct display props', () => {
        render(
            <Provider store={store}>
                <ThemeProvider theme={lightTheme}>
                    <MemoryRouter>
                        <LoginFormModal title="Login" show />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        )

        expect(screen.getByTestId('form-wrapper')).toHaveStyle('width : 343px')
    })
})
