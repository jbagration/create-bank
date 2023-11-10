import { ComponentMeta, ComponentStory } from '@storybook/react'

import { SuccessOrderedCard } from './SuccessOrderedCard'

export default {
    title: 'UI-components/organisms/SuccessOrderedCard',
    component: SuccessOrderedCard,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=14674%3A86183&t=F8nwhfCcqs3fUsYr-4',
        },
    },
} as ComponentMeta<typeof SuccessOrderedCard>

const Template: ComponentStory<typeof SuccessOrderedCard> = () => (
    <SuccessOrderedCard />
)

export const Default = Template.bind({})
