import { ComponentMeta, ComponentStory } from '@storybook/react'

import { TabsWithContent } from './TabsWithContent'

export default {
    title: 'UI-components/atoms/Tabs/TabsWithContent',
    component: TabsWithContent,
    args: {
        labels: ['1', '2', '3', '4'],
        children: <p>content</p>,
    },
} as ComponentMeta<typeof TabsWithContent>

const Template: ComponentStory<typeof TabsWithContent> = (args) => (
    <TabsWithContent {...args} />
)

export const Default = Template.bind({})
