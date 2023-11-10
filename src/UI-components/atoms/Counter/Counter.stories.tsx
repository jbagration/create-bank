import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Counter } from './Counter'

export default {
    title: 'UI-components/atoms/Counter',
    component: Counter,
    args: {
        count: 10,
        countLimit: 20,
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=2231%3A58108&t=p2CzrUBdiyhEvvm0-4',
        },
    },
} as ComponentMeta<typeof Counter>

const Template: ComponentStory<typeof Counter> = (args) => <Counter {...args} />

export const Default = Template.bind({})
