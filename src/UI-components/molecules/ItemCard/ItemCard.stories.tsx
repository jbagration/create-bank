import { ComponentStory } from '@storybook/react'

import { ItemCard } from './ItemCard'

export default {
    title: 'UI-components/molecules/ItemCard',
    component: ItemCard,
    args: {
        currencyCode: 'RUB',
        balance: 200000,
        cardNumber: '1111222233334444',
        expirationDate: '06/24',
        cardName: 'Universal',
        paymentSystem: 'MASTERCARD',
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=14437%3A82520&t=jNPqpB5JJdhHPnEP-4',
        },
    },
}

const Template: ComponentStory<typeof ItemCard> = (arg) => <ItemCard {...arg} />

export const Default = Template.bind({})

export const Start = Template.bind({})
Start.parameters = {
    design: {
        url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=6570%3A63086&t=jNPqpB5JJdhHPnEP-4',
    },
}

export const UnknownCardNumber = Template.bind({})
UnknownCardNumber.parameters = {
    design: {
        url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=14437%3A82519&t=jNPqpB5JJdhHPnEP-4',
    },
}

export const Mini = Template.bind({})
Mini.args = {
    mini: true,
}
Mini.parameters = {
    design: {
        url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=15254%3A90260&t=cHEOa8gBB9DDnO20-4',
    },
}
