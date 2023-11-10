import { Map } from '@2gis/mapgl/types'

export const handleZoomOut = (mapInstance: Map) => {
    const myZoom = mapInstance.getZoom()
    mapInstance.setZoom(myZoom + 1)
}

export const handleZoomIn = (mapInstance: Map) => {
    const myZoom = mapInstance.getZoom()
    mapInstance.setZoom(myZoom - 1)
}

export const handleGetPosition = (
    success: PositionCallback,
    failed: PositionErrorCallback
) => {
    navigator.geolocation.getCurrentPosition(success, failed)
}
