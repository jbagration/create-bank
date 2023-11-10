import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import { render, screen } from '@testing-library/react'

import { store } from '../../../../redux/store'
import { lightTheme } from '../../../../themes/styleConfig'

import { WrapperWithTitle } from './WrapperWithTitle'

test('display of title and content', () => {
    render(
        <Provider store={store}>
            <ThemeProvider theme={lightTheme}>
                <WrapperWithTitle title="title1">
                    <h2>Content</h2>
                </WrapperWithTitle>
            </ThemeProvider>
        </Provider>
    )

    expect(screen.getByText('title1')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
})
