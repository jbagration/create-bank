import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Map } from './Map'

export default {
    title: 'UI-components/organisms/Map',
    component: Map,
} as ComponentMeta<typeof Map>

const Template: ComponentStory<typeof Map> = (args) => <Map {...args} />

export const Default = Template.bind({})
