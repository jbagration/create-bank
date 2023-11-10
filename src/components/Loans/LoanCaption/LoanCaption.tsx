import { NavLink } from 'react-router-dom'
import { captionStyles, linkStyles } from 'src/common/common.styles'
import { Caption } from 'src/UI-components/atoms'
import { MainMenuPage } from 'src/UI-components/organisms'
import { Typography } from '@mui/material'

import { captionText, myLoansText } from '../loans.const'

export const LoanCaption = () => {
    return (
        <MainMenuPage text={myLoansText}>
            <Caption component sx={captionStyles}>
                <>
                    {captionText[0]}{' '}
                    <NavLink to="products">
                        <Typography sx={linkStyles}>
                            {captionText[1]}
                        </Typography>
                    </NavLink>{' '}
                    {captionText[2]}{' '}
                    <NavLink to="products">
                        <Typography sx={linkStyles}>
                            {captionText[3]}
                        </Typography>
                    </NavLink>{' '}
                    {captionText[4]}
                </>
            </Caption>
        </MainMenuPage>
    )
}
