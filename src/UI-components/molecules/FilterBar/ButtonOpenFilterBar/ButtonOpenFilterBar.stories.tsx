import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ButtonOpenFilterBar } from './ButtonOpenFilterBar'

export default {
    title: 'UI-components/molecules/FilterBar/ButtonOpenFilterBar',
    component: ButtonOpenFilterBar,
    args: {},
} as ComponentMeta<typeof ButtonOpenFilterBar>

const Template: ComponentStory<typeof ButtonOpenFilterBar> = (args) => (
    <ButtonOpenFilterBar {...args} />
)

export const Default = Template.bind({})
