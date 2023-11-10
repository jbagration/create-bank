import { ComponentStory } from '@storybook/react'

import { CreditDetailsItem } from './CreditDetailsItem'

export default {
    title: 'UI-components/molecules/CreditDetailsItem',
    component: CreditDetailsItem,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=2281%3A75788&t=jNPqpB5JJdhHPnEP-4',
        },
    },
}

const Template: ComponentStory<typeof CreditDetailsItem> = (args) => (
    <CreditDetailsItem {...args}>Apply</CreditDetailsItem>
)

export const Default = Template.bind({})
Default.args = {
    name: 'Title',
    terminationDate: '2025-07-12',
    creditLimit: 200000,
    index: 1,
    maxWidth: '640px',
    maxWidthBorder: '640px',
}

export const First = Template.bind({})
First.args = {
    name: 'Title',
    terminationDate: '2025-07-12',
    creditLimit: 200000,
    index: 1,
    first: true,
}

export const Last = Template.bind({})
Last.args = {
    name: 'Title',
    terminationDate: '2025-07-12',
    creditLimit: 200000,
    index: 1,
    last: true,
}
