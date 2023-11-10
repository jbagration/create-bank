import { FC, memo } from 'react'

import { BGBox } from '../UI-components/atoms/BGBox'
import { Copyright } from '../UI-components/atoms/Copyright'
import { Header } from '../UI-components/molecules/Header/Header'
import { LoginFormModal } from '../UI-components/molecules/LoginFormModal'
import { StoreLinkBox } from '../UI-components/molecules/StoreLinkBox'
import { Page } from '../UI-components/organisms/PageComponent/Page'

export const SignInPage: FC = memo(() => {
    return (
        <Page>
            <BGBox>
                <Header main />
                <LoginFormModal title="Вход" show />
                <StoreLinkBox isMinified title="Мобильное приложение" />
                <Copyright />
            </BGBox>
        </Page>
    )
})
