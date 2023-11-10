import { ComponentStory } from '@storybook/react'

import { RightFields } from './RightFields'

export default {
    title: 'UI-components/molecules/CreditTermsTable/CreditTableChunks/RightFields',
    component: RightFields,
    args: {
        keysTableDetails: ['25%'],
        index: 0,
        textVariantR: 'body1',
        head: true,
        title: true,
        type: 'default',
    },
}

const Template: ComponentStory<typeof RightFields> = (args) => (
    <RightFields {...args} />
)

export const Default = Template.bind({})
