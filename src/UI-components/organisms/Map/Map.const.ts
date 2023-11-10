import { ClusterIcon } from 'src/assets/svg'
import { MapOptions } from '@2gis/mapgl/types'
import { ClustererOptions } from '@2gis/mapgl-clusterer/dist/types/types'

export const API_KEY = '042b5b75-f847-4f2a-b695-b5f58adc9dfd'

export const mapOptions: MapOptions = {
    copyright: 'bottomLeft',
    center: [37.65, 55.74],
    zoom: 12,
    zoomControl: false,
    key: API_KEY,
}

export const clusererOptions: ClustererOptions = {
    radius: 60,
    clusterStyle: {
        icon: `${ClusterIcon}`,
        labelFontSize: 16,
    },
}
