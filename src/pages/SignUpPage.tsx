import React, { FC } from 'react'

import { BGBox } from '../UI-components/atoms/BGBox'
import { Copyright } from '../UI-components/atoms/Copyright'
import { RegistrationModal } from '../UI-components/molecules/Modal/RegistrationModal'
import { StoreLinkBox } from '../UI-components/molecules/StoreLinkBox'

export const SignUpPage: FC = () => {
    return (
        <BGBox>
            <RegistrationModal />
            <StoreLinkBox isMinified title="Мобильное приложение" />
            <Copyright />
        </BGBox>
    )
}
