import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PasswordRecoveryModal } from '../../molecules'
import { StoreLinkBox } from '../../molecules/StoreLinkBox'

import { BGBox } from './BGBox'

export default {
    title: 'UI-components/atoms/BGBox',
    component: BGBox,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof BGBox>

const Template: ComponentStory<typeof BGBox> = (args) => (
    <BGBox {...args}>
        <PasswordRecoveryModal />
        <StoreLinkBox isMinified title="Мобильное приложение" />
    </BGBox>
)

export const PasswordRecoveryPage = Template.bind({})
