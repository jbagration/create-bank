import { ComponentMeta, ComponentStory } from '@storybook/react'

import { MyLocation } from './MyLocation'

export default {
    title: 'UI-components/organisms/Map/MyLocation',
    component: MyLocation,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/LvTWC3WiYvVM7Tprx1YLtB/%D0%90ffinity_Web_Library?node-id=467%3A2056&t=q3ux3BJrDhPjK9Be-4',
        },
    },
} as ComponentMeta<typeof MyLocation>

const Template: ComponentStory<typeof MyLocation> = () => {
    return <MyLocation />
}
export const Default = Template.bind({})
