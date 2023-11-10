import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Caption } from './Caption'

export default {
    title: 'UI-components/atoms/Caption',
    component: Caption,
    argTypes: {
        component: {
            type: 'boolean',
            description: 'to transfer children',
            defaultValue: false,
            options: [true, false],
            control: {
                type: 'radio',
            },
        },
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=15428%3A89911&t=2lL3cIedzJhtzxS9-4',
        },
    },
} as ComponentMeta<typeof Caption>

const Template: ComponentStory<typeof Caption> = (args) => <Caption {...args} />

export const Text = Template.bind({})
Text.args = {
    text: 'new text...',
}

export const WithChildrenComponent = Template.bind({})
WithChildrenComponent.args = {
    text: 'new text...',
    component: true,
    children: <div style={{ padding: '16px 32px' }}>new text</div>,
}
