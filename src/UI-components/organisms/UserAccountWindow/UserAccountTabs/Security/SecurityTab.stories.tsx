import { ComponentMeta, ComponentStory } from '@storybook/react'

import { SecurityTab } from './SecurityTab'

export default {
    title: 'UI-components/organisms/UserAccountWindow/UserAccountTabs/Security/SecurityTab',
    component: SecurityTab,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=1483%3A27095&t=gDok5FL7UxKJk6iD-4',
        },
    },
} as ComponentMeta<typeof SecurityTab>

const Template: ComponentStory<typeof SecurityTab> = () => <SecurityTab />

export const Default = Template.bind({})
