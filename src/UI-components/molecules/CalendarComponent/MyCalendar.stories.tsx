import { ComponentMeta, ComponentStory } from '@storybook/react'

import { MyCalendar } from './MyCalendar'

export default {
    title: 'UI-components/molecules/CalendarComponent/MyCalendar',
    component: MyCalendar,
    args: {
        startDate: new Date('December 19, 2022 23:15:30'),
        endDate: new Date(),
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=7748%3A74758&t=wWxykGRSbzhTsSXy-4',
        },
    },
} as ComponentMeta<typeof MyCalendar>

const Template: ComponentStory<typeof MyCalendar> = (args) => (
    <MyCalendar {...args} />
)

export const Default = Template.bind({})
