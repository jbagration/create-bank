import { ComponentMeta, ComponentStory } from '@storybook/react'

import { creditItemInfoStubData } from '../../../stub/data'

import { CreditItemInfo } from './CreditItemInfo'

export default {
    title: 'UI-components/organisms/CreditItemInfo/CreditItemInfo',
    component: CreditItemInfo,
    args: creditItemInfoStubData,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=2281%3A76014&t=jFuWPddW8nkJpiWg-4',
        },
    },
} as ComponentMeta<typeof CreditItemInfo>

const Template: ComponentStory<typeof CreditItemInfo> = (args) => (
    <CreditItemInfo {...args} />
)

export const Default = Template.bind({})
