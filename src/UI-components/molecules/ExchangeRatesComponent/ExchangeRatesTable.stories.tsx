import { rest } from 'msw'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ExchangeRatesTable } from './ExchangeRatesTable'

const data = {
    updateAt: '2022-07-15T12:12:15Z',
    name: 'Японская йена',
    buyingRate: 43.0537,
    sellingRate: 44.79,
    currencyCode: 'JPY',
    unit: 100,
}

export default {
    title: 'UI-components/molecules/ExchangeRatesTable',
    component: ExchangeRatesTable,
    parameters: {
        msw: {
            handlers: [
                rest.get('/exchange_rate', (req, res, ctx) => {
                    return res(ctx.json(data))
                }),
            ],
        },
    },
} as ComponentMeta<typeof ExchangeRatesTable>

const Template: ComponentStory<typeof ExchangeRatesTable> = () => (
    <ExchangeRatesTable />
)

export const Default = Template.bind({})
