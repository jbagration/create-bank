import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Input } from './Input'

export default {
    title: 'UI-components/atoms/Input',
    component: Input,
    argTypes: {
        type: {
            type: 'string',
            description: 'Button type',
            defaultValue: 'text',
            options: ['password', 'tel', 'text', 'smsCode'],
            control: {
                type: 'radio',
            },
        },
        size: {
            type: 'string',
            description: 'Input size',
            defaultValue: 'long',
            options: ['long', 'short'],
            control: {
                type: 'radio',
            },
        },
        outlined: {
            type: 'string',
            description: 'Input outlined',
            defaultValue: 'false',
            options: ['true', 'false'],
            control: {
                type: 'radio',
            },
        },
        disabled: {
            type: 'boolean',
            description: 'Input disabled',
            defaultValue: false,
            options: [true, false],
            control: {
                type: 'radio',
            },
        },
        dropdown: {
            type: 'boolean',
            description: 'Input dropdown',
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
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=620%3A7668&t=R5QjJVFlnUFB6QGP-4',
        },
    },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (arg) => <Input {...arg} />

export const Long = Template.bind({})
Long.args = {
    placeholder: 'Name',
    size: 'long',
    name: 'test',
}

export const Short = Template.bind({})
Short.args = {
    placeholder: 'Name',
    size: 'short',
    name: 'test',
}

export const Outlined = Template.bind({})
Outlined.args = {
    outlined: 'true',
    placeholder: 'Name',
    size: 'short',
    name: 'test',
}

export const Autosize = Template.bind({})
Autosize.args = {
    autosize: 'true',
    placeholder: 'Name',
    size: 'short',
    name: 'test',
}

export const Smallheight = Template.bind({})
Smallheight.args = {
    smallHeight: 'true',
    placeholder: 'Name',
    size: 'short',
    name: 'test',
}

export const Dropdown = Template.bind({})
Dropdown.args = {
    dropdown: true,
    outlined: 'false',
    placeholder: 'Name',
    size: 'short',
    name: 'test2',
}

export const Label = Template.bind({})
Label.args = {
    label: 'Name',
    placeholder: 'Name',
    size: 'short',
    name: 'test2',
}

export const Staticlabel = Template.bind({})
Staticlabel.args = {
    staticLabel: 'Name',
    placeholder: 'Name',
    size: 'short',
    name: 'test2',
}

export const Helpertext = Template.bind({})
Helpertext.args = {
    helperText: 'Name',
    placeholder: 'Name',
    size: 'short',
    name: 'test2',
}

export const Error = Template.bind({})
Error.args = {
    placeholder: 'Name',
    size: 'short',
    name: 'test2',
    error: true,
}

Error.parameters = {
    design: {
        type: 'figspec',
        url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=620%3A7804&t=R5QjJVFlnUFB6QGP-4',
    },
}
