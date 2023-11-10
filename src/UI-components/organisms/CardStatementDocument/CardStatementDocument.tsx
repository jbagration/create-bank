import { FC, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'src/UI-components/atoms'
import { ModalActionButton } from 'src/UI-components/molecules'
import { MainMenuPage } from 'src/UI-components/organisms/MainMenuPageComponent'
import { generatePDF } from 'src/utils/generatePDF'
import { Box, useTheme } from '@mui/material'

import { CardStatementDocumentInner } from '../../molecules/CardStatement/CardStatementDocument/CardStatementDocumentInner/CardStatementDocumentInner'

import { cardStatementDocumentBoxStyles } from './CardStatementDocument.style'

export const CardStatementDocument: FC = () => {
    const navigate = useNavigate()
    const innerContainer = useRef<HTMLDivElement>(null)
    const theme = useTheme()

    const handleGeneratePDF = async () => {
        await generatePDF(innerContainer.current, theme)
        navigate(-1)
    }

    return (
        <Box sx={cardStatementDocumentBoxStyles}>
            <ModalActionButton modalAction="back" />
            <MainMenuPage text="Выписка по карте">
                <CardStatementDocumentInner ref={innerContainer} />
                <Button
                    size="long"
                    buttonVariant="primary"
                    onClick={handleGeneratePDF}
                >
                    Скачать
                </Button>
            </MainMenuPage>
        </Box>
    )
}
