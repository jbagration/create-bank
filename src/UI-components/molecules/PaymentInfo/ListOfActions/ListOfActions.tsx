import { FC } from 'react'
import { Link } from 'react-router-dom'
import {
    AccessTimeOutlined,
    RemoveRedEyeOutlined,
    StarBorderOutlined,
    SyncOutlined,
} from '@mui/icons-material'
import { List, ListItem, Typography } from '@mui/material'

import {
    addAutopayments,
    addToFavoriteText,
    paymentInfoPageTitle,
    viewHistoryText,
} from 'src/UI-components/atoms/PaymentInfo/paymentInfo.const'

import { linkStyle } from 'src/UI-components/atoms/PaymentInfo/paymentInfo.style'

interface Props {
    onClickAddFavorite: () => void
}

export const ListOfActions: FC<Props> = () => {
    return (
        <List>
            <ListItem>
                <RemoveRedEyeOutlined />
                <Link to="../" style={linkStyle}>
                    <Typography ml={3} variant="body2">
                        {paymentInfoPageTitle}
                    </Typography>
                </Link>
            </ListItem>
            <ListItem>
                <StarBorderOutlined />
                <Link to="../" style={linkStyle}>
                    <Typography ml={3} variant="body2">
                        {addToFavoriteText}
                    </Typography>
                </Link>
            </ListItem>
            <ListItem>
                <SyncOutlined />
                <Link to="../" style={linkStyle}>
                    <Typography ml={3} variant="body2">
                        {addAutopayments}
                    </Typography>
                </Link>
            </ListItem>
            <ListItem>
                <AccessTimeOutlined />
                <Link to="../" style={linkStyle}>
                    <Typography ml={3} variant="body2">
                        {viewHistoryText}
                    </Typography>
                </Link>
            </ListItem>
        </List>
    )
}
