import { ComponentStory } from '@storybook/react'

import { StoreLink } from './StoreLink'

export default {
    title: 'UI-components/atoms/StoreLink',
    component: StoreLink,
}

const Template: ComponentStory<typeof StoreLink> = (arg) => (
    <StoreLink {...arg}>Apply</StoreLink>
)

export const Minified = Template.bind({})
Minified.args = {
    isMinified: true,
}
