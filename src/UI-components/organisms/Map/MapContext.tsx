import { createContext, useState } from 'react'

export const MapContext = createContext<any>([undefined, () => {}])
export const MapProvider = (props: any) => {
    const [mapInstance, setMapInstance] = useState()

    return (
        <MapContext.Provider value={[mapInstance, setMapInstance]}>
            {props.children}
        </MapContext.Provider>
    )
}
