import { Provider } from 'react-redux'
import { ComponentStory } from '@storybook/react'

import { store } from '../../../redux/store'

import { Modal } from './Modal'

export default {
    title: 'UI-components/molecules/Modal',
    component: Modal,
}

const Template: ComponentStory<typeof Modal> = (arg) => (
    <Provider store={store}>
        <Modal {...arg}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                a!
            </p>
        </Modal>
    </Provider>
)

export const Default = Template.bind({})
Default.args = {
    title: 'title',
    show: true,
}
