import { ComponentMeta, ComponentStory } from '@storybook/react'

import { FeaturedServices } from './FeaturedServices'

export default {
    title: 'UI-components/organisms/FeaturedServices',
    component: FeaturedServices,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=5931%3A60309&t=6O69MFC0DW9gMAjh-4',
        },
    },
} as ComponentMeta<typeof FeaturedServices>

const Template: ComponentStory<typeof FeaturedServices> = () => (
    <FeaturedServices />
)

export const Default = Template.bind({})
