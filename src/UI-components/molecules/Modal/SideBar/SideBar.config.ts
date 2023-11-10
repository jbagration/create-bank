import { Filters } from 'src/pages/BankBranchPage.type'

export interface SideBarConfig {
    city: string
    show: boolean
    setShow: (show: boolean) => void
    variantSideBar: 'filtersBar' | 'bankBranchList'
    setVariantSideBar: (variant: 'filtersBar' | 'bankBranchList') => void
    handleRoute: (coords: any) => void
    geoRouteError: boolean
    routeError: boolean
    isRouteSuccess: boolean
    popularFilters: Filters
    workingFilters: Filters
    extrasFilters: Filters
    setPopularFilters: (filters: Filters) => void
    setWorkingFilters: (filters: Filters) => void
    setExtrasFilters: (filters: Filters) => void
}
