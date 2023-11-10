import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CardProductApply } from './CardProductApply'

export default {
    title: 'UI-components/organisms/CardProducts/CardProductApply/CardProductApply',
    component: CardProductApply,
    args: {},
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=14639%3A86471&t=jFuWPddW8nkJpiWg-4',
        },
    },
} as ComponentMeta<typeof CardProductApply>

const Template: ComponentStory<typeof CardProductApply> = (args) => (
    <CardProductApply {...args} />
)

export const Default = Template.bind({})
