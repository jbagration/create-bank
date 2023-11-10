import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import {
    RegionNameRequestDto,
    RegionNameResponseDto,
} from '../../models/geocoder.dto'

const BASE_QUERY_URL = 'https://catalog.api.2gis.com/3.0/items'
const API_KEY = 'rudzyn3541'

export const geocoderApi = createApi({
    reducerPath: 'geocoderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_QUERY_URL,
    }),
    endpoints: (builder) => ({
        getRegionName: builder.query<string, RegionNameRequestDto>({
            query: (args) =>
                `geocode?lat=${args.lat}&lon=${args.lon}&fields=items.point&key=${API_KEY}`,
            transformResponse: (response: RegionNameResponseDto) =>
                response.result.items[0].full_name.split(',')[0],
        }),
    }),
})

export const { useLazyGetRegionNameQuery } = geocoderApi
