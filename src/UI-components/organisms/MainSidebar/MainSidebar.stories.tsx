import { ComponentMeta, ComponentStory } from '@storybook/react'

import { MainSidebar } from './MainSidebar'

export default {
    title: 'UI-components/organisms/MainSidebar',
    component: MainSidebar,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=4547%3A60529&t=6O69MFC0DW9gMAjh-4',
        },
    },
} as ComponentMeta<typeof MainSidebar>

const Template: ComponentStory<typeof MainSidebar> = (args) => (
    <MainSidebar {...args} />
)

export const Default = Template.bind({})
