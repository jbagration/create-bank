import React from 'react'
import { Dialog, DialogActions, DialogContent, Grid } from '@mui/material'

import { PopularCities } from '../../PopularCities'
import { Search } from '../../Search/Search'
import { ModalActionButton } from '../ModalActionButton/ModalActionButton'

import { CitySelector } from './CitySelector'

import {
    dialogActionsStyles,
    dialogContentStyles,
    dialogStyles,
} from './ModalRegion.style'

import { ModalSearchProps } from './ModalRegions.type'

export const ModalSearchCity = React.memo(
    ({ city, show, setShow, setCity }: ModalSearchProps) => {
        const onCloseModal = (e: React.MouseEvent<HTMLElement>) => {
            e.stopPropagation()
            setShow(false)
        }

        const dialogActionsStylesSx = dialogActionsStyles()
        const searchCityDialogStyles = dialogStyles({
            modalVariant: 'searchCity',
        })

        return (
            <Dialog
                sx={searchCityDialogStyles}
                disableAutoFocus
                disableEnforceFocus
                disableEscapeKeyDown
                maxWidth={false}
                open={show}
                onClose={onCloseModal}
                data-testid="modal-search-city"
            >
                <DialogContent sx={dialogContentStyles}>
                    <DialogActions sx={dialogActionsStylesSx}>
                        <ModalActionButton
                            modalAction="close"
                            onClick={onCloseModal}
                        />
                    </DialogActions>
                    <Grid mt={-3} ml={10}>
                        <CitySelector
                            variant="modal"
                            city={city}
                            setShow={setShow}
                        />
                        <Search
                            variant="searchCity"
                            setShow={setShow}
                            setCity={setCity}
                            bankBranches={[]}
                        />

                        <PopularCities setShow={setShow} setCity={setCity} />
                    </Grid>
                </DialogContent>
            </Dialog>
        )
    }
)
