import { useForm } from 'react-hook-form'
import { Provider } from 'react-redux'
import { ComponentStory } from '@storybook/react'

import { store } from '../../../redux/store'
import { FormHandler } from '../FormHandlers'

import { RangeInputs } from './RangeInputs'

export default {
    title: 'UI-components/molecules/RangeInputs',
    component: RangeInputs,
    argTypes: {
        type: {
            type: 'string',
            description: 'Button type',
            defaultValue: 'done',
            options: ['done', 'error', 'info'],
            control: {
                type: 'radio',
            },
        },
    },
}

const Template: ComponentStory<typeof RangeInputs> = (arg) => {
    const methods = useForm()

    return (
        <FormHandler methods={methods} formId="xxx">
            <Provider store={store}>
                <RangeInputs {...arg} />
            </Provider>
        </FormHandler>
    )
}

export const Default = Template.bind({})
Default.args = {
    minValue: 10,
    maxValue: 20,
    minName: 'minTest',
    maxName: 'maxTest',
}
