import { Provider } from 'react-redux'
import { ComponentStory } from '@storybook/react'

import { store } from '../../../redux/store'

import { Header } from './Header'

export default {
    title: 'UI-components/molecules/Header',
    component: Header,
    argTypes: {},
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=1024%3A20888&t=jFuWPddW8nkJpiWg-4',
        },
    },
}

const Template: ComponentStory<typeof Header> = (arg) => (
    <Provider store={store}>
        <Header {...arg} />
    </Provider>
)

export const Default = Template.bind({})
Default.args = {
    main: false,
}
