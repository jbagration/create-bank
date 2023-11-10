import {
    DownloadOutlined,
    RemoveRedEyeOutlined,
    ShareOutlined,
} from '@mui/icons-material'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CardStatementItem } from './CardStatementItem'

export default {
    title: 'UI-components/molecules/CardStatement/CardStatementItem',
    component: CardStatementItem,
    args: {},
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=7744%3A73921&t=wWxykGRSbzhTsSXy-4',
        },
    },
} as ComponentMeta<typeof CardStatementItem>

const Template: ComponentStory<typeof CardStatementItem> = (args) => (
    <CardStatementItem {...args} />
)

export const Show = Template.bind({})
Show.args = {
    icon: <RemoveRedEyeOutlined />,
    path: '/',
    text: 'Показать',
}
export const Share = Template.bind({})
Share.args = {
    icon: <ShareOutlined />,
    path: '',
    text: 'Поделиться',
}
export const Download = Template.bind({})
Download.args = {
    icon: <DownloadOutlined />,
    path: '/',
    text: 'Скачать',
}
