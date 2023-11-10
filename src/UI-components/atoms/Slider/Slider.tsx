import { FC, memo } from 'react'
import { Box, Slider, SxProps, Typography } from '@mui/material'

import type { SliderTypeProps } from './Slider.type'

import { sliderStyles, typographyStyles } from './Slider.style'

export const SliderComponent: FC<SliderTypeProps> = memo(
    ({ value, setValue, max, min, label, sx, name, start }) => {
        const sliderStylesSx = [sliderStyles({ start }), sx] as SxProps

        return (
            <>
                {label && (
                    <Box mb={5}>
                        <Typography variant="textLink2" sx={typographyStyles}>
                            {label}
                        </Typography>
                    </Box>
                )}

                <Slider
                    sx={sliderStylesSx}
                    data-testid={`slider-${name}-${max}`}
                    name={name}
                    value={value}
                    min={min}
                    max={max}
                    onChange={setValue}
                    size="medium"
                />
            </>
        )
    }
)
