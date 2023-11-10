import TollIcon from '@mui/icons-material/Toll'
import { ComponentStory } from '@storybook/react'

import { ButtonWithIcon } from './ButtonWithIcon'

export default {
    title: 'UI-components/atoms/ButtonWithIcon',
    component: ButtonWithIcon,
    argTypes: {
        size: {
            type: 'string',
            description: 'ButtonWithIcon size',
            defaultValue: 'small',
            options: ['medium', 'small'],
            control: {
                type: 'radio',
            },
        },
        yellow: {
            type: 'boolean',
            description: 'yellow background color',
            defaultValue: false,
            options: [true, false],
            control: {
                type: 'radio',
            },
        },
        yellowLight: {
            type: 'boolean',
            description: 'yellow light background color',
            defaultValue: false,
            options: [true, false],
            control: {
                type: 'radio',
            },
        },
        radius: {
            type: 'boolean',
            description: 'radius (16px/0px)',
            defaultValue: true,
            options: [true, false],
            control: {
                type: 'radio',
            },
        },
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=1092%3A21527&t=R5QjJVFlnUFB6QGP-4',
        },
    },
}

const Template: ComponentStory<typeof ButtonWithIcon> = (arg) => (
    <ButtonWithIcon {...arg}>
        <TollIcon />
    </ButtonWithIcon>
)

export const Small = Template.bind({})
Small.args = {
    size: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
    size: 'medium',
}

export const Yellow = Template.bind({})
Yellow.args = {
    size: 'medium',
    yellow: true,
}

export const YellowLight = Template.bind({})
YellowLight.args = {
    size: 'medium',
    yellowLight: true,
}

export const Radius = Template.bind({})
Radius.args = {
    size: 'medium',
    radius: false,
}
