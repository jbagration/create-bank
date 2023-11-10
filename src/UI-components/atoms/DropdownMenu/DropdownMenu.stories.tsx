import { useForm } from 'react-hook-form'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { FormHandler } from '../../molecules'

import { DropdownMenu } from './DropdownMenu'

export default {
    title: 'UI-components/atoms/DropdownMenu',
    component: DropdownMenu,
    argTypes: {
        size: {
            type: 'string',
            description: 'DropdownMenu size',
            defaultValue: 'long',
            options: ['long', 'short'],
            control: {
                type: 'radio',
            },
        },
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=620%3A7537&t=R5QjJVFlnUFB6QGP-4',
        },
    },
} as ComponentMeta<typeof DropdownMenu>

const Template: ComponentStory<typeof DropdownMenu> = (arg) => {
    const methods = useForm()

    return (
        <FormHandler methods={methods} formId="xxx">
            <DropdownMenu {...arg}>Apply</DropdownMenu>
        </FormHandler>
    )
}

export const Short = Template.bind({})
Short.args = {
    size: 'short',
    options: [
        { text: '1', divider: true },
        { text: '2', divider: true },
    ],
}

export const Long = Template.bind({})
Long.args = {
    size: 'long',
    options: [
        { text: '1', divider: true },
        { text: '2', divider: true },
    ],
}
