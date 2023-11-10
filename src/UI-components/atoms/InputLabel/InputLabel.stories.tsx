import { ComponentMeta, ComponentStory } from '@storybook/react'

import { InputLabel } from './InputLabel'

export default {
    title: 'UI-components/atoms/InputLabel',
    component: InputLabel,
    args: {
        largelabel: 'true',
        disabled: false,
        required: false,
        shrink: false,
        children: 'Enter your security question answer',
    },
} as ComponentMeta<typeof InputLabel>

const Template: ComponentStory<typeof InputLabel> = (args) => (
    <InputLabel {...args} />
)

export const Default = Template.bind({})
