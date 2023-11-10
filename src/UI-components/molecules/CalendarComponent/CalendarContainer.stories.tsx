import { datesLastMonth } from 'src/UI-components/organisms'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CalendarContainer } from './CalendarContainer'

import { yearAgoISODate } from './CalendarContainer.const'

export default {
    title: 'UI-components/molecules/CalendarComponent/CalendarContainer',
    component: CalendarContainer,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=7748%3A74758&t=wWxykGRSbzhTsSXy-4',
        },
    },
} as ComponentMeta<typeof CalendarContainer>

const Template: ComponentStory<typeof CalendarContainer> = () => (
    <CalendarContainer
        cardCreationDate={yearAgoISODate}
        defaultDates={datesLastMonth}
        handleChange={() => {}}
    />
)

export const Default = Template.bind({})
