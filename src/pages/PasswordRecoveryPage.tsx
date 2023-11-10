import { FC } from 'react'

import { BGBox } from '../UI-components/atoms/BGBox'
import { Copyright } from '../UI-components/atoms/Copyright'
import { Header } from '../UI-components/molecules'
import { PasswordRecoveryModal } from '../UI-components/molecules/PasswordRecoveryModal/PasswordRecoveryModal'
import { StoreLinkBox } from '../UI-components/molecules/StoreLinkBox'

export const PasswordRecoveryPage: FC = () => {
    return (
        <BGBox>
            <Header main />
            <PasswordRecoveryModal />
            <StoreLinkBox isMinified title="Мобильное приложение" />
            <Copyright />
        </BGBox>
    )
}
