import { ComponentMeta, ComponentStory } from '@storybook/react'

import { creditItemInfoStubData } from '../../../stub/data'

import { CreditTable } from './CreditTable'

export default {
    title: 'UI-components/organisms/CreditTable',
    component: CreditTable,
    args: creditItemInfoStubData,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=2281%3A76014&t=jFuWPddW8nkJpiWg-4',
        },
    },
} as ComponentMeta<typeof CreditTable>

const Template: ComponentStory<typeof CreditTable> = (args) => (
    <CreditTable {...args} />
)

export const Default = Template.bind({})
