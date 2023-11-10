import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Link } from './Link'

export default {
    title: 'UI-components/atoms/Link',
    component: Link,
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (arg) => (
    <Link {...arg}>Download card statement</Link>
)

export const Default = Template.bind({})

Default.args = {}
