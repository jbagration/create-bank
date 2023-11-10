import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BGBox } from '../../atoms/BGBox'
import { Copyright } from '../../atoms/Copyright'
import { LoginFormModal } from '../../molecules/LoginFormModal'
import { StoreLinkBox } from '../../molecules/StoreLinkBox'

import { Page } from './Page'

export default {
    title: 'UI-components/organisms/PageComponent',
    component: Page,
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = () => (
    <Page>
        <BGBox>
            <LoginFormModal title="Вход" show />
            <StoreLinkBox isMinified title="Мобильное приложение" />
            <Copyright />
        </BGBox>
    </Page>
)

export const signInPage = Template.bind({})
