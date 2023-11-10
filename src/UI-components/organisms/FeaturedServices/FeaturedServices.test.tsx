import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import { render, screen } from '@testing-library/react'

import { store } from '../../../redux/store'
import { lightTheme } from '../../../themes/styleConfig'

import { FeaturedServices } from './FeaturedServices'

test('snapshot featured services', () => {
    render(
        <Provider store={store}>
            <ThemeProvider theme={lightTheme}>
                <FeaturedServices />
            </ThemeProvider>
        </Provider>
    )

    expect(screen.getByTestId('featured')).toMatchSnapshot()
})
