import { Filters } from 'src/pages/BankBranchPage.type'

export interface ModalRegionsProps {
    showModalRegion: boolean
    setShowModalRegion: React.Dispatch<React.SetStateAction<boolean>>
    title: string
    city: string
    setCity: React.Dispatch<React.SetStateAction<string>>
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    onConfirm?: () => void
    children?: React.ReactNode
}

export interface FiltersBarProps {
    variant?: 'main' | 'modal'
    city?: string
    setShow: Function
    popularFilters: Filters
    workingFilters: Filters
    extrasFilters: Filters
    setPopularFilters: Function
    setWorkingFilters: Function
    setExtrasFilters: Function
}

export interface CitySelectorProps
    extends Pick<FiltersBarProps, 'variant' | 'city' | 'setShow'> {}

export interface ModalSearchProps {
    show: boolean
    city: string
    setCity: Function
    setShow: Function
    children?: React.ReactNode
}

export interface DialogStylesProps {
    modalVariant?: 'geolocation' | 'searchCity'
}
