import { ComponentStory } from '@storybook/react'

import { ItemHistory } from './ItemHistory'

export default {
    title: 'UI-components/molecules/ItemHistory',
    component: ItemHistory,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=1483%3A26548&t=jNPqpB5JJdhHPnEP-4',
        },
    },
}

const Template: ComponentStory<typeof ItemHistory> = (arg) => (
    <ItemHistory {...arg} />
)

export const Default = Template.bind({})
Default.args = {
    date: '2 октября',
    time: '20:03',
    transferTypeName: 'transfer card',
    currencyCode: 'RUB',
    sum: '20000',
    remitterCardNumber: '1111222233334444',
    name: 'Ольга Ивановна',
}
