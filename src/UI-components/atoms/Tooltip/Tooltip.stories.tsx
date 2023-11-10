import { ComponentStory } from '@storybook/react'

import { Tooltip } from './Tooltip'

export default {
    title: 'UI-components/atoms/Tooltip',
    component: Tooltip,
}

const Template: ComponentStory<typeof Tooltip> = (arg) => (
    <Tooltip {...arg}>
        <p>Text</p>
    </Tooltip>
)

export const Default = Template.bind({})
Default.args = {
    title: true,
    arrow: true,
    placement: 'bottom-end',
}
