import { ComponentMeta, ComponentStory } from '@storybook/react'

import { TabsPanel } from './TabsPanel'

export default {
    title: 'UI-components/atoms/Tabs/TabsPanel',
    component: TabsPanel,
    args: {
        thisTabIndex: 1,
        selectedTabIndex: 2,
        children: <p>content</p>,
    },
} as ComponentMeta<typeof TabsPanel>

const Template: ComponentStory<typeof TabsPanel> = (args) => (
    <TabsPanel {...args} />
)

export const Default = Template.bind({})
