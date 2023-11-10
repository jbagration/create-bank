import { operationHistoryStubData } from 'src/stub/data'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { TransferOrders } from './TransferOrders'

export default {
    title: 'UI-components/organisms/TransferOrders/TransferOrders',
    component: TransferOrders,
    args: {
        dataLength: 3,
        date: 'June 10, Пятница',
        orders: operationHistoryStubData,
        setSize: () => null,
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=6570%3A65677&t=F8nwhfCcqs3fUsYr-4',
        },
    },
} as ComponentMeta<typeof TransferOrders>

const Template: ComponentStory<typeof TransferOrders> = (args) => (
    <TransferOrders {...args} />
)

export const Default = Template.bind({})
