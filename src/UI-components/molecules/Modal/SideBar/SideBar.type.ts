import { Filters } from 'src/pages/BankBranchPage.type'

export interface SideBarProps {
    show: boolean
    city: string
    setShow: Function
    children?: React.ReactNode
    variantSideBar?: 'filtersBar' | 'bankBranchList'
    setVariantSideBar: Function
    handleRoute: Function
    geoRouteError: Boolean
    routeError: Boolean
    isRouteSuccess: Boolean
    popularFilters: Filters
    workingFilters: Filters
    extrasFilters: Filters
    setPopularFilters: Function
    setWorkingFilters: Function
    setExtrasFilters: Function
}

export type ModalProps = SideBarProps
