import { ComponentMeta, ComponentStory } from '@storybook/react'

import { myCardsWithTextStubData } from '../../../../stub/data'

import { MyCardsWithText } from './MyCardsWithText'

export default {
    title: 'UI-components/organisms/MyCards/MyCardsWithText/MyCardsWithText',
    component: MyCardsWithText,
    args: {
        cardsLimit: 2,
        myCards: myCardsWithTextStubData,
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=8202%3A73614&t=6O69MFC0DW9gMAjh-4',
        },
    },
} as ComponentMeta<typeof MyCardsWithText>

const Template: ComponentStory<typeof MyCardsWithText> = (args) => (
    <MyCardsWithText {...args} />
)

export const Default = Template.bind({})

export const WithNoCards = Template.bind({})
WithNoCards.args = {
    myCards: [],
}
