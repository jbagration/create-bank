import { ChangeEvent, useCallback } from 'react'
import { FaqSearchField, Questions, TagsBar } from 'src/components'
import { faqCaptionStyle } from 'src/components/FAQ/faq.styles'
import { RightBar } from 'src/components/FAQ/RightBar'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks/redux'
import { clearValue, setActive, setValue } from 'src/redux/slices/faqSlice'
import { Caption } from 'src/UI-components/atoms'
import { MainMenuPage } from 'src/UI-components/organisms'
import { Stack } from '@mui/material'

import { faqTitle, questions } from 'src/components/FAQ/faq.const'

const notFoundText = 'Совпадений не найдено'

export const FaqPage = () => {
    const { tags, value } = useAppSelector((state) => state.faq)

    const dispatch = useAppDispatch()

    const handleTagClick = useCallback((tag: string, active: boolean) => {
        if (active) {
            dispatch(clearValue())
        } else {
            dispatch(setActive(tag))
        }
    }, [])

    const handleClickClearButton = useCallback(() => {
        dispatch(clearValue())
    }, [])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        dispatch(setValue(value))
    }

    const questionsList = questions.filter(({ question, category }) => {
        const string = `${question} ${category}`
        return string.toLowerCase().includes(value.toLowerCase())
    })

    const questionsListIsEmpty = questionsList.length < 1
    const questionOrCaptionComponent = questionsListIsEmpty ? (
        <Caption sx={faqCaptionStyle} text={notFoundText} />
    ) : (
        <Questions questions={questionsList} />
    )
    const handleChangeRightBar = useCallback((value: string) => {
        dispatch(setValue(value))
    }, [])
    return (
        <MainMenuPage text={faqTitle}>
            <FaqSearchField
                value={value}
                onClick={handleClickClearButton}
                onChange={handleChange}
            />
            <TagsBar tags={tags} onClick={handleTagClick} />
            <Stack flexDirection="row" position="relative">
                {questionOrCaptionComponent}
                <RightBar />
            </Stack>
        </MainMenuPage>
    )
}
