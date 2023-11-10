import { ComponentMeta, ComponentStory } from '@storybook/react'

import { MyCardDetailButton } from './MyCardDetailButton'

export default {
    title: 'UI-components/organisms/MyCardDetail/MyCardDetailButton',
    component: MyCardDetailButton,
} as ComponentMeta<typeof MyCardDetailButton>

const Template: ComponentStory<typeof MyCardDetailButton> = (args) => (
    <MyCardDetailButton {...args} />
)

export const DepositButton = Template.bind({})
DepositButton.args = {
    type: 'depositCard',
}

export const CreditButton = Template.bind({})
