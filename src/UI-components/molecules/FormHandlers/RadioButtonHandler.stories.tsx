import { useForm } from 'react-hook-form'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { FormHandler } from './FormHandlerComponent'
import { RadioButtonHandler } from './RadioButtonHandler'

export default {
    title: 'UI-components/molecules/FormHandlers/RadioButtonHandler',
    component: RadioButtonHandler,
    args: {
        value: 'Russia',
        name: 'countryOfResidence',
        checked: false,
    },
} as ComponentMeta<typeof RadioButtonHandler>

const Template: ComponentStory<typeof RadioButtonHandler> = (args) => {
    const methods = useForm()
    return (
        <FormHandler methods={methods}>
            <RadioButtonHandler {...args} />
        </FormHandler>
    )
}
export const Default = Template.bind({})
