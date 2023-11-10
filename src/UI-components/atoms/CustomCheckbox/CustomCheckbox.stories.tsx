import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Checkbox } from './CustomCheckbox'

export default {
    title: 'UI-components/atoms/CustomCheckbox',
    component: Checkbox,
    args: {
        disabled: false,
        disableRipple: true,
    },
    argTypes: {
        onClick: { action: 'Click' },
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=620%3A7412&t=p2CzrUBdiyhEvvm0-4',
        },
    },
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
    <Checkbox {...args} />
)

export const Default = Template.bind({})
