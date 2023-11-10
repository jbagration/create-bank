import { ComponentMeta, ComponentStory } from '@storybook/react'

import { MyCardDetail } from './MyCardDetail'

export default {
    title: 'UI-components/organisms/MyCardDetail/MyCardDetail',
    component: MyCardDetail,
    args: {
        cardId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        card: {
            cardId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            holderName: 'Madeline Webb',
            status: 'BLOCKED',
            cardNumber: '5169 1234 4321 7678',
            expirationDate: '2022-10-07',
            cardName: 'Purchase Plus Credit Card',
            paymentSystem: 'VISA',
            currencyCode: 'GBP',
            currentBalance: 0,
            accountNumber: '000 00000000000000000',
        },
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=7744%3A73719&t=6O69MFC0DW9gMAjh-4',
        },
    },
} as ComponentMeta<typeof MyCardDetail>

const Template: ComponentStory<typeof MyCardDetail> = (args) => (
    <MyCardDetail {...args} />
)

export const Default = Template.bind({})
