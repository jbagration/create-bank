import { ComponentMeta, ComponentStory } from '@storybook/react'

import { datesLastMonth } from '../TransferOrders'

import { FilterForm } from './FilterForm'

export default {
    title: 'UI-components/organisms/Filter/FilterForm',
    component: FilterForm,
} as ComponentMeta<typeof FilterForm>

const Template: ComponentStory<typeof FilterForm> = () => (
    <FilterForm
        cards={[]}
        filters={{
            pageSize: 10,
            purpose: '',
            from: datesLastMonth.from.toISOString(),
            to: datesLastMonth.to.toISOString(),
            min_sum: 0,
            max_sum: 100000,
            type_name: '',
            operationType: '',
            pageNumber: 0,
            cardNumber: '',
        }}
    />
)

export const Default = Template.bind({})
