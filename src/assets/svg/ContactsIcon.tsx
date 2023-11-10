import React, { FC } from 'react'

import { SvgComponentProps } from './SvgComponent.type'

export const ContactsIcon: FC<SvgComponentProps> = ({
    height,
    width,
    color,
}) => {
    const innerHeight = height || 22
    const innerWidth = width || 16
    return (
        <svg
            width={innerWidth}
            height={innerHeight}
            viewBox={`0 0 ${innerWidth} ${innerHeight}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13 1H3C1.89543 1 1 1.89543 1 3V19C1 20.1046 1.89543 21 3 21H13C14.1046 21 15 20.1046 15 19V3C15 1.89543 14.1046 1 13 1Z"
                stroke={color || 'white'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8 17H8.01"
                stroke={color || 'white'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
