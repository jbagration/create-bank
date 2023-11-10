import { FC } from 'react'

import { CitySelector } from '../Modal/ModalRegions/CitySelector'

import { Filters } from './Filter/Filters'

import { FiltersBarProps } from '../Modal/ModalRegions/ModalRegions.type'

export const FiltersBar: FC<FiltersBarProps> = ({
    city,
    setShow,
    popularFilters,
    workingFilters,
    extrasFilters,
    setPopularFilters,
    setWorkingFilters,
    setExtrasFilters,
}) => {
    return (
        <>
            <CitySelector variant="main" city={city} setShow={setShow} />
            <Filters
                title="Популярные запросы"
                icons="popular"
                setFilters={setPopularFilters}
                filtersArray={popularFilters}
            />
            <Filters
                title="График работы"
                icons="working"
                setFilters={setWorkingFilters}
                filtersArray={workingFilters}
            />
            <Filters
                title="Дополнительно"
                icons="extras"
                setFilters={setExtrasFilters}
                filtersArray={extrasFilters}
            />
        </>
    )
}
