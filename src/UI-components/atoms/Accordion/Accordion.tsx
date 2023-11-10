import { FC } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
    Accordion as AccordionMUI,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from '@mui/material'

import { accordionStyle } from './accordion.style'

type Props = {
    title: string
    description: string
}
export const Accordion: FC<Props> = ({ title, description }) => {
    const strings = description.split(/\n-/).map((str, id) => {
        return id ? `- ${str}` : str
    })

    return (
        <AccordionMUI sx={accordionStyle}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {strings.map((el, index) => (
                    <Typography key={index}>{el}</Typography>
                ))}
            </AccordionDetails>
        </AccordionMUI>
    )
}
