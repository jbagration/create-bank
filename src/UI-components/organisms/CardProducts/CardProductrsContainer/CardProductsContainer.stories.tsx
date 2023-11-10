import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CardProductsContainer } from './CardProductsContainer'

export default {
    title: 'UI-components/organisms/CardProducts/CardProductsContainer',
    component: CardProductsContainer,
} as ComponentMeta<typeof CardProductsContainer>

const Template: ComponentStory<typeof CardProductsContainer> = () => (
    <CardProductsContainer />
)

export const Default = Template.bind({})
