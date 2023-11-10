import { ComponentMeta, ComponentStory } from '@storybook/react'

import { SuccessWindow } from './SuccessWindow'

export default {
    title: 'UI-components/organisms/MyCards/BlockCardWindow/SuccessWindow',
    component: SuccessWindow,
    args: {
        isBlocked: true,
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=6570%3A68091&t=6O69MFC0DW9gMAjh-4',
        },
    },
} as ComponentMeta<typeof SuccessWindow>

const Template: ComponentStory<typeof SuccessWindow> = (args) => (
    <SuccessWindow {...args} />
)

export const Default = Template.bind({})
