import { ComponentMeta, ComponentStory } from '@storybook/react'

import { FilterForm } from '../Filter/FilterForm'
import { datesLastMonth } from '../TransferOrders'

import { MainMenuPage } from './MainMenuPage'

export default {
    title: 'UI-components/organisms/MainMenuPage',
    component: MainMenuPage,
    args: {
        backButton: true,
        text: 'Filter Form',
    },
} as ComponentMeta<typeof MainMenuPage>

const Template: ComponentStory<typeof MainMenuPage> = (args) => (
    <MainMenuPage {...args} />
)

export const WithFilterFormChildren = Template.bind({})
WithFilterFormChildren.args = {
    children: (
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
    ),
}
