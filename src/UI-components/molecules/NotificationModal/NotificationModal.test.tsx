import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { store } from 'src/redux/store'
import { provideTheme } from 'src/utils'
import { render, screen } from '@testing-library/react'

import { NotificationModal } from './NotificationModal'

describe('Notification Modal', () => {
    it('correct display when loading', () => {
        render(
            provideTheme(
                <Provider store={store}>
                    <MemoryRouter>
                        <NotificationModal isLoading open />
                    </MemoryRouter>
                </Provider>
            )
        )
        expect(screen.getByText('Spinner.svg')).toBeInTheDocument()
    })
    it('displayed correctly when receiving data', () => {
        render(
            provideTheme(
                <Provider store={store}>
                    <MemoryRouter>
                        <NotificationModal isLoading={false} open />
                    </MemoryRouter>
                </Provider>
            )
        )
        expect(screen.getByText('Done.svg')).toBeInTheDocument()
    })
    it('displayed correctly when receiving error', () => {
        render(
            provideTheme(
                <Provider store={store}>
                    <MemoryRouter>
                        <NotificationModal
                            isLoading={false}
                            open
                            type="error"
                        />
                    </MemoryRouter>
                </Provider>
            )
        )
        expect(screen.getByText('Close.svg')).toBeInTheDocument()
    })
})
