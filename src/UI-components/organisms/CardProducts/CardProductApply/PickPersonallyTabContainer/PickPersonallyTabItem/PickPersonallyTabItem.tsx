import { FC, memo } from 'react'
import { LocalBranch } from 'src/assets/svg'
import { getWorkSchedule } from 'src/utils'
import { Avatar, Typography } from '@mui/material'

import { bankListBoxStyles } from '../PickPersonallyTab/PickPersonallyTab.styles'

import type { PickPersonallyTabItemProps } from './PickPersonallyTabItem.type'

import { PickPersonallyTabItemStyles } from './PickPersonallyTabItem.style'

export const PickPersonallyTabItem: FC<PickPersonallyTabItemProps> = memo(
    ({ bank, isSelected, setSelectedItem }) => {
        const time = getWorkSchedule(bank.openingTime, bank.closingTime)

        const PickPersonallyTabItemStylesSx = PickPersonallyTabItemStyles({
            isSelected,
        })

        const handleSelect = () => {
            if (isSelected) {
                setSelectedItem('')
            } else {
                setSelectedItem(bank.branchNumber)
            }
        }
        return (
            <Typography
                sx={PickPersonallyTabItemStylesSx}
                key={bank.branchNumber}
                onClick={handleSelect}
            >
                <div>
                    <Avatar
                        alt="My Image"
                        src={LocalBranch}
                        sx={{ width: '40px' }}
                    />
                </div>
                <Typography sx={bankListBoxStyles.itemWrapperRight}>
                    <Typography variant="strong2">
                        Отделение № {bank.branchNumber}
                    </Typography>
                    <Typography variant="body2">
                        {bank.branchAddress}
                    </Typography>
                    <Typography sx={bankListBoxStyles.itemFlex}>
                        <Typography
                            variant="body2"
                            sx={
                                bank.closed
                                    ? bankListBoxStyles.itemStatusValueFalse
                                    : bankListBoxStyles.itemStatusValueTrue
                            }
                        >
                            {bank.closed ? 'Закрыто сейчас' : 'Открыто сейчас'}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={bankListBoxStyles.itemShedule}
                        >
                            {time}
                        </Typography>
                    </Typography>
                </Typography>
            </Typography>
        )
    }
)
