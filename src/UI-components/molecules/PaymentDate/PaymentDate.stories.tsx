import { ComponentStory } from '@storybook/react'

import { PaymentDate } from './PaymentDate'

export default {
    title: 'UI-components/molecules/PaymentDate',
    component: PaymentDate,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=2281%3A76075&t=jNPqpB5JJdhHPnEP-4',
        },
    },
}

const Template: ComponentStory<typeof PaymentDate> = (arg) => (
    <PaymentDate {...arg} />
)

export const Default = Template.bind({})
Default.args = {
    paymentDate: '2022-09-20',
}
