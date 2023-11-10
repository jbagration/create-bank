import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ManageTab } from './ManageTab'

export default {
    title: 'UI-components/organisms/MyCards/MyCardsManageTab/ManageTab',
    component: ManageTab,
    args: {
        cardId: '594f5dd8-cd03-4c43-b54d-622edfe48650',
        cardStatus: 'BLOCKED',
        limit: 2000,
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=6570%3A67737&t=6O69MFC0DW9gMAjh-4',
        },
    },
} as ComponentMeta<typeof ManageTab>

const Template: ComponentStory<typeof ManageTab> = (args) => (
    <ManageTab {...args} />
)

export const Default = Template.bind({})
