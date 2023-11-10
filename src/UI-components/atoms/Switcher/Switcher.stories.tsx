import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Switcher } from './Switcher'

export default {
    title: 'UI-components/atoms/Switcher/Switcher',
    component: Switcher,
    args: {
        handleClick: () => null,
        isDisabled: false,
        isToggled: false,
    },
} as ComponentMeta<typeof Switcher>

const Template: ComponentStory<typeof Switcher> = (args) => (
    <Switcher {...args} />
)

export const Default = Template.bind({})

export const Disabled = Template.bind({})
Disabled.args = {
    isDisabled: true,
}

export const Toggled = Template.bind({})
Toggled.args = {
    isToggled: true,
}
