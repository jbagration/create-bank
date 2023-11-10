import { FC } from 'react'
import _ from 'lodash'

import { Separator } from './Separator'

type RadialSeparatorsProps = {
    style: React.CSSProperties
    count: number
}
export const RadialSeparators: FC<RadialSeparatorsProps> = ({
    count,
    style,
}) => {
    const turns = 1 / count

    return (
        <>
            {_.range(count).map((index) => (
                <Separator key={index} turns={index * turns} style={style} />
            ))}
        </>
    )
}
