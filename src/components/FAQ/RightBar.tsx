import { memo, SyntheticEvent } from 'react'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks/redux'
import { setActiveCategory } from 'src/redux/slices/faqSlice'
import { Box, Tab, Tabs, useTheme } from '@mui/material'

import { rightBarStyle } from './faq.styles'

export const RightBar = memo(() => {
    const { activeCategory, categories } = useAppSelector((state) => state.faq)
    const dispatch = useAppDispatch()
    const handleChange = (e: SyntheticEvent, newValue: number) => {
        dispatch(setActiveCategory(newValue))
    }

    const {
        palette: {
            BackAccent: { BackgroundHover },
            BackStandart: { BackgroundQuaternary },
        },
    } = useTheme()

    return (
        <Box sx={rightBarStyle}>
            <Tabs
                onChange={handleChange}
                value={activeCategory}
                sx={{ textAlign: 'left' }}
                orientation="vertical"
                TabIndicatorProps={{
                    style: {
                        left: 0,
                        width: '4px',
                        height: '40px',
                        marginTop: '3px',
                        backgroundColor: BackgroundHover,
                    },
                }}
            >
                {categories.map((tab) => (
                    <Tab
                        sx={{
                            textTransform: 'none',
                            color: 'rgba(255, 255, 255, 0.7)',
                            '&.Mui-selected': {
                                color: BackgroundQuaternary,
                            },
                        }}
                        disableTouchRipple
                        key={tab}
                        iconPosition="end"
                        label={tab}
                    />
                ))}
            </Tabs>
        </Box>
    )
})
