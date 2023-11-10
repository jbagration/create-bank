import { FC, useCallback, useContext, useEffect, useState } from 'react'
import { Atm, MarkerBank, MarkerBankHover, MarkerPointer } from 'src/assets/svg'
import { useGetBankBranchesQuery } from 'src/redux/api/infoServicesApi'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks/redux'
import {
    addBranches,
    addMarkersBankBranches,
    BankBranchesState,
    selectItemAndSearchValue,
} from 'src/redux/slices/bankBranchSlice'
import { swapAndMakeNumberElements } from 'src/utils'
import { load } from '@2gis/mapgl'
import { Map as MapInstanceType } from '@2gis/mapgl/types'
import {
    Clusterer,
    ClustererPointerEvent,
    InputMarker,
} from '@2gis/mapgl-clusterer'
import { Box } from '@mui/system'

import { MapContext } from './MapContext'
import { MapWrapper } from './MapWrapper'

import { clusererOptions, mapOptions } from './Map.const'

import { MapProps } from './Map.type'

export const Map: FC<MapProps> = ({
    setVariantSideBar,
    setShow,
    filtersData,
    sideBarshow,
    city,
}) => {
    const [mapInstance, setMapInstance] = useContext(MapContext)
    const [clustererInstance, setClustererInstance] =
        useState<Clusterer | null>(null)

    const selectedBankBranch = useAppSelector(
        (store) => store.branches.selectedBankBranch
    )

    const dispatch = useAppDispatch()

    const markersBankBranches = useAppSelector(
        (store) => store.branches.markersBankBranch
    )

    const bankBranches = useAppSelector((store) => store.branches.bankBranches)

    const { data: validBankBranches, isSuccess } = useGetBankBranchesQuery()

    useEffect(() => {
        let map: MapInstanceType

        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', mapOptions)

            setMapInstance(map)
        })

        return () => map && map.destroy()
    }, [setMapInstance])

    useEffect(() => {
        if (isSuccess && filtersData) {
            const filteredBankBranches = validBankBranches.filter(
                (bankBranchItem) => {
                    return filtersData.some(
                        (filterItem) =>
                            filterItem.branchCoordinates ===
                                bankBranchItem.branchCoordinates &&
                            bankBranchItem.city === city
                    )
                }
            )

            dispatch(addBranches(filteredBankBranches))
        }
    }, [city, dispatch, filtersData, isSuccess, validBankBranches])

    useEffect(() => {
        if (!bankBranches) {
            return
        }

        const markers: InputMarker[] = []
        let marker: InputMarker
        bankBranches?.forEach((bankBranch: BankBranchesState) => {
            const { bankBranchType, branchCoordinates, branchNumber } =
                bankBranch

            const branchCoords = swapAndMakeNumberElements(branchCoordinates)

            const branchIcon =
                bankBranchType === 'LOCAL_BRANCH'
                    ? MarkerBank
                    : bankBranchType === 'ATM'
                    ? Atm
                    : MarkerBankHover

            marker = {
                coordinates: branchCoords,
                icon:
                    selectedBankBranch.branchNumber === bankBranch.branchNumber
                        ? MarkerPointer
                        : branchIcon,
                hoverIcon:
                    selectedBankBranch.branchNumber === bankBranch.branchNumber
                        ? MarkerPointer
                        : branchIcon,
                userData: branchNumber,
                hoverSize:
                    selectedBankBranch.branchNumber === bankBranch.branchNumber
                        ? [48, 64]
                        : [46, 46],
                clickMarker: MarkerPointer,
                bankBranch,
            }

            markers.push(marker)
        })

        dispatch(addMarkersBankBranches(markers))
    }, [bankBranches, dispatch, selectedBankBranch.branchNumber])

    useEffect(() => {
        if (!mapInstance) {
            return
        }

        const instance = new Clusterer(mapInstance, clusererOptions)

        setClustererInstance(instance)

        return () => {
            if (instance) {
                instance.destroy()
            }
        }
    }, [mapInstance])

    useEffect(() => {
        if (!clustererInstance) {
            return
        }

        clustererInstance.load(markersBankBranches)
    }, [clustererInstance, markersBankBranches])

    const changeMarkerState = useCallback(
        (e: ClustererPointerEvent | any) => {
            if (!markersBankBranches.length) {
                return
            }
            if (e.target.type === 'cluster') {
                const zoomExpandLevel =
                    clustererInstance?.getClusterExpansionZoom(e.target.id)

                mapInstance.setCenter(e.lngLat)
                mapInstance.setZoom(zoomExpandLevel)

                return
            }

            if (e.target.type === 'marker') {
                setShow && setShow(false)

                bankBranches.forEach((bankBranch) => {
                    const { branchCoordinates, branchNumber, branchAddress } =
                        bankBranch
                    const { userData: markerNumber } = e.target.data

                    if (branchNumber === markerNumber) {
                        if (selectedBankBranch.branchNumber === branchNumber) {
                            dispatch(
                                selectItemAndSearchValue({
                                    bankBranch: {},
                                    searchValue: '',
                                })
                            )
                        } else {
                            const branchCoords =
                                swapAndMakeNumberElements(branchCoordinates)

                            mapInstance.setCenter(branchCoords)

                            dispatch(
                                selectItemAndSearchValue({
                                    bankBranch,
                                    searchValue: branchAddress,
                                })
                            )
                        }
                    }
                })
            }
            setVariantSideBar('bankBranchList')
        },
        [
            bankBranches,
            clustererInstance,
            dispatch,
            mapInstance,
            markersBankBranches.length,
            selectedBankBranch,
            setShow,
            setVariantSideBar,
        ]
    )

    useEffect(() => {
        if (!clustererInstance) {
            return
        }

        clustererInstance.on('click', changeMarkerState)

        return () => {
            clustererInstance.off('click', changeMarkerState)
        }
    }, [changeMarkerState, clustererInstance])

    useEffect(() => {
        if (!mapInstance) {
            return
        }

        const onWindowResize = () => {
            mapInstance.invalidateSize()
        }

        window.addEventListener('resize', onWindowResize)

        return () => {
            window.removeEventListener('resize', onWindowResize)
        }
    }, [mapInstance])

    useEffect(() => {
        if (!mapInstance) {
            return
        }

        const sidebar = document.getElementById('sidebar')

        if (!sidebar) {
            return
        }

        const sidebarWidth = parseFloat(
            getComputedStyle(sidebar as HTMLElement).width
        )

        if (!sideBarshow) {
            mapInstance.setPadding({
                top: 0,
                right: 0,
                bottom: 0,
                left: sidebarWidth,
            })
        } else {
            mapInstance.setPadding({ top: 0, right: 0, bottom: 0, left: 0 })
        }
    }, [mapInstance, sideBarshow])

    return (
        <Box height="calc(100vh - 64px)">
            <MapWrapper />
        </Box>
    )
}
