import { useForm } from 'react-hook-form'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { FormHandler } from './FormHandlerComponent'
import { InputHandler } from './InputHandler'

export default {
    title: 'UI-components/molecules/FormHandlers/InputHandler',
    component: InputHandler,
    args: {
        helperText: `От 12`,
        staticLabel: `Сумма вклада, ${3}`,
        type: 'text',
        name: 'amountToPay',
        size: 'long',
        placeholder: 'Введите сумму',
        defaultValue: 10,
        required: true,
    },
} as ComponentMeta<typeof InputHandler>

const Template: ComponentStory<typeof InputHandler> = (args) => {
    const methods = useForm()
    return (
        <FormHandler methods={methods}>
            <InputHandler {...args} />
        </FormHandler>
    )
}
export const Default = Template.bind({})
