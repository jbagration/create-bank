import { ComponentStory } from '@storybook/react'

import { CreditDetailName } from './CreditDetailName'

export default {
    title: 'UI-components/molecules/CreditDetailsItem/CreditDetailName',
    component: CreditDetailName,
}

const Template: ComponentStory<typeof CreditDetailName> = (args) => (
    <CreditDetailName {...args}>Apply</CreditDetailName>
)

export const Default = Template.bind({})
Default.args = {
    name: 'Name',
    text: 'Text',
    position: 1,
}
