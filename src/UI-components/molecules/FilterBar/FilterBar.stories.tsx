import { ComponentMeta, ComponentStory } from '@storybook/react'

import { FiltersBar } from './FiltersBar'

export default {
    title: 'UI-components/molecules/FiltersBar',
    component: FiltersBar,
    args: {
        city: 'Moscow',
        setShow: () => null,
    },
} as ComponentMeta<typeof FiltersBar>

const Template: ComponentStory<typeof FiltersBar> = (args) => (
    <FiltersBar {...args} />
)

export const Default = Template.bind({})
