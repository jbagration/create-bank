import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ApplyForm } from './ApplyForm'

export default {
    title: 'UI-components/organisms/ApplyForm',
    component: ApplyForm,
    args: {
        id: 1,
        maxPeriodMonths: 10,
        minPeriodMonths: 0,
        maxSum: 5000,
        minSum: 0,
        currencyCode: 'RUB',
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=2281%3A76512&t=jFuWPddW8nkJpiWg-4',
        },
    },
} as ComponentMeta<typeof ApplyForm>

const Template: ComponentStory<typeof ApplyForm> = (args) => (
    <ApplyForm {...args} />
)

export const Default = Template.bind({})
