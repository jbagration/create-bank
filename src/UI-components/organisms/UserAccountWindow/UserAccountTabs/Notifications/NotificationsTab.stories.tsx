import { ComponentMeta, ComponentStory } from '@storybook/react'

import { NotificationsTab } from './NotificationsTab'

export default {
    title: 'UI-components/organisms/UserAccountWindow/UserAccountTabs/Notifications/NotificationsTab',
    component: NotificationsTab,
    args: {
        labelPadding: true,
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=1483%3A27557&t=gDok5FL7UxKJk6iD-4',
        },
    },
} as ComponentMeta<typeof NotificationsTab>

const Template: ComponentStory<typeof NotificationsTab> = (args) => (
    <NotificationsTab {...args} />
)

export const Default = Template.bind({})
