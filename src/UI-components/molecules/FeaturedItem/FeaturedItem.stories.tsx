import { ComponentStory } from '@storybook/react'

import { FeaturedItem } from './FeaturedItem'

export default {
    title: 'UI-components/molecules/FeaturedItem',
    component: FeaturedItem,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=5931%3A60309&t=jNPqpB5JJdhHPnEP-4',
        },
    },
}

const Template: ComponentStory<typeof FeaturedItem> = (arg) => (
    <FeaturedItem {...arg} />
)

export const Default = Template.bind({})
Default.args = {
    operation: 'Card payment',
}
