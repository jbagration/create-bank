import { useForm } from 'react-hook-form'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { FormHandler } from '../../FormHandlers/FormHandlerComponent'

import { SelectCountry } from './SelectCountry'

export default {
    title: 'UI-components/molecules/CurrencyConverter/SelectCountry',
    component: SelectCountry,
} as ComponentMeta<typeof SelectCountry>

const Template: ComponentStory<typeof SelectCountry> = (args) => {
    const methods = useForm()
    return (
        <FormHandler methods={methods}>
            <SelectCountry {...args} />
        </FormHandler>
    )
}

export const Default = Template.bind({})
