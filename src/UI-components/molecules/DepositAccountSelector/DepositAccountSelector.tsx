import { FC, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button, DropdownMenu } from 'src/UI-components/atoms'
import { selectDepositAccountSchema } from 'src/utils'
import { yupResolver } from '@hookform/resolvers/yup'

import { FormHandler } from '../FormHandlers'

import type { DepositAccountSelectorProps } from './DepositAccountSelector.type'

import { newAccountNumber } from './DepositAccountSelector.const'

export const DepositAccountSelector: FC<DepositAccountSelectorProps> = ({
    data,
}) => {
    const navigate = useNavigate()

    const resolver = yupResolver(selectDepositAccountSchema)

    const methods = useForm({
        resolver,
        mode: 'onChange',
    })

    const {
        formState: { isValid },
        watch,
    } = methods

    const accountNumber = watch('depositAccount')

    const handleClick = () => {
        navigate('apply', {
            state: accountNumber === newAccountNumber ? null : accountNumber,
        })
    }

    const options = useMemo(() => {
        if (data) {
            return [
                {
                    text: newAccountNumber,
                    divider: false,
                },
                ...data.map((item) => ({
                    text: item.accountNumber,
                    divider: true,
                })),
            ]
        }
        return [
            {
                text: newAccountNumber,
                divider: false,
            },
        ]
    }, [data])

    return (
        <FormHandler flex="true" gapCount="24px" methods={methods}>
            <DropdownMenu
                height="short"
                placeholder="Cчет"
                label="Cчет"
                name="depositAccount"
                options={options}
                size="long"
                defaultValue=""
            />
            <Button
                type="submit"
                size="medium"
                buttonVariant="primary"
                disabled={!isValid}
                onClick={handleClick}
            >
                Далее
            </Button>
        </FormHandler>
    )
}
