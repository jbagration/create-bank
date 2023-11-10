import { CardIcon } from 'src/assets'
import { ComponentStory } from '@storybook/react'

import { ContactItem } from './ContactItem'

export default {
    title: 'UI-components/molecules/ContactItem',
    component: ContactItem,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=15428%3A89840&t=jNPqpB5JJdhHPnEP-4',
        },
    },
}

const Template: ComponentStory<typeof ContactItem> = (arg) => (
    <ContactItem {...arg}>Apply</ContactItem>
)

export const Default = Template.bind({})
Default.args = {
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet.',
    workTime: '22:00',
    number: '+7-865-444-44-44',
    number2: '+7-543-433-44-33',
    numberDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    numberDescription2:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
}

export const WithTime = Template.bind({})
WithTime.args = {
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet.',
    workTime: '22:00',
    icon: <CardIcon />,
    number: '+7-865-444-44-44',
    number2: '+7-543-433-44-33',
    numberDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    numberDescription2:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
}
