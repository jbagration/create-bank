import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StatusInfo } from './StatusInfo'

export default {
    title: 'UI-components/atoms/StatusInfo',
    component: StatusInfo,
    argTypes: {
        status: {
            type: 'string',
            description: 'status info',
            defaultValue: 'pending',
            options: ['pending', 'rejected'],
            control: {
                type: 'radio',
            },
        },
    },
} as ComponentMeta<typeof StatusInfo>

const Template: ComponentStory<typeof StatusInfo> = (arg) => (
    <StatusInfo {...arg}>Apply</StatusInfo>
)

export const Pending = Template.bind({})
Pending.args = {
    status: 'pending',
}

export const Rejected = Template.bind({})
Rejected.args = {
    status: 'rejected',
}
