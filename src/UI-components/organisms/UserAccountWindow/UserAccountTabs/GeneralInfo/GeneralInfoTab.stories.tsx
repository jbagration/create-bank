import { ComponentMeta, ComponentStory } from '@storybook/react'

import { GeneralInfoTab } from './GeneralInfoTab'

export default {
    title: 'UI-components/organisms/UserAccountWindow/UserAccountTabs/GeneralInfo/GeneralInfoTab',
    component: GeneralInfoTab,
    args: {
        labelPadding: true,
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=1483%3A26742&t=gDok5FL7UxKJk6iD-4',
        },
    },
} as ComponentMeta<typeof GeneralInfoTab>

const Template: ComponentStory<typeof GeneralInfoTab> = (args) => (
    <GeneralInfoTab {...args} />
)

export const Default = Template.bind({})
