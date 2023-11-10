import { ComponentMeta, ComponentStory } from '@storybook/react'

import { DescriptionMyCard } from './DescriptionMyCard'

export default {
    title: 'UI-components/organisms/MyCards/MyCardWithText/DescriptionMyCard',
    component: DescriptionMyCard,
    args: {
        balance: 1000,
        cardName: 'Visa Gold',
        cardNumber: '374245455400126',
        currencyCode: 'RUB',
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=15254%3A89343&t=0uEFpyVsjHHWD6Tk-4',
        },
    },
} as ComponentMeta<typeof DescriptionMyCard>

const Template: ComponentStory<typeof DescriptionMyCard> = (args) => (
    <DescriptionMyCard {...args} />
)

export const Default = Template.bind({})

export const WhenCardIsMinified = Template.bind({})
WhenCardIsMinified.args = {
    mini: true,
}
