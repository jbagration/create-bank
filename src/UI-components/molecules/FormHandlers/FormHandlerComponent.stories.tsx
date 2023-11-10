import { useForm } from 'react-hook-form'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { FormHandler } from './FormHandlerComponent'
import { InputHandler } from './InputHandler'

export default {
    title: 'UI-components/molecules/FormHandlers/FormHandlerComponent',
    component: FormHandler,
    args: {},
} as ComponentMeta<typeof FormHandler>

const Template: ComponentStory<typeof FormHandler> = (args) => {
    const methods = useForm()

    return <FormHandler {...args} methods={methods} />
}

export const WithAnInput = Template.bind({})
WithAnInput.args = {
    children: (
        <InputHandler
            helperText={`От ${12}`}
            staticLabel={`Сумма вклада, ${3}`}
            type="text"
            name="enterAmount"
            size="long"
            placeholder="Введите сумму"
            defaultValue={10}
            required
        />
    ),
}
