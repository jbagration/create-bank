import { ComponentStory } from '@storybook/react'

import { CreditDetailButton } from './CreditDetailButton'

export default {
    title: 'UI-components/molecules/CreditDetailsItem/CreditDetailButton',
    component: CreditDetailButton,
}

const Template: ComponentStory<typeof CreditDetailButton> = (args) => (
    <CreditDetailButton {...args}>Apply</CreditDetailButton>
)

export const Default = Template.bind({})
Default.args = {
    open: true,
}
