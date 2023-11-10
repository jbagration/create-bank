import React, {
    FC,
    memo,
    SyntheticEvent,
    useContext,
    useEffect,
    useState,
} from 'react'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import { Box, InputAdornment, Typography } from '@mui/material'
import { createFilterOptions } from '@mui/material/Autocomplete'

import { ReactComponent as PlaceIcon } from '../../../assets/svg/BankBranchPageSvg/SearchBar/placeIcon.svg'
import { ReactComponent as SearchIcon } from '../../../assets/svg/BankBranchPageSvg/SearchBar/searchIcon.svg'
import { ReactComponent as CloseBtn } from '../../../assets/svg/CloseBtn.svg'

import { BankBranchesState } from '../../../redux/slices/bankBranchSlice'
import { sxType } from '../../../types'
import { MapContext } from '../../organisms/Map/MapContext'

import { cities } from '../FilterBar/Filter/Filter.const'

import { StyledAutocomplete, svgIconStyles } from './Autocomplete.style'
import { StyledSearch } from './InputSearch.style'

import { Part } from './Search.type'

export interface SearchStyledProps {
    variant?: 'searchBranch' | 'searchCity'
    setShow: Function
    setCity: Function
    bankBranches: Array<BankBranchesState>
    setValidBankBranches?: Function
    setVariantSideBar?: Function
    selectedBankBranch?: string
}

export const Search: FC<SearchStyledProps & sxType> = memo(
    ({
        setShow,
        setCity,
        variant,
        bankBranches,
        setValidBankBranches,
        setVariantSideBar,
        sx,
        selectedBankBranch,
        ...props
    }) => {
        const [searchValue, setSearchValue] = useState<string>('')

        const [open, setOpen] = React.useState(false)
        const [mapInstance] = useContext(MapContext)

        const filterOptions = createFilterOptions({
            matchFrom: 'any',
        })

        const setBankList = (value: string) => {
            const reg = new RegExp(value, 'i')
            const bankBranchesList = bankBranches?.filter(
                (bank: { branchAddress: string }) => {
                    const result = reg.test(bank.branchAddress)
                    return result
                }
            )

            setValidBankBranches && setValidBankBranches(bankBranchesList)
        }

        useEffect(() => {
            if (selectedBankBranch) {
                setSearchValue(selectedBankBranch)
                setBankList(selectedBankBranch)
            } else {
                setSearchValue('')
                setBankList('')
            }
        }, [selectedBankBranch])

        const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'Tab') {
                return
            }
            const { value } = e.target as HTMLTextAreaElement

            setBankList(value)
            if (e.key === 'Enter') {
                if (setVariantSideBar) {
                    setVariantSideBar('bankBranchList')
                }

                if (variant === 'searchCity') {
                    const isValueCity = Object.keys(cities).some(
                        (city) => value === city
                    )

                    if (isValueCity) {
                        setCity(value)
                    }
                }

                setShow(false)
            }
        }

        const handleInputChange = (
            event: SyntheticEvent<Element, Event>,
            newInputValue: string
        ) => {
            setSearchValue(newInputValue)
            if (newInputValue.length > 0) {
                setOpen(true)
            } else {
                setOpen(false)
                setBankList('')
            }
        }

        const handleChange = (
            event: SyntheticEvent<Element, Event>,
            value: string | unknown
        ) => {
            setBankList((value || '') as string)
            if (setVariantSideBar) {
                setVariantSideBar('bankBranchList')
            }
            if (variant === 'searchCity') {
                for (const [key, coord] of Object.entries(cities)) {
                    if (key === value) {
                        mapInstance.setCenter(coord)
                        mapInstance.setZoom(12)
                        break
                    }
                }
                setCity(value)
            }
            setShow(false)
        }

        const handleClick = () => {
            setOpen(false)
            setSearchValue('')
            setBankList('')
        }

        return (
            <StyledAutocomplete
                disableClearable
                value={searchValue}
                inputValue={searchValue}
                open={open}
                onChange={handleChange}
                onClose={() => setOpen(false)}
                onInputChange={handleInputChange}
                variant={variant}
                filterOptions={filterOptions}
                disablePortal
                noOptionsText="Результатов не найдено"
                options={
                    variant === 'searchBranch'
                        ? bankBranches.map((option) => option.branchAddress)
                        : Object.keys(cities)
                }
                renderOption={(props, option: any) => {
                    const matches = match(option, searchValue, {
                        insideWords: true,
                    })
                    const parts = parse(option, matches)

                    return (
                        <li {...props}>
                            <Box sx={svgIconStyles}>
                                <PlaceIcon />
                            </Box>
                            <Typography
                                variant="body2"
                                sx={{ paddingLeft: '20px' }}
                            >
                                {parts.map((part: Part) =>
                                    part.highlight ? (
                                        <b>{part.text}</b>
                                    ) : (
                                        part.text
                                    )
                                )}
                            </Typography>
                        </li>
                    )
                }}
                renderInput={(params: any) => (
                    <StyledSearch
                        sx={sx}
                        data-testid="modal-search-city-input"
                        {...params}
                        placeholder={
                            variant === 'searchCity'
                                ? 'Введите название города'
                                : 'Поиск по адресу'
                        }
                        size="long"
                        onKeyDown={handleKey}
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <>
                                    <InputAdornment
                                        position="start"
                                        style={{ margin: '0px 19px' }}
                                    >
                                        <SearchIcon />
                                    </InputAdornment>
                                    <InputAdornment
                                        position="end"
                                        style={{
                                            margin: '0 19px',
                                            order: '3',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        {searchValue && (
                                            <CloseBtn onClick={handleClick} />
                                        )}
                                    </InputAdornment>
                                </>
                            ),
                        }}
                    />
                )}
            />
        )
    }
)
