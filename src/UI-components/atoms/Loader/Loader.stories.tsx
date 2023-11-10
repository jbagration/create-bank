import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Loader } from './Loader'

export default {
    title: 'UI-components/atoms/Loader',
    component: Loader,
    args: {
        isLoading: true,
        size: '60px',
        children: <p>Done</p>,
    },
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Default = Template.bind({})
