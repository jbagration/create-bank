import { ComponentStory } from '@storybook/react'

import { CreditTermsTable } from './CreditTermsTable'

export default {
    title: 'UI-components/molecules/CreditTermsTable',
    component: CreditTermsTable,
    argTypes: {},
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=2281%3A76388&t=jNPqpB5JJdhHPnEP-4',
        },
    },
}

const Template: ComponentStory<typeof CreditTermsTable> = (arg) => (
    <CreditTermsTable {...arg} />
)

export const Default = Template.bind({})
Default.args = {
    keysTableDetails: ['key1', 'key2', 'key3'],
    valueTableDetails: ['test1', 'test2', '230'],
}

export const Widthtitle = Template.bind({})
Widthtitle.args = {
    keysTableDetails: ['key1', 'key2', 'key3'],
    valueTableDetails: ['test1', 'test2', '230'],
    head: true,
}

export const CreditTable = Template.bind({})
CreditTable.args = {
    keysTableDetails: ['key1', 'key2', 'key3'],
    valueTableDetails: ['test1', 'test2', '230'],
    creditTable: true,
}
