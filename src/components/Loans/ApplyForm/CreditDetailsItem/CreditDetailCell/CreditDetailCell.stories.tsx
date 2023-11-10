import { ComponentStory } from '@storybook/react'

import { CreditDetailCell } from './CreditDetailCell'

export default {
    title: 'UI-components/molecules/CreditDetailsItem/CreditDetailCell',
    component: CreditDetailCell,
}

const Template: ComponentStory<typeof CreditDetailCell> = (args) => (
    <CreditDetailCell {...args}>Apply</CreditDetailCell>
)

export const Default = Template.bind({})
Default.args = {
    title: 'Title',
    text: 'text',
}
