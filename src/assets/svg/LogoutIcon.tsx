import React, { FC } from 'react'

import { SvgComponentProps } from './SvgComponent.type'

export const LogoutIcon: FC<SvgComponentProps> = ({ height, width, color }) => {
    const innerHeight = height || 24
    const innerWidth = width || 24
    return (
        <svg
            width={innerWidth}
            height={innerHeight}
            viewBox={`0 0 ${innerWidth} ${innerHeight}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 21V19H4V5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12Z"
                fill={color || '#212529'}
            />
            <path
                d="M15.6 8.4L17 7L22 12L17 17L15.6 15.6L18.2 13H8V11H18.2L15.6 8.4Z"
                fill={color || '#212529'}
            />
        </svg>
    )
}
