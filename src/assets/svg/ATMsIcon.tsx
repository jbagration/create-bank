import React, { FC } from 'react'

import { SvgComponentProps } from './SvgComponent.type'

export const ATMsIcon: FC<SvgComponentProps> = ({ height, width, color }) => {
    const innerHeight = height || 20
    const innerWidth = width || 14
    return (
        <svg
            width={innerWidth}
            height={innerHeight}
            viewBox={`0 0 ${innerWidth} ${innerHeight}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM2 7C2 4.24 4.24 2 7 2C9.76 2 12 4.24 12 7C12 9.88 9.12 14.19 7 16.88C4.92 14.21 2 9.85 2 7Z"
                fill={color || 'white'}
            />
            <path
                d="M7 9.5C8.38071 9.5 9.5 8.38071 9.5 7C9.5 5.61929 8.38071 4.5 7 4.5C5.61929 4.5 4.5 5.61929 4.5 7C4.5 8.38071 5.61929 9.5 7 9.5Z"
                fill={color || 'white'}
            />
        </svg>
    )
}
