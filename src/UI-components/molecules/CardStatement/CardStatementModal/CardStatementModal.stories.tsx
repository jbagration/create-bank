import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CardStatementModalContent } from './CardStatementModalContent'

import { socials } from './CardStatementModal.const'

export default {
    title: 'UI-components/molecules/CardStatement/CardStatementModal/CardStatementModalContent',
    component: CardStatementModalContent,
    args: {
        content: socials,
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=6570%3A63876&t=wWxykGRSbzhTsSXy-4',
        },
    },
} as ComponentMeta<typeof CardStatementModalContent>

const Template: ComponentStory<typeof CardStatementModalContent> = (args) => (
    <CardStatementModalContent {...args} />
)

export const Default = Template.bind({})
