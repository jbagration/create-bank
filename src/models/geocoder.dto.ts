export interface RegionNameResponseDto {
    meta: Meta
    result: Result
}

export interface Meta {
    api_version: string
    code: number
    issue_date: string
}

export interface Result {
    items: Item[]
    total: number
}

export interface Item {
    full_name: string
    id: string
    name: string
    point: Point
    subtype: string
    subtype_specification?: string
    type: string
}

interface Point {
    lat: number
    lon: number
}

export interface RegionNameRequestDto {
    lat: number
    lon: number
}
