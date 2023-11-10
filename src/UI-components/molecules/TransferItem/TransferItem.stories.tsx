import { useForm } from 'react-hook-form'
import { Provider } from 'react-redux'
import { ComponentStory } from '@storybook/react'

import { store } from '../../../redux/store'
import { FormHandler } from '..'

import { TransferItem } from './TransferItem'

export default {
    title: 'UI-components/molecules/TransferItem',
    component: TransferItem,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=6570%3A65711&t=jNPqpB5JJdhHPnEP-4',
        },
    },
}

const Template: ComponentStory<typeof TransferItem> = (arg) => {
    const methods = useForm()

    return (
        <FormHandler methods={methods} formId="xxx">
            <Provider store={store}>
                <TransferItem {...arg} />
            </Provider>
        </FormHandler>
    )
}

export const Default = Template.bind({})
Default.args = {
    sum: '200000',
    time: '18:00',
    currencyCode: 'RUB',
    transferTypeName: 'card payment',
    remitterCardNumber: '1111222233334444',
    name: 'Alena Larina',
}
