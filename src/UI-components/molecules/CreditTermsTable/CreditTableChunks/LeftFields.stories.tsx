import { ComponentMeta, ComponentStory } from '@storybook/react'

import { LeftFields } from './LeftFields'

export default {
    title: 'UI-components/molecules/CreditTermsTable/CreditTableChunks/LeftFields',
    component: LeftFields,
    args: {
        keysTableDetails: ['Rate'],
        index: 0,
        textVariantL: 'body1',
        head: true,
        type: 'default',
    },
} as ComponentMeta<typeof LeftFields>

const Template: ComponentStory<typeof LeftFields> = (args) => (
    <LeftFields {...args} />
)

export const Default = Template.bind({})
