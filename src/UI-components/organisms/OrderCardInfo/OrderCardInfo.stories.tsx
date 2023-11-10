import { ComponentMeta, ComponentStory } from '@storybook/react'

import { OrderCardInfo } from './OrderCardInfo'

export default {
    title: 'UI-components/organisms/OrderCardInfo',
    component: OrderCardInfo,
} as ComponentMeta<typeof OrderCardInfo>

const Template: ComponentStory<typeof OrderCardInfo> = () => <OrderCardInfo />

export const Default = Template.bind({})
