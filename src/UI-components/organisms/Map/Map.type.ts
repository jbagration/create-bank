import { FilterDataType } from 'src/models/info.dto'

export interface MapProps {
    setVariantSideBar: Function
    setShow?: Function
    show?: Boolean
    filtersData?: FilterDataType[]
    sideBarshow: boolean
    city: string
}

export interface ButtonType {
    GeolocationIcon: string
    GeolocationHoverIcon: string
    ZoomInIcon: string
    ZoomOutIcon: string
}
