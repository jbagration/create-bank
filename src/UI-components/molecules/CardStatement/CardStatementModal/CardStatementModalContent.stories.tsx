import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CardStatementModal } from './CardStatementModal'

export default {
    title: 'UI-components/molecules/CardStatement/CardStatementModal/CardStatementModalContent',
    component: CardStatementModal,
    args: {
        showModal: true,
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=6570%3A63876&t=wWxykGRSbzhTsSXy-4',
        },
    },
} as ComponentMeta<typeof CardStatementModal>

const Template: ComponentStory<typeof CardStatementModal> = (args) => (
    <CardStatementModal {...args} />
)

export const Default = Template.bind({})
