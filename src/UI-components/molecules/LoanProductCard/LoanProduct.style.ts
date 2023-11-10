import { SxProps } from '@mui/material'

import { ButtonBoxStylesProps } from './LoanProduct.type'

export const buttonsBoxStyles = ({ flex }: ButtonBoxStylesProps): SxProps => {
    return {
        ...(flex === 'true'
            ? {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '50px',
              }
            : { display: 'block' }),
    }
}
