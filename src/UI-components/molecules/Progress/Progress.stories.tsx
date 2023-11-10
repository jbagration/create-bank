import { Provider } from 'react-redux'
import { Box } from '@mui/material'
import { ComponentStory } from '@storybook/react'

import { store } from '../../../redux/store'

import { Progress } from './Progress'

export default {
    title: 'UI-components/molecules/Progress',
    component: Progress,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=2281%3A75954&t=jNPqpB5JJdhHPnEP-4',
        },
    },
}

const Template: ComponentStory<typeof Progress> = (arg) => (
    <Provider store={store}>
        <Box width="200px" height="200px">
            <Progress {...arg} />
        </Box>
    </Provider>
)

export const Default = Template.bind({})
Default.args = {
    redeemed: 60,
}
