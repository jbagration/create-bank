import { memo } from 'react'
import { modalStyle } from 'src/common/common.styles'
import { Box, Button, Typography } from '@mui/material'

import { StyledContentContainerSmall } from '../../../molecules'

import {
    cardApplyModalStyles,
    CardProductBoxStyles,
} from './CardProductApply.styles'
import {
    btnClose,
    cardApplyDone,
    cardApplyIconCard,
    cardApplyIconPhone,
    cardApplyModalText,
} from './CardProductApplyConstants'

import { CardProductApplyModalProps } from './CardProductApplyModal.type'

export const CardProductApplyModal = memo(
    ({ active, onClose }: CardProductApplyModalProps) => {
        const CardProductBoxStylesSx = CardProductBoxStyles({ active })
        const styles = modalStyle(cardApplyModalStyles.main)
        return (
            <Box sx={CardProductBoxStylesSx}>
                <StyledContentContainerSmall sx={styles}>
                    <Button
                        size="small"
                        style={cardApplyModalStyles.btn}
                        onClick={onClose}
                    >
                        <img
                            style={cardApplyModalStyles.imgBtn}
                            src={btnClose}
                            alt="btn-close"
                        />
                    </Button>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={cardApplyModalStyles.mainBox}
                    >
                        <img
                            style={cardApplyModalStyles.imgDone}
                            src={cardApplyDone}
                            alt="icon-ok"
                        />
                        <Box
                            mt="32px"
                            mb="32px"
                            style={cardApplyModalStyles.textCenter}
                        >
                            <Typography mb="8px" variant="strong1">
                                {cardApplyModalText.title}
                            </Typography>
                            <Typography variant="body1">
                                {cardApplyModalText.message}
                            </Typography>
                        </Box>
                        <div style={cardApplyModalStyles.flex}>
                            <img
                                style={cardApplyModalStyles.imgBtn}
                                src={cardApplyIconCard}
                                alt="icon-card"
                            />
                            <Typography ml="12px" variant="strong1">
                                {cardApplyModalText.departmentName}
                            </Typography>
                        </div>
                        <Typography
                            mt="8px"
                            mb="8px"
                            variant="body1"
                            style={cardApplyModalStyles.textCenter}
                        >
                            {cardApplyModalText.mainContext}
                        </Typography>
                        <Typography variant="caption">
                            {cardApplyModalText.sheduleWeek}
                        </Typography>
                        <Typography variant="caption">
                            {cardApplyModalText.sheduleWeekend}
                        </Typography>
                        <div style={cardApplyModalStyles.flex}>
                            <Box mt="16px" style={cardApplyModalStyles.flex}>
                                <img
                                    style={cardApplyModalStyles.phone}
                                    src={cardApplyIconPhone}
                                    alt="icon-mobile"
                                />
                                <div>
                                    <Typography variant="caption">
                                        {cardApplyModalText.callRFTitle}
                                    </Typography>
                                    <Typography variant="body1">
                                        {cardApplyModalText.callRFPhone}
                                    </Typography>
                                </div>
                            </Box>
                            <Box mt="16px" style={cardApplyModalStyles.flex}>
                                <img
                                    style={cardApplyModalStyles.phone}
                                    src={cardApplyIconPhone}
                                    alt="icon-mobile"
                                />
                                <div>
                                    <Typography variant="caption">
                                        {cardApplyModalText.callAbrTitle}
                                    </Typography>
                                    <Typography variant="body1">
                                        {cardApplyModalText.callAbrPhone}
                                    </Typography>
                                </div>
                            </Box>
                        </div>
                    </div>
                </StyledContentContainerSmall>
            </Box>
        )
    }
)
