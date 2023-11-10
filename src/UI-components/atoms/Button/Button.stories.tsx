import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from './Button'

export default {
    title: 'UI-components/atoms/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'Click' },
        type: {
            type: 'string',
            description: 'Button type',
            defaultValue: 'button',
            options: ['button', 'submit'],
            control: {
                type: 'radio',
            },
        },
        buttonVariant: {
            type: 'string',
            description: 'Button buttonVariant',
            defaultValue: 'primary',
            options: ['primary', 'secondary'],
            control: {
                type: 'radio',
            },
        },

        size: {
            type: 'string',
            description: 'Button size',
            defaultValue: 'large',
            options: ['large', 'medium', 'small'],
            control: {
                type: 'radio',
            },
        },

        variant: {
            type: 'string',
            description: 'Button variant',
            defaultValue: 'contained',
            options: ['contained', 'text', 'outlined'],
            control: {
                type: 'radio',
            },
        },

        disabled: {
            type: 'boolean',
            description: 'Button disabled',
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
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=620%3A7366&t=R5QjJVFlnUFB6QGP-4',
        },
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (arg) => (
    <Button {...arg}>Apply</Button>
)

export const Small = Template.bind({})
Small.args = {
    type: 'submit',
    size: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
    type: 'submit',
    size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
    type: 'submit',
    size: 'large',
}
