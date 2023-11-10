import { BrowserRouter as Router } from 'react-router-dom'
import { authState } from 'src/mocks'
import { MainMenu } from 'src/pages'
import { renderwithRedux } from 'src/UI-components/molecules/Header/renderWithRedux'
import { provideTheme } from 'src/utils'
import { fireEvent, screen } from '@testing-library/react'

test('tabs work correctly', () => {
    renderwithRedux(<Router>{provideTheme(<MainMenu />)}</Router>, {
        preloadedState: {
            auth: authState,
        },
    })

    const links = screen.getAllByTestId('item-link')

    fireEvent.click(links[0])
    expect(screen.getByTestId('main-page')).toBeInTheDocument()
    expect(screen.getByText('Мои карты')).toBeInTheDocument()
    expect(screen.getByText('История операций')).toBeInTheDocument()

    fireEvent.click(links[2])

    const sublinks = screen.getAllByTestId('item-sublink')
    fireEvent.click(sublinks[0])
    expect(screen.getByTestId('loans-page')).toBeInTheDocument()
})
