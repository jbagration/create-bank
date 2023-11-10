import { ComponentMeta, ComponentStory } from '@storybook/react'

import { MyCardsInfotab } from './MyCardsInfotab'

export default {
    title: 'UI-components/organisms/MyCards/MyCardsInfotab/MyCardsInfotab',
    component: MyCardsInfotab,
    args: {
        valueTableDetails: {
            status: 'ACTIVE',
            currencyCode: 'EUR',
            expirationDate: '02/01',
            holderName: 'Common User',
            cardNumber: '2100345185601234',
            accountNumber: '30232810100000000004',
            creationDate: '2023-01-01',
        },
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=6570%3A63944&t=6O69MFC0DW9gMAjh-4',
        },
    },
} as ComponentMeta<typeof MyCardsInfotab>

const Template: ComponentStory<typeof MyCardsInfotab> = (args) => (
    <MyCardsInfotab {...args} />
)

export const Default = Template.bind({})
