import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ErrorWindow } from './ErrorWindow'

export default {
    title: 'UI-components/organisms/MyCards/BlockCardWindow/ErrorWindow',
    component: ErrorWindow,
    args: {
        message: 'Application not accepted',
    },
} as ComponentMeta<typeof ErrorWindow>

const Template: ComponentStory<typeof ErrorWindow> = (args) => (
    <ErrorWindow {...args} />
)

export const Default = Template.bind({})
