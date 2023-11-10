import { useFormContext } from 'react-hook-form'
import { Button } from 'src/UI-components/atoms'
import { Grid } from '@mui/material'

export const ApplyForDepositSubmitButton = () => {
    const {
        formState: { errors, dirtyFields },
    } = useFormContext()

    const isDisabled = !!errors.amountToPay || !dirtyFields.amountToPay
    return (
        <Grid item>
            <Button
                sx={{ marginTop: '64px' }}
                type="submit"
                size="long"
                buttonVariant="primary"
                disabled={isDisabled}
            >
                Заказать
            </Button>
        </Grid>
    )
}
