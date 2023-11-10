import { ComponentMeta, ComponentStory } from '@storybook/react'

import { GridItem } from './GridItem'

export default {
    title: 'UI-components/molecules/CreditTermsTable/CreditTableChunks/GridItem',
    component: GridItem,
} as ComponentMeta<typeof GridItem>

const linkObj = {
    Пополнить: () => '#',
}

const Template: ComponentStory<typeof GridItem> = (args) => (
    <GridItem {...args} />
)

export const Default = Template.bind({})

Default.args = {
    title: 'Text',
}

export const WithLink = Template.bind({})
WithLink.args = {
    title: 'Пополнить',
    getLinkByTitle: linkObj,
}
