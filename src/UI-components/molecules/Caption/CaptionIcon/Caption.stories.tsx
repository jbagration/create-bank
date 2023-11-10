import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CaptionIcon } from './CaptionIcon'

export default {
    title: 'UI-components/molecules/Caption/CaptionIcon',
    component: CaptionIcon,
} as ComponentMeta<typeof CaptionIcon>

const Template: ComponentStory<typeof CaptionIcon> = () => <CaptionIcon />

export const Default = Template.bind({})
