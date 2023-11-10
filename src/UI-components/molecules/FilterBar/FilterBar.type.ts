import { Filters } from 'src/pages/BankBranchPage.type'

export interface ArraysType {
    extras: string[]
    popular: string[]
    working: string[]
    cities: string[]
    images: imagesProp
}

export interface FiltersProps {
    icons: 'extras' | 'popular' | 'working'
    imageSrc?: string
    arrays?: ArraysType
    filter?: string
    title?: string
    variant?: 'certainBankBranch' | 'filterBar'
    setFilters?: Function
    filtersArray: Filters
}

export interface FilterProps
    extends Omit<FiltersProps, 'variant' | 'filtersArray'> {
    filterKey: string
    isActive?: boolean
}
export interface imagesProp {
    popular: string[]
    working: string[]
    extras: string[]
}
