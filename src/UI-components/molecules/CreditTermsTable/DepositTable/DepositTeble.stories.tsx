import { ComponentMeta, ComponentStory } from '@storybook/react'

import { DepositTable } from './DepositTable'

export default {
    title: 'UI-components/molecules/CreditTermsTable/DepositTable',
    component: DepositTable,
    args: {
        data: [
            '25%',
            'Replenish deposit',
            'Not provided',
            'Interest will be charged to your card **6719',
            'Withdraw a deposit',
        ],
        keysTableDetails: [
            'Rate',
            'Replenishment',
            'Capitalization',
            'Interest payment',
            'Early withdrawal',
        ],
        amount: '500 000 ₽',
        validity: 'until 26.07.2022 (12 months)',
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=15528%3A90347&t=wWxykGRSbzhTsSXy-4',
        },
    },
} as ComponentMeta<typeof DepositTable>

const Template: ComponentStory<typeof DepositTable> = (args) => (
    <DepositTable {...args} />
)

export const Default = Template.bind({})
