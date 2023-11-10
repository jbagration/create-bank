import { provideTheme } from 'src/utils'
import { render, screen } from '@testing-library/react'

import { FooterItem } from './FooterItem'

test('display contactsPage', () => {
    const { rerender } = render(
        provideTheme(
            <FooterItem title="title" subtitle={[]} haveContacts={false} />
        )
    )

    expect(screen.queryByTestId('footer-contactsPage')).toBeNull()

    rerender(
        provideTheme(<FooterItem title="title" subtitle={[]} haveContacts />)
    )

    expect(screen.getByTestId('footer-contactsPage')).toBeInTheDocument()
})
