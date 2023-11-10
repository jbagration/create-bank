import { FC } from 'react'
import { Box, Grid, Typography } from '@mui/material'

import { WorkTimeBranch } from '../BankBranchList/DetailsBranch/WorktimeBranch'

import { defineIconAndName } from './BasicBranch.utils'

import { entriesIconsBankBranch } from '../BankBranchList/BankBranchList.const'

import {
    basicBranchContainerStyles,
    branchInfoContainerStyles,
    branchTimeText,
    workTimeContainerStyles,
} from './BasicBranch.style'

import { BasicBranchProps } from './BasicBranch.type'

export const BasicBranch: FC<BasicBranchProps> = ({
    bankBranchType,
    branchNumber,
    branchAddress,
    closed,
    openingTime,
    closingTime,
}) => {
    const { iconBankBranch, nameBankBranch } = defineIconAndName(
        entriesIconsBankBranch,
        bankBranchType
    )
    const branchTimeTextStyles = branchTimeText({ closed })

    return (
        <Grid sx={basicBranchContainerStyles}>
            <Grid sx={branchInfoContainerStyles}>
                <img src={iconBankBranch} alt="выбранное отделение банка" />
                <Grid pl={6.5}>
                    <Typography variant="strong2">
                        {`${nameBankBranch}  № ${branchNumber}`}
                    </Typography>
                    <Typography variant="body2" data-testid="branch-address">
                        {branchAddress}
                    </Typography>
                </Grid>
            </Grid>

            <Box sx={workTimeContainerStyles}>
                <Typography sx={branchTimeTextStyles} variant="body2">
                    {closed ? 'Закрыто сейчас' : 'Открыто сейчас'}
                </Typography>

                <WorkTimeBranch
                    openingTime={openingTime}
                    closingTime={closingTime}
                />
            </Box>
        </Grid>
    )
}
