import { Provider } from 'react-redux'
import { ComponentStory } from '@storybook/react'

import { store } from '../../../redux/store'

import { LoginWindow } from './LoginWindow'

export default {
    title: 'UI-components/molecules/LoginWindow',
    component: LoginWindow,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=1057%3A20889&t=jFuWPddW8nkJpiWg-4',
        },
    },
}

const Template: ComponentStory<typeof LoginWindow> = (arg) => (
    <Provider store={store}>
        <LoginWindow {...arg} />
    </Provider>
)

export const Default = Template.bind({})
Default.args = {
    top: '20px',
    right: '20px',
    position: 'absolute',
}
