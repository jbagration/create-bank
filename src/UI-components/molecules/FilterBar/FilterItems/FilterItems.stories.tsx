import { ComponentMeta, ComponentStory } from '@storybook/react'

import { FilterItems } from './FilterItems'

export default {
    title: 'UI-components/molecules/FilterBar/FilterItems',
    component: FilterItems,
    args: {
        icons: 'extras',
        filter: 'Text',
        variant: 'certainBankBranch',
    },
} as ComponentMeta<typeof FilterItems>

const Template: ComponentStory<typeof FilterItems> = (args) => (
    <FilterItems {...args} />
)

export const Default = Template.bind({})
