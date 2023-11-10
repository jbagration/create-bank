import { ComponentStory } from '@storybook/react'

import { HistoryArrows } from './HistoryArrows'

export default {
    title: 'UI-components/molecules/HistoryArrows',
    component: HistoryArrows,
}

const Template: ComponentStory<typeof HistoryArrows> = (arg) => (
    <HistoryArrows {...arg} />
)

export const Default = Template.bind({})
Default.args = {
    count: 3,
    dataLength: 2,
}

export const More = Template.bind({})
More.args = {
    count: 3,
    dataLength: 8,
    size: 10,
}

export const Next = Template.bind({})
Next.args = {
    count: 3,
    dataLength: 8,
    next: false,
}
