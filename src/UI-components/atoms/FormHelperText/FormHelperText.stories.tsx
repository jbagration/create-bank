import { ComponentMeta, ComponentStory } from '@storybook/react'

import { FormHelperText } from './FormHelperText'

export default {
    title: 'UI-components/atoms/FormHelperText',
    component: FormHelperText,
    args: {
        children: <p>Helper Text</p>,
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=620%3A7804&t=p2CzrUBdiyhEvvm0-4',
        },
    },
} as ComponentMeta<typeof FormHelperText>

const Template: ComponentStory<typeof FormHelperText> = (args) => (
    <FormHelperText {...args} />
)

export const Default = Template.bind({})
