import { Provider } from 'react-redux'
import { ComponentStory } from '@storybook/react'

import { store } from '../../../redux/store'

import { StoreLinkBox } from './StoreLinkBox'

export default {
    title: 'UI-components/molecules/StoreLinkBox',
    component: StoreLinkBox,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=8218%3A76142&t=jNPqpB5JJdhHPnEP-4',
        },
    },
}

const Template: ComponentStory<typeof StoreLinkBox> = (arg) => (
    <Provider store={store}>
        <StoreLinkBox {...arg} />
    </Provider>
)

export const Default = Template.bind({})
Default.args = {
    minified: false,
    main: true,
}
