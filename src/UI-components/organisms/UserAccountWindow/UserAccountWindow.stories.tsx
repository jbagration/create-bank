import { ComponentMeta, ComponentStory } from '@storybook/react'

import { UserAccountWindow } from './UserAccountWindow'

export default {
    title: 'UI-components/organisms/UserAccountWindow/UserAccountWindow',
    component: UserAccountWindow,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=1483%3A26742&t=gDok5FL7UxKJk6iD-4',
        },
    },
} as ComponentMeta<typeof UserAccountWindow>

const Template: ComponentStory<typeof UserAccountWindow> = () => (
    <UserAccountWindow />
)

export const Default = Template.bind({})
