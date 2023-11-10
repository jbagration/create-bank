import { ComponentMeta, ComponentStory } from '@storybook/react'

import { SwitchCurrency } from './SwitchCurrency'

export default {
    title: 'UI-components/molecules/CurrencyConverter/SwitchCurrency',
    component: SwitchCurrency,
} as ComponentMeta<typeof SwitchCurrency>

const Template: ComponentStory<typeof SwitchCurrency> = (args) => {
    return <SwitchCurrency {...args} />
}

export const Default = Template.bind({})
