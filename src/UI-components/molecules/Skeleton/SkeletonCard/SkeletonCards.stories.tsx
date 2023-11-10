import { Provider } from 'react-redux'
import { ComponentStory } from '@storybook/react'

import { store } from '../../../../redux/store'

import { SkeletonCard } from './SkeletonCard'

export default {
    title: 'UI-components/molecules/SkeletonCards',
    component: SkeletonCard,
}

const Template: ComponentStory<typeof SkeletonCard> = (arg) => (
    <Provider store={store}>
        <SkeletonCard {...arg} />
    </Provider>
)

export const Vertical = Template.bind({})
Vertical.args = {
    quantity: 4,
    isVertical: true,
}

export const Horizontal = Template.bind({})
Horizontal.args = {
    quantity: 4,
    isVertical: false,
}
