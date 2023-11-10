import { Provider } from 'react-redux'
import { ComponentStory } from '@storybook/react'

import { store } from '../../../redux/store'

import { LoginFormModal } from './LoginFormModal'

export default {
    title: 'UI-components/molecules/LoginFormModal',
    component: LoginFormModal,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=934%3A20898&t=jFuWPddW8nkJpiWg-4',
        },
    },
}

const Template: ComponentStory<typeof LoginFormModal> = (arg) => (
    <Provider store={store}>
        <LoginFormModal {...arg}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                a!
            </p>
        </LoginFormModal>
    </Provider>
)

export const Default = Template.bind({})
Default.args = {
    title: 'title',
    show: true,
}
