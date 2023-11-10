import { ComponentMeta, ComponentStory } from '@storybook/react'

import { InputAmount } from './InputAmount'

export default {
    title: 'UI-components/molecules/CurrencyConverter/InputAmount',
    component: InputAmount,
} as ComponentMeta<typeof InputAmount>

const Template: ComponentStory<typeof InputAmount> = (args) => {
    return <InputAmount {...args} />
}

export const Default = Template.bind({})
