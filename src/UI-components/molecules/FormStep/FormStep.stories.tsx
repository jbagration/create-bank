import { useForm } from 'react-hook-form'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { FormHandler } from '../FormHandlers'

import { FormStep } from './FormStep'

export default {
    title: 'UI-components/molecules/FormStep',
    component: FormStep,
    args: {},
} as ComponentMeta<typeof FormStep>

const Template: ComponentStory<typeof FormStep> = () => {
    const methods = useForm()

    return (
        <FormHandler methods={methods}>
            <FormStep />
        </FormHandler>
    )
}
export const Default = Template.bind({})
