import { ComponentMeta, ComponentStory } from '@storybook/react'

import { cardProductsInfoStubData } from '../../../../stub/data'

import { CardProductsInfo } from './CardProductsInfo'

export default {
    title: 'UI-components/organisms/CardProducts/CardProductsInfo',
    component: CardProductsInfo,
    args: {
        data: cardProductsInfoStubData,
    },
} as ComponentMeta<typeof CardProductsInfo>

const Template: ComponentStory<typeof CardProductsInfo> = (args) => (
    <CardProductsInfo {...args} />
)

export const Default = Template.bind({})
