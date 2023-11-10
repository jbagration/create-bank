import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BlockCardWindow } from './BlockCardWindow'

export default {
    title: 'UI-components/organisms/MyCards/BlockCardWindow/BlockCardWindow',
    component: BlockCardWindow,
    args: {
        cardId: '594f5dd8-cd03-4c43-b54d-622edfe48650',
        cardStatus: 'EXPIRED',
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=6570%3A67964&t=6O69MFC0DW9gMAjh-4',
        },
    },
} as ComponentMeta<typeof BlockCardWindow>

const Template: ComponentStory<typeof BlockCardWindow> = (args) => (
    <BlockCardWindow {...args} />
)

export const Default = Template.bind({})
