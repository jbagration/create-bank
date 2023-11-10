import { ComponentMeta, ComponentStory } from '@storybook/react'

import { NotificationForm } from './NotificationsForm'

export default {
    title: 'UI-components/organisms/UserAccountWindow/UserAccountTabs/Notifications/NotificationsForm',
    component: NotificationForm,
    args: {
        email: 'madeline.webb@example.com',
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=1483%3A27562&t=gDok5FL7UxKJk6iD-4',
        },
    },
} as ComponentMeta<typeof NotificationForm>

const Template: ComponentStory<typeof NotificationForm> = (args) => (
    <NotificationForm {...args} />
)

export const Default = Template.bind({})
