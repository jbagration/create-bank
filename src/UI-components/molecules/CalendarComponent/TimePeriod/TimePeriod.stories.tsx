import { ComponentMeta, ComponentStory } from '@storybook/react'

import { TimePeriod } from './TimePeriod'

export default {
    title: 'UI-components/molecules/CalendarComponent/TimePeriod',
    component: TimePeriod,
    args: {
        startDate: new Date('August 19, 1975 23:15:30'),
        endDate: new Date(),
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=7744%3A73940&t=wWxykGRSbzhTsSXy-4',
        },
    },
} as ComponentMeta<typeof TimePeriod>

const Template: ComponentStory<typeof TimePeriod> = (args) => (
    <TimePeriod {...args} />
)

export const Default = Template.bind({})
