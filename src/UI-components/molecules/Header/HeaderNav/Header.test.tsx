import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { authState } from 'src/mocks'
import { authReducer, login } from 'src/redux/slices/auth'
import { store } from 'src/redux/store'
import { provideTheme } from 'src/utils'
import { fireEvent, render, screen } from '@testing-library/react'

import { Header } from '../Header'
import { renderwithRedux } from '../renderWithRedux'

import { HeaderNav } from './HeaderNav'

/*eslint-disable*/

describe('Header component', () => {
    it('renders', () => {
        render(
            <Provider store={store}>
                <Router>{provideTheme(<Header />)}</Router>
            </Provider>
        )

        expect(screen.getByRole('banner')).toBeInTheDocument()
    })
    it('checking links', () => {
        render(
            <Provider store={store}>
                <Router>{provideTheme(<Header main={false} />)}</Router>
            </Provider>
        )

        expect(screen.getByTestId('login-link')).toHaveAttribute(
            'href',
            '/user_main'
        )
        expect(screen.getByTestId('/bank_branch-link')).toHaveAttribute(
            'href',
            '/bank_branch'
        )
        expect(screen.getByTestId('/exchange_rate-link')).toHaveAttribute(
            'href',
            '/exchange_rate'
        )
        expect(screen.getByTestId('/contact-link')).toHaveAttribute(
            'href',
            '/contact'
        )
    })
    it('checking links when the user is logged in + logout', () => {
        renderwithRedux(<Router>{provideTheme(<HeaderNav />)}</Router>, {
            preloadedState: {
                auth: authState,
            },
        })
        expect(
            screen.getByTestId('/user_main/user_profile-link')
        ).toHaveAttribute('href', '/user_main/user_profile')

        const logoutLink = screen.getByText('Выйти')
        expect(logoutLink).toBeInTheDocument()
        fireEvent.click(logoutLink)
        expect(
            screen.queryByTestId('/user_profile-link')
        ).not.toBeInTheDocument()
        expect(logoutLink).not.toBeInTheDocument()
    })
    it('action login', () => {
        // authReducer({ isAuthenticated: false, user: null }, login())
        const initialState = {
            isAuthenticated: false,
            user: null,
            isFetchError: false,
            clientId: '123123132',
        }
        const action = login('123123132')
        const state = authReducer(initialState, action)
        expect(state).toEqual({ isAuthenticated: true, user: null })
        render(
            <Provider store={store}>
                <Router>{provideTheme(<HeaderNav />)}</Router>
            </Provider>
        )
    })

    it('style links Header main', () => {
        renderwithRedux(
            <Router>{provideTheme(<Header main={true} />)}</Router>,
            {
                preloadedState: {
                    auth: authState,
                },
            }
        )
        const links = screen.getAllByRole('link')

        expect(links[1]).toHaveAttribute('color', '#FFFFFF') // /bank_branch
        expect(links[2]).toHaveAttribute('color', '#FFFFFF') // /exchange_rate
        expect(links[3]).toHaveAttribute('color', '#FFFFFF') // /contact
        expect(links[4]).toHaveAttribute('color', '#FFFFFF') // /user_profile
        expect(links[5]).toHaveAttribute('color', '#FFFFFF') // logout
    })
    it('style links Header not main', () => {
        renderwithRedux(
            <Router>{provideTheme(<Header main={false} />)}</Router>,
            {
                preloadedState: {
                    auth: authState,
                },
            }
        )

        const links = screen.getAllByRole('link')

        expect(links[1]).toHaveAttribute('color', '#212529')
        expect(links[2]).toHaveAttribute('color', '#212529')
        expect(links[3]).toHaveAttribute('color', '#212529')
        expect(links[4]).toHaveAttribute('color', '#212529')
        expect(links[5]).toHaveAttribute('color', '#212529')
        fireEvent.click(links[1])

        expect(links[1]).toHaveClass('active')
        expect(links[2]).not.toHaveClass('active')
    })
})
