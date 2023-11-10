import { ComponentMeta, ComponentStory } from '@storybook/react'

import { SearchField } from './SearchField'

export default {
    title: 'UI-components/atoms/SearchField',
    component: SearchField,
} as ComponentMeta<typeof SearchField>

const Template: ComponentStory<typeof SearchField> = () => (
    <SearchField value="" onChange={() => {}} />
)

export const Default = Template.bind({})
