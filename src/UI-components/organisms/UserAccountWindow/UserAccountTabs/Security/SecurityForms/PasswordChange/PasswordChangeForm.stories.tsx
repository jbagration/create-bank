import { ComponentMeta, ComponentStory } from '@storybook/react'

import { FormHandler } from '../../../../../../molecules'
import { useSecurityForm } from '../../useSecurityForm'

import { PasswordChangeForm } from './PasswordChangeForm'

export default {
    title: 'UI-components/organisms/UserAccountWindow/UserAccountTabs/Security/SecurityForms/PasswordChangeForm',
    component: PasswordChangeForm,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=1483%3A27146&t=gDok5FL7UxKJk6iD-4',
        },
    },
} as ComponentMeta<typeof PasswordChangeForm>

const Template: ComponentStory<typeof PasswordChangeForm> = (args) => {
    const { methods } = useSecurityForm()

    return (
        <FormHandler methods={methods}>
            <PasswordChangeForm {...args} />
        </FormHandler>
    )
}

export const Default = Template.bind({})
