import { FC } from 'react'
import { Grid, Typography } from '@mui/material'

import { citySelectorTypographyStyles, cityStyles } from './ModalRegion.style'

import { CitySelectorProps } from './ModalRegions.type'

export const CitySelector: FC<CitySelectorProps> = ({
    variant,
    city,
    setShow,
    ...props
}) => {
    const cityStylesSx = cityStyles()

    return (
        <>
            {variant === 'modal' && (
                <>
                    <Typography variant="subtitle3" color="Text.TextPrimary">
                        Вы здесь:
                    </Typography>

                    <Typography
                        variant="strong1"
                        color="Text.TextPrimary"
                        sx={{
                            pl: 2,
                        }}
                    >
                        {city}
                    </Typography>
                </>
            )}

            {variant === 'main' && (
                <Grid ml={0} alignItems="flex-start">
                    <Typography
                        variant="subtitle2"
                        sx={citySelectorTypographyStyles}
                    >
                        <Typography pr={2}>
                            Банкоматы и отделения в городе
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            sx={cityStylesSx}
                            onClick={() => setShow(true)}
                        >
                            {city}
                        </Typography>
                    </Typography>
                </Grid>
            )}
        </>
    )
}
