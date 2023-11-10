import { FC, useCallback, useContext, useEffect, useState } from 'react'
import { useGeolocation } from 'src/hooks/useGeolocation'
import { useGetFilteredBankBranchesQuery } from 'src/redux/api/infoServicesApi'
import { Directions } from '@2gis/mapgl-directions'

import Triangle from '../assets/svg/BankBranchPageSvg/ModalSvg/triangle.svg'

import { RegionNameRequestDto } from '../models/geocoder.dto'
import { useLazyGetRegionNameQuery } from '../redux/api/geocoderApi'
import { Header } from '../UI-components/molecules'
import { ButtonOpenFilterBar } from '../UI-components/molecules/FilterBar/ButtonOpenFilterBar/ButtonOpenFilterBar'
import { ModalCookieConsent } from '../UI-components/molecules/Modal/ModalCookieConsent'
import { ModalRegion } from '../UI-components/molecules/Modal/ModalRegions/ModalRegion'
import { ModalSearchCity } from '../UI-components/molecules/Modal/ModalRegions/ModalSearchCity'
import { OpenSideBar } from '../UI-components/molecules/Modal/SideBar/ButtonOpenSideBar/OpenSideBar'
import { SideBar } from '../UI-components/molecules/Modal/SideBar/SideBar'
import { Map, MapContext, MyLocation, Page } from '../UI-components/organisms'

import {
    defaultCity,
    extrasFiltersArr,
    popularFiltersArr,
    workingFiltersArr,
} from './BankBranchPage.const'

export const BankBranchPage: FC = () => {
    const [mapInstance] = useContext(MapContext)
    const [directionsInstance, setDirectionsInstance] =
        useState<Directions | null>(null)

    const [showModalRegion, setShowModalRegion] = useState(true)
    const [showModalCookie, setShowModalCookie] = useState(false)
    const [modalshow, setModalshow] = useState(false)
    const [sideBarshow, setSideBarshow] = useState(false)
    const [rotatePosition, setPosition] = useState(sideBarshow ? 0 : 180)
    const [city, setCity] = useState<string>(defaultCity.name)
    const [routeError, setRouteError] = useState(false)
    const [isRouteSuccess, setIsRouteSuccess] = useState(true)

    const [popularFilters, setPopularFilters] = useState(popularFiltersArr)
    const [workingFilters, setWorkingFilters] = useState(workingFiltersArr)
    const [extrasFilters, setExtrasFilters] = useState(extrasFiltersArr)

    const [getRegionName, { data: regionData }] = useLazyGetRegionNameQuery()

    const { data: filtersData } = useGetFilteredBankBranchesQuery([
        ...popularFilters,
        ...workingFilters,
        ...extrasFilters,
    ])

    const [variantSideBar, setVariantSideBar] = useState<
        'filtersBar' | 'bankBranchList'
    >('filtersBar')

    const rotate = () => {
        setSideBarshow((sideBarshow) => !sideBarshow)
        setVariantSideBar('filtersBar')
        if (rotatePosition === 180) {
            setPosition(0)
        } else {
            setPosition(180)
        }
    }

    useEffect(() => {
        setShowModalCookie(true)
    }, [])

    useEffect(() => {
        if (!regionData) {
            getRegionName(defaultCity.coords)
            return
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos: GeolocationPosition) => {
                    const center = [pos.coords.longitude, pos.coords.latitude]
                    mapInstance.setCenter(center)
                    const args: RegionNameRequestDto = {
                        lat: center[1],
                        lon: center[0],
                    }
                    getRegionName(args)
                    setShowModalRegion(true)
                },
                () => setShowModalRegion(false)
            )
        }
    }, [regionData, getRegionName, mapInstance])

    const handleRegionConfirmation = () => {
        setShowModalRegion(false)
        if (regionData) {
            setCity(regionData)
        }
    }

    const {
        latitude,
        longitude,
        loading,
        error: geoRouteError,
    } = useGeolocation()

    const handleRoute = useCallback(
        (coords) => {
            setRouteError(false)
            setIsRouteSuccess(false)

            if (!mapInstance) {
                return
            }

            const center = [longitude, latitude]

            const directions = new Directions(mapInstance, {
                directionsApiKey: 'rujany4131',
            })

            if (!loading && !geoRouteError) {
                directions
                    .carRoute({
                        points: [center, coords],
                    })
                    .then(() => setIsRouteSuccess(true))
                    .catch((err) => {
                        console.log('err', err)
                        setRouteError(true)
                    })

                setDirectionsInstance(directions)

                mapInstance.setCenter(center)
                mapInstance.setZoom(16)
            }
        },
        [geoRouteError, latitude, loading, longitude, mapInstance]
    )

    useEffect(() => {
        return () => {
            directionsInstance && directionsInstance.clear()
        }
    }, [directionsInstance])

    useEffect(() => {
        const enableScroll = () => {
            document.body.style.overflow = ''
        }
        window.addEventListener('beforeunload', enableScroll)

        return () => {
            window.removeEventListener('beforeunload', enableScroll)
        }
    }, [])

    const sideBarConfig = {
        city,
        show: sideBarshow,
        setShow: setModalshow,
        variantSideBar,
        setVariantSideBar,
        handleRoute,
        geoRouteError: !!geoRouteError,
        routeError,
        isRouteSuccess,
        popularFilters,
        workingFilters,
        extrasFilters,
        setPopularFilters,
        setWorkingFilters,
        setExtrasFilters,
    }

    return (
        <>
            <Page>
                <Header main={false} />
                <SideBar config={sideBarConfig} />

                <ModalRegion
                    title="Ваш регион"
                    city={city}
                    setCity={setCity}
                    showModalRegion={showModalRegion}
                    setShowModalRegion={setShowModalRegion}
                    setShow={setModalshow}
                    onConfirm={handleRegionConfirmation}
                />
                <ModalSearchCity
                    city={city}
                    setCity={setCity}
                    show={modalshow}
                    setShow={setModalshow}
                />

                <Map
                    show={sideBarshow}
                    setShow={setSideBarshow}
                    setVariantSideBar={setVariantSideBar}
                    filtersData={filtersData}
                    sideBarshow={sideBarshow}
                    city={city}
                />
            </Page>
            <OpenSideBar onClick={rotate}>
                <img
                    src={Triangle}
                    alt=""
                    style={{ transform: `rotate(${`${rotatePosition}deg`})` }}
                />
            </OpenSideBar>
            <ButtonOpenFilterBar
                show={sideBarshow}
                setShow={setSideBarshow}
                setPosition={setPosition}
                setVariantSideBar={setVariantSideBar}
                variantSideBar={variantSideBar}
            />
            <MyLocation />
            <ModalCookieConsent
                showModalCookie={showModalCookie}
                setShowModalCookie={setShowModalCookie}
            />
        </>
    )
}
