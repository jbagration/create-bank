import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CreditItemInfoContainer } from './CreditItemInfoContainer'

export default {
    title: 'UI-components/organisms/CreditItemInfo/CreditItemInfoContainer',
    component: CreditItemInfoContainer,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=2281%3A76014&t=jFuWPddW8nkJpiWg-4',
        },
    },
} as ComponentMeta<typeof CreditItemInfoContainer>

const Template: ComponentStory<typeof CreditItemInfoContainer> = (args) => (
    <CreditItemInfoContainer {...args} />
)

export const Default = Template.bind({})
