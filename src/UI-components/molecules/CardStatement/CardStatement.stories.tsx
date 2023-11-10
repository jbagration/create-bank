import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CardStatement } from './CardStatement'

export default {
    title: 'UI-components/molecules/CardStatement',
    component: CardStatement,
    args: {},
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=7744%3A73921&t=wWxykGRSbzhTsSXy-4',
        },
    },
} as ComponentMeta<typeof CardStatement>

const Template: ComponentStory<typeof CardStatement> = (args) => (
    <CardStatement {...args} />
)

export const Default = Template.bind({})
