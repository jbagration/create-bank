import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    // DownloadOutlined,
    RemoveRedEyeOutlined,
    ShareOutlined,
} from '@mui/icons-material'
import { List, ListSubheader } from '@mui/material'

import type { CardStatementProps } from './CardStatement.type'
import { CardStatementItem } from './CardStatementItem'

import { listStyles, listSubheaderStyles } from './CardStatement.style'

export const CardStatement: FC<CardStatementProps> = ({
    showModal,
    startDate,
    endDate,
    valueTableDetails,
}) => {
    const to = endDate || startDate
    const navigate = useNavigate()

    return (
        <List
            sx={listStyles}
            subheader={
                <ListSubheader sx={listSubheaderStyles}>
                    Выписка по карте
                </ListSubheader>
            }
        >
            <CardStatementItem
                icon={<RemoveRedEyeOutlined />}
                text="Показать"
                onClick={(e) => {
                    e.preventDefault()
                    navigate('/user_main/cards/my_cards/statement', {
                        state: {
                            to,
                            from: startDate,
                            ...valueTableDetails,
                        },
                    })
                }}
            />

            <CardStatementItem
                icon={<ShareOutlined />}
                text="Поделиться"
                onClick={showModal}
            />

            {/* <CardStatementItem
                icon={<DownloadOutlined />}
                onClick={fetchHistory}
                text="Скачать"
                path=""
            /> */}
        </List>
    )
}
