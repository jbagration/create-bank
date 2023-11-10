import { FC } from 'react'
import { Button } from 'src/UI-components/atoms'
import { Grid } from '@mui/material'

import { myDocumentsText, orderText } from '../loans.const'

interface Props {
    onClick: () => void
    isDisabled: boolean
}

export const ApplyFormButtons: FC<Props> = ({ onClick, isDisabled }) => {
    return (
        <>
            <Grid item md={6}>
                <Button size="long" type="button" cancel onClick={onClick}>
                    {myDocumentsText}
                </Button>
            </Grid>
            <Grid item md={6}>
                <Button
                    disabled={isDisabled}
                    type="submit"
                    size="long"
                    buttonVariant="primary"
                >
                    {orderText}
                </Button>
            </Grid>
        </>
    )
}
