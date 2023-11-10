import { ComponentMeta, ComponentStory } from '@storybook/react'

import { MyCards } from './MyCards'

export default {
    title: 'UI-components/organisms/MyCards/MyCards',
    component: MyCards,
    args: {
        myCards: [
            {
                cardId: '594f5dd8-cd03-4c43-b54d-622edfe48650',
                cardName: 'Medical',
                cardNumber: '4965713028943784',
                expirationDate: '2024-07-31',
                paymentSystem: 'MIR',
                currencyCode: 'RUB',
                cardBalance: 1000,
            },
            {
                cardId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                cardName: 'Medical',
                cardNumber: '4965713028943784',
                expirationDate: '2024-07-31',
                paymentSystem: 'VISA',
                currencyCode: 'RUB',
                cardBalance: 2000,
            },
        ],
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=5931%3A59946&t=6O69MFC0DW9gMAjh-4',
        },
    },
} as ComponentMeta<typeof MyCards>

const Template: ComponentStory<typeof MyCards> = (args) => <MyCards {...args} />

export const Default = Template.bind({})
