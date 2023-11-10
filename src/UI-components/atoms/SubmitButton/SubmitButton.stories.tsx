import { ComponentMeta, ComponentStory } from '@storybook/react'

import { SubmitButton } from './SubmitButton'

export default {
    title: 'UI-components/atoms/SubmitButton',
    component: SubmitButton,
    args: {
        label: 'done',
        type: 'submit',
        size: 'medium',
        variant: 'contained',
    },
} as ComponentMeta<typeof SubmitButton>

const Template: ComponentStory<typeof SubmitButton> = (args) => (
    <SubmitButton {...args} />
)

export const Default = Template.bind({})
