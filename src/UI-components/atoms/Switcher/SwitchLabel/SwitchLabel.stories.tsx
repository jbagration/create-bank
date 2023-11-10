import { ComponentMeta, ComponentStory } from '@storybook/react'

import { SwitchLabel } from './SwitchLabel'

export default {
    title: 'UI-components/atoms/Switcher/SwitchLabel',
    component: SwitchLabel,
    args: {
        isSwitchToggled: true,
    },
} as ComponentMeta<typeof SwitchLabel>

const Template: ComponentStory<typeof SwitchLabel> = (args) => (
    <SwitchLabel {...args} />
)

export const Default = Template.bind({})
