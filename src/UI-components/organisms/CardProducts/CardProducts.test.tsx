import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { data } from 'src/mocks'
import { store } from 'src/redux/store'
import { provideTheme } from 'src/utils'
import { render, screen } from '@testing-library/react'

import { CardProducts } from './CardProducts'

describe('Card pructs', () => {
    it('correct display props', () => {
        render(
            provideTheme(
                <MemoryRouter>
                    <Provider store={store}>
                        <CardProducts data={data} />
                    </Provider>
                </MemoryRouter>
            )
        )

        expect(screen.getAllByTestId('card-product').length).toBe(2)
        expect(screen.getByText('MasterCard.svg')).toBeInTheDocument()
        expect(screen.getByText('Mir.svg')).toBeInTheDocument()
        expect(screen.getByText('Кэшбэк - 100%')).toBeInTheDocument()
        expect(screen.getByText('Кэшбэк - 7%')).toBeInTheDocument()
        expect(
            screen.getByText('Премиальный статус - SOCIAL')
        ).toBeInTheDocument()
        expect(
            screen.getByText('Сервисное обслуживание - 50руб.')
        ).toBeInTheDocument()
    })
})
