import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Calendar } from './Calendar'

export default {
    title: 'UI-components/organisms/Calendar',
    component: Calendar,
    args: {
        date: '2022-01-01',
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=2281%3A76014&t=jFuWPddW8nkJpiWg-4',
        },
    },
} as ComponentMeta<typeof Calendar>

const Template: ComponentStory<typeof Calendar> = (args) => (
    <Calendar {...args} />
)

export const Default = Template.bind({})
