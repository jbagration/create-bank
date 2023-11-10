import { FC, MouseEvent, useContext } from 'react'
import { Button, Grid, Typography } from '@mui/material'

import { MapContext } from '../../organisms/Map/MapContext'

import { cities } from '../FilterBar/Filter/Filter.const'

import {
    citiesButtonStyles,
    citiesContainerStyles,
    citiesTitleStyles,
} from './PopularCities.style'

import { PopularCitiesProps } from './PopularCities.type'

export const PopularCities: FC<PopularCitiesProps> = ({
    setCity,
    setShow,
    ...props
}) => {
    const [mapInstance] = useContext(MapContext)

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        const { value } = event.currentTarget

        for (const [key, coord] of Object.entries(cities)) {
            if (key === value) {
                mapInstance.setCenter(coord)
                mapInstance.setZoom(12)
                break
            }
        }

        setCity(value)
        setShow(false)
    }

    return (
        <Grid mt={8}>
            <Typography variant="subtitle3" sx={citiesTitleStyles}>
                Популярные города
            </Typography>
            <Grid sx={citiesContainerStyles}>
                {Object.keys(cities).map((city, index) => {
                    return (
                        <Button
                            sx={citiesButtonStyles}
                            key={city + index}
                            value={city}
                            disableTouchRipple
                            onClick={handleClick}
                            {...props}
                        >
                            <Typography variant="body2">{city}</Typography>
                        </Button>
                    )
                })}
            </Grid>
        </Grid>
    )
}
