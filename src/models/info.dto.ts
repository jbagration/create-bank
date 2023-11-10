export interface DataType {
    charCode: string
    name: string
    buyingRate: string
    sellingRate: string
    nominal: string
}

export interface FilterDataType {
    branchCoordinates: string
    id: string
}

export interface FilterSingleKeyType {
    [key: string]: string
}
