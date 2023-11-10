import React, { useEffect } from 'react'
import { Box, Dialog, DialogContent, Grid, Typography } from '@mui/material'

import arrowIcon from '../../../../assets/svg/BankBranchPageSvg/ModalSvg/arrowIcon.svg'

import { Button } from '../../../atoms'

import {
    dialogContentStyles,
    dialogStyles,
    modalRegionTypographyCityStyles,
    modalRegionTypographyStyles,
} from './ModalRegion.style'

import { ModalRegionsProps } from './ModalRegions.type'

export const ModalRegion = React.memo(
    ({
        title,
        city,
        setShowModalRegion,
        showModalRegion,
        setShow,
    }: ModalRegionsProps) => {
        const onCloseModal = (e: React.MouseEvent<HTMLElement>) => {
            e.stopPropagation()
            setShowModalRegion(false)
        }
        const onChangeModal = (e: React.MouseEvent<HTMLElement>) => {
            e.stopPropagation()
            setShow(true)
            setShowModalRegion(false)
        }

        useEffect(() => {
            setShowModalRegion(showModalRegion)
        }, [setShowModalRegion, showModalRegion])

        const geolocationDialogStyles = dialogStyles({
            modalVariant: 'geolocation',
        })

        return (
            <Dialog
                title={title}
                sx={geolocationDialogStyles}
                disableAutoFocus
                disableEnforceFocus
                disableEscapeKeyDown
                maxWidth={false}
                hideBackdrop
                open={showModalRegion}
                onClose={onCloseModal}
                data-testid="modal-region"
            >
                <DialogContent sx={dialogContentStyles}>
                    <Typography
                        variant="subtitle3"
                        mt={4}
                        sx={modalRegionTypographyStyles}
                        data-testid="modal-region-title"
                    >
                        {title}
                    </Typography>
                    <Grid
                        container
                        wrap="wrap"
                        mt={2.5}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <img
                            src={arrowIcon}
                            style={{
                                width: 18,
                                height: 18,
                                marginTop: 4,
                                marginRight: 7,
                            }}
                            alt="Icon"
                        />
                        <Typography
                            variant="subtitle2"
                            sx={modalRegionTypographyCityStyles}
                        >
                            {city}
                        </Typography>
                    </Grid>
                    <Box
                        sx={{
                            margin: '15px 10px 12px 10px',
                        }}
                    >
                        <Button
                            onClick={onCloseModal}
                            variant="contained"
                            size="small"
                            buttonVariant="primary"
                            sx={{
                                mr: 4,
                            }}
                        >
                            Да, верно
                        </Button>
                        <Button
                            onClick={onChangeModal}
                            variant="contained"
                            size="small"
                            buttonVariant="secondary"
                            data-testid="city-change-button"
                        >
                            Нет, изменить
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
        )
    }
)
