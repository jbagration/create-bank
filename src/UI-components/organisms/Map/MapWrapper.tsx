import { memo } from 'react'

export const MapWrapper = memo(
    () => {
        return (
            <div
                id="map-container"
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                }}
            />
        )
    },
    () => true
)
