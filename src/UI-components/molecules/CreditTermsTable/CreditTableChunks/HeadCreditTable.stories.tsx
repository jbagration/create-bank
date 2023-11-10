import { ComponentMeta, ComponentStory } from '@storybook/react'

import { HeadCreditTable } from './HeadCreditTable'

export default {
    title: 'UI-components/molecules/CreditTermsTable/CreditTableChunks/HeadCreditTable',
    component: HeadCreditTable,
} as ComponentMeta<typeof HeadCreditTable>

const Template: ComponentStory<typeof HeadCreditTable> = () => (
    <HeadCreditTable />
)

export const Default = Template.bind({})
