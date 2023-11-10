import { ComponentMeta, ComponentStory } from '@storybook/react'

import { RenderCustomHeader } from '../../atoms'

export default {
    title: 'UI-components/molecules/CalendarComponent/RenderCustomHeader',
    component: RenderCustomHeader,
    args: {
        monthDate: new Date(),
        prevMonthButtonDisabled: true,
        nextMonthButtonDisabled: true,
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=7748%3A74758&t=wWxykGRSbzhTsSXy-4',
        },
    },
} as ComponentMeta<typeof RenderCustomHeader>

const Template: ComponentStory<typeof RenderCustomHeader> = (args) => (
    <RenderCustomHeader {...args} />
)

export const Default = Template.bind({})
