import { useCallback, useContext, useEffect, useState } from 'react'
import { load } from '@2gis/mapgl'
import { CircleMarker } from '@2gis/mapgl/types'
import { Button, Grid } from '@mui/material'

import {
    MyLocationBlocked,
    MyLocationHover,
    MyLocationIcon,
    ZoomInIcon,
    ZoomOutIcon,
} from '../../../../assets/svg'
import { MapContext } from '../MapContext'

import { mapControlls, mapControllsContainerStyles } from './MyLocation.styles'
import {
    handleGetPosition,
    handleZoomIn,
    handleZoomOut,
} from './MyLocation.utils'

import { createCircleOption } from './MyLocation.const'

export const MyLocation = () => {
    const [mapInstance] = useContext(MapContext)
    const [btnBlocked, setBtnBlocked] = useState(true)
    const [circleInstance, setCircleInstance] = useState<CircleMarker | null>(
        null
    )

    const handleShowPosition = useCallback(() => {
        if (!mapInstance) {
            return
        }

        load().then((mapgl) => {
            const success = (pos: GeolocationPosition) => {
                const center = [pos.coords.longitude, pos.coords.latitude]

                const circle = new mapgl.CircleMarker(
                    mapInstance,
                    createCircleOption(center)
                )

                setCircleInstance(circle)

                mapInstance.setCenter(center)
                mapInstance.setZoom(16)
                setBtnBlocked(true)
            }

            const failed = () => {
                setBtnBlocked(false)
            }

            handleGetPosition(success, failed)
        })
    }, [mapInstance])

    useEffect(() => {
        return () => {
            circleInstance && circleInstance.destroy()
        }
    }, [circleInstance])

    const GeolocationIcon = btnBlocked ? MyLocationIcon : MyLocationBlocked
    const GeolocationHoverIcon = btnBlocked
        ? MyLocationHover
        : MyLocationBlocked

    const locationStyles = mapControlls({
        GeolocationIcon,
        GeolocationHoverIcon,
    })

    const zoomInStyles = mapControlls({ ZoomInIcon })
    const zoomOutStyles = mapControlls({ ZoomOutIcon })

    return (
        <Grid sx={mapControllsContainerStyles}>
            <Button
                sx={locationStyles}
                onClick={handleShowPosition}
                disableRipple
            />
            <Button
                sx={zoomInStyles}
                onClick={() => handleZoomIn(mapInstance)}
                disableRipple
            />
            <Button
                sx={zoomOutStyles}
                onClick={() => handleZoomOut(mapInstance)}
                disableRipple
            />
        </Grid>
    )
}
