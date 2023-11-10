import { ComponentStory } from '@storybook/react'

import { CreditCardDetailsItem } from './CreditCardDetailsItem'

export default {
    title: 'UI-components/molecules/CreditDetailsItem/CreditCardDetailsItem',
    component: CreditCardDetailsItem,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=2281%3A75788&t=jNPqpB5JJdhHPnEP-4',
        },
    },
}

const Template: ComponentStory<typeof CreditCardDetailsItem> = (args) => (
    <CreditCardDetailsItem {...args}>Apply</CreditCardDetailsItem>
)

export const Default = Template.bind({})
Default.args = {
    name: 'Title',
    expirationDate: '2025-07-12',
    cardBalance: 200000,
    index: 1,
    maxWidth: '900px',
    maxWidthBorder: '960px',
    paymentSystem: 'VISA',
    cardId: '12345',
}

export const First = Template.bind({})
First.args = {
    name: 'Title',
    expirationDate: '2025-07-12',
    cardBalance: 200000,
    index: 1,
    maxWidth: '900px',
    maxWidthBorder: '960px',
    paymentSystem: 'VISA',
    cardId: '12345',
    first: true,
}

export const Last = Template.bind({})
Last.args = {
    name: 'Title',
    expirationDate: '2025-07-12',
    cardBalance: 200000,
    index: 1,
    maxWidth: '900px',
    maxWidthBorder: '960px',
    paymentSystem: 'VISA',
    cardId: '12345',
    last: true,
}
