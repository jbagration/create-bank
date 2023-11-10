import { ComponentStory } from '@storybook/react'

import { FooterItem } from './FooterItem'

export default {
    title: 'UI-components/molecules/Footer/FooterItem',
    component: FooterItem,
    argTypes: {},
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=1233%3A25440&t=jNPqpB5JJdhHPnEP-4',
        },
    },
}

const Template: ComponentStory<typeof FooterItem> = (arg) => (
    <FooterItem {...arg} />
)

export const Default = Template.bind({})
Default.args = {
    title: 'Title',
    subtitle: [
        'Lorem ipsum dolor sit.',
        'Lorem ipsum consectetur adipisicing.',
    ],
    codeCalls: '+7-655-566-55-55',
    numberCalls: '+7-655-566-55-55',
}

export const haveContacts = Template.bind({})
haveContacts.args = {
    title: 'Title',
    subtitle: [
        'Lorem ipsum dolor sit.',
        'Lorem ipsum consectetur adipisicing.',
    ],
    codeCalls: '+7-655-566-55-55',
    numberCalls: '+7-655-566-55-55',
    haveContacts: true,
}
