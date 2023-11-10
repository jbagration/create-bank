import { ComponentMeta, ComponentStory } from '@storybook/react'

import { FilterComponent } from './FilterComponent'

export default {
    title: 'UI-components/organisms/Filter/FilterComponent',
    component: FilterComponent,
    args: {
        open: true,
        setOpen: () => null,
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=7748%3A76392&t=6O69MFC0DW9gMAjh-4',
        },
    },
} as ComponentMeta<typeof FilterComponent>

const Template: ComponentStory<typeof FilterComponent> = (args) => (
    <FilterComponent {...args} />
)

export const Default = Template.bind({})
