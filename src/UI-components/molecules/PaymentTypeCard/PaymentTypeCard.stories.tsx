import { ComponentMeta, ComponentStory } from '@storybook/react'

import iconFinancialServices from '../../../assets/svg/iconFinancialServices.svg'

import { PaymentTypeCard } from './PaymentTypeCard'

export default {
    title: 'UI-components/molecules/PaymentTypeCard',
    component: PaymentTypeCard,
    args: {
        icon: `${iconFinancialServices}`,
        title: 'Банковские, финансовые услуги',
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=16633%3A161223&t=F8nwhfCcqs3fUsYr-4',
        },
    },
} as ComponentMeta<typeof PaymentTypeCard>

const Template: ComponentStory<typeof PaymentTypeCard> = (args) => (
    <PaymentTypeCard {...args} />
)

export const Default = Template.bind({})
