import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ConfirmModal } from './ConfirmModal'

export default {
    title: 'UI-components/molecules/Modal/ConfirmModal',
    component: ConfirmModal,
    args: {
        type: 'info',
        action: () => '',
        confirmButtonText: 'Withdraw',
        text: 'Are you sure you want to withdraw the deposit?',
    },
} as ComponentMeta<typeof ConfirmModal>

const Template: ComponentStory<typeof ConfirmModal> = (args) => (
    <ConfirmModal {...args} />
)

export const Default = Template.bind({})
