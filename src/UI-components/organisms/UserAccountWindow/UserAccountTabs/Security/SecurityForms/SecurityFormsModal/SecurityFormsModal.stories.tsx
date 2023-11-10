import { ComponentMeta, ComponentStory } from '@storybook/react'

import { SecurityFormsModal } from './SecurityFormsModal'

export default {
    title: 'UI-components/organisms/UserAccountWindow/UserAccountTabs/Security/SecurityForms/SecurityFormsModal',
    component: SecurityFormsModal,
    args: {
        isOpen: true,
        error: false,
        message: `Secure question changed successfully`,
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=5002%3A65061&t=gDok5FL7UxKJk6iD-4',
        },
    },
} as ComponentMeta<typeof SecurityFormsModal>

const Template: ComponentStory<typeof SecurityFormsModal> = (args) => (
    <SecurityFormsModal {...args} />
)

export const Success = Template.bind({})

export const Error = Template.bind({})
Error.args = {
    error: true,
    message: `Application not accepted`,
}
Error.parameters = {
    design: {
        url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=5002%3A65071&t=gDok5FL7UxKJk6iD-4',
    },
}
