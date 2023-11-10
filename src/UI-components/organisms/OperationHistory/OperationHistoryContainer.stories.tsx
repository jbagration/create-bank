import { ComponentMeta, ComponentStory } from '@storybook/react'

import { OperationHistoryContainer } from './OperationHistoryContainer'

export default {
    title: 'UI-components/organisms/OperationHistory/OperationHistoryContainer',
    component: OperationHistoryContainer,

    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=1483%3A26548&t=F8nwhfCcqs3fUsYr-4',
        },
    },
} as ComponentMeta<typeof OperationHistoryContainer>

const Template: ComponentStory<typeof OperationHistoryContainer> = () => (
    <OperationHistoryContainer />
)

export const Default = Template.bind({})
