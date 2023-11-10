import { Provider } from 'react-redux'
import { ComponentStory } from '@storybook/react'

import { store } from '../../../redux/store'

import { NotificationModal } from './NotificationModal'

export default {
    title: 'UI-components/molecules/NotificationModal',
    component: NotificationModal,
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
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=5002%3A65066&t=jNPqpB5JJdhHPnEP-4',
        },
    },
}

const Template: ComponentStory<typeof NotificationModal> = (arg) => (
    <Provider store={store}>
        <NotificationModal {...arg}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                a!
            </p>
        </NotificationModal>
    </Provider>
)

export const Default = Template.bind({})
Default.args = {
    type: 'done',
    open: true,
}
