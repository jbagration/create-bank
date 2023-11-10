import { ComponentMeta, ComponentStory } from '@storybook/react'

import { cardProductStubData } from '../../../stub/data'

import { CardProducts } from './CardProducts'

export default {
    title: 'UI-components/organisms/CardProducts/CardProduct',
    component: CardProducts,
    args: {
        data: cardProductStubData,
    },
} as ComponentMeta<typeof CardProducts>

const Template: ComponentStory<typeof CardProducts> = (args) => (
    <CardProducts {...args} />
)

export const Default = Template.bind({})
