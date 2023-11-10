import { operationHistoryStubData } from 'src/stub/data'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { OperationHistory } from './OperationHistory'

export default {
    title: 'UI-components/organisms/OperationHistory/OperationHistory',
    component: OperationHistory,
    args: {
        dataLength: 3,
        date: 'June 10, Пятница',
        orders: operationHistoryStubData,
        setSize: () => null,
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=1483%3A26548&t=F8nwhfCcqs3fUsYr-4',
        },
    },
} as ComponentMeta<typeof OperationHistory>

const Template: ComponentStory<typeof OperationHistory> = (args) => (
    <OperationHistory {...args} />
)

export const Default = Template.bind({})
