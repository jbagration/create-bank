import { useForm } from 'react-hook-form'
import { ComponentStory } from '@storybook/react'

import { FormHandler } from '..'

import { InputWithSlider } from './InputWithSlider'

export default {
    title: 'UI-components/molecules/InputWithSlider',
    component: InputWithSlider,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=2281%3A76442&t=jNPqpB5JJdhHPnEP-4',
        },
    },
}

const Template: ComponentStory<typeof InputWithSlider> = (arg) => {
    const methods = useForm()
    return (
        <FormHandler methods={methods} formId="xxx">
            <InputWithSlider {...arg} />
        </FormHandler>
    )
}

export const Default = Template.bind({})
Default.args = {
    name: 'Title',
}
