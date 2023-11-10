import {
    DataType,
    FilterDataType,
    FilterSingleKeyType,
} from 'src/models/info.dto'
import { UtilityOrganization } from 'src/UI-components/organisms'

import { BankBranchesState } from '../slices/bankBranchSlice'

import { api } from './api'

import { Filters } from 'src/pages/BankBranchPage.type'

export const infoServicesApi = api.injectEndpoints({
    endpoints: (build) => ({
        getExchangeRates: build.query<DataType[], void>({
            query: () => '/exchange-rates',
        }),
        getBankBranches: build.query<BankBranchesState[], void>({
            query: () => '/bank-branch',
        }),
        getFilteredBankBranches: build.query<FilterDataType[], Filters>({
            query: (args) => {
                const filterObject: FilterSingleKeyType = {}

                args.forEach((filter) => {
                    const [key] = Object.keys(filter)
                    filterObject[key] = filter[key]
                })

                return {
                    url: 'bank-branch/filters',
                    params: {
                        ...filterObject,
                    },
                }
            },
        }),
        getUtilityOrganizations: build.query<UtilityOrganization[], void>({
            query: () => 'utility-organizations',
        }),
    }),
})

export const {
    useGetExchangeRatesQuery,
    useLazyGetExchangeRatesQuery,
    useGetBankBranchesQuery,
    useLazyGetFilteredBankBranchesQuery,
    useGetFilteredBankBranchesQuery,
    useGetUtilityOrganizationsQuery,
} = infoServicesApi
