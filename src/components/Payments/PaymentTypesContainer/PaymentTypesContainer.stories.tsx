import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PaymentTypesContainer } from './PaymentTypesContainer'

export default {
    title: 'UI-components/organisms/PaymentTypesContainer',
    component: PaymentTypesContainer,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=16633%3A161223&t=F8nwhfCcqs3fUsYr-4',
        },
    },
} as ComponentMeta<typeof PaymentTypesContainer>

const Template: ComponentStory<typeof PaymentTypesContainer> = () => (
    <PaymentTypesContainer />
)

export const Default = Template.bind({})
