import { FC } from 'react'
import cardIcon from 'src/assets/img/MainPageScroll/cardIcon.png'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { arrayObjectsServices } from './BlockServ.data'

import {
    containerGrid,
    itemStyle,
    serviceDescriptionFont,
    serviceHeaderFont,
    sxBox,
} from './BlockServ.style'

export const BlockServices: FC = () => {
    return (
        <Grid sx={containerGrid} container>
            {arrayObjectsServices.map((itemArr) => (
                <Grid
                    key={`${itemArr.head[0]} ${itemArr.head[1]}`}
                    sx={itemStyle}
                    item
                >
                    <Box
                        sx={{
                            ...sxBox,
                            height: 70,
                        }}
                    >
                        <img src={cardIcon} alt="Card icon" />
                    </Box>
                    <Box sx={sxBox}>
                        <Typography sx={serviceHeaderFont}>
                            {itemArr.head[0]} {itemArr.head[1]}
                        </Typography>
                    </Box>
                    <Box sx={sxBox}>
                        <Typography sx={serviceDescriptionFont}>
                            {itemArr.description}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            ...sxBox,
                            height: 132,
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            src={itemArr.image}
                            alt={`${itemArr.head[0]} ${itemArr.head[1]}`}
                        />
                    </Box>
                </Grid>
            ))}
        </Grid>
    )
}
