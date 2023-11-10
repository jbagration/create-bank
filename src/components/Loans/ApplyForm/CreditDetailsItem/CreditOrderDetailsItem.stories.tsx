import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CreditOrderDetailsItem } from './CreditOrderDetailsItem'

export default {
    title: 'UI-components/molecules/CreditOrderDetailsItem',
    component: CreditOrderDetailsItem,
    argTypes: {
        status: {
            type: 'string',
            description: 'change component with status',
            defaultValue: '',
            options: ['pending', 'rejected'],
            control: {
                type: 'radio',
            },
        },
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=2281%3A75788&t=jNPqpB5JJdhHPnEP-4',
        },
    },
} as ComponentMeta<typeof CreditOrderDetailsItem>

const Template: ComponentStory<typeof CreditOrderDetailsItem> = (args) => (
    <CreditOrderDetailsItem {...args}>Apply</CreditOrderDetailsItem>
)

export const Default = Template.bind({})
Default.args = {
    productName: 'Title',
    index: 1,
    maxWidth: '640px',
    maxWidthBorder: '640px',
    periodMonths: 12,
    status: 'pending',
    amount: 10000,
}

export const Status = Template.bind({})
Status.args = {
    productName: 'Title',
    index: 1,
    maxWidth: '640px',
    maxWidthBorder: '640px',
    periodMonths: 12,
    amount: 10000,
    status: 'rejected',
}

export const First = Template.bind({})
First.args = {
    productName: 'Title',
    index: 1,
    periodMonths: 12,
    amount: 10000,
    first: true,
}

export const Last = Template.bind({})
Last.args = {
    productName: 'Title',
    index: 1,
    periodMonths: 12,
    amount: 10000,
    last: true,
}
