import { ComponentMeta, ComponentStory } from '@storybook/react'

import { FormHandler } from '../../../../../../molecules'
import { useSecurityForm } from '../../useSecurityForm'

import { ControlQuestionChangeForm } from './ControlQuestionChangeForm'

export default {
    title: 'UI-components/organisms/UserAccountWindow/UserAccountTabs/Security/SecurityForms/ControlQuestionChangeForm',
    component: ControlQuestionChangeForm,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=1483%3A27172&t=gDok5FL7UxKJk6iD-4',
        },
    },
} as ComponentMeta<typeof ControlQuestionChangeForm>

const Template: ComponentStory<typeof ControlQuestionChangeForm> = (args) => {
    const { methods } = useSecurityForm()

    return (
        <FormHandler methods={methods}>
            <ControlQuestionChangeForm {...args} />
        </FormHandler>
    )
}

export const Default = Template.bind({})
