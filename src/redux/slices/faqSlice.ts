import { Tag } from 'src/components/FAQ/faq.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState } from 'src/components/FAQ/faq.const'

const faqSlice = createSlice({
    name: 'faqSlice',
    initialState,
    reducers: {
        setActive(state, action: PayloadAction<string>) {
            const value = action.payload.replace('#', '')
            state.value = value
            state.activeCategory = 0
            state.tags = getListOfTagsWithActive(state.tags, action.payload)
        },
        setValue(state, action: PayloadAction<string>) {
            state.tags = makeInactive(state.tags)
            state.value = action.payload

            state.activeCategory = getActiveCategory(
                state.categories,
                action.payload
            )
        },
        clearValue(state) {
            state.value = ''
            state.tags = makeInactive(state.tags)
            state.activeCategory = 0
        },
        setActiveCategory(state, action: PayloadAction<number>) {
            if (action.payload === 0) {
                return {
                    ...state,
                    value: '',
                    activeCategory: action.payload,
                    tags: makeInactive(state.tags),
                }
            }
            state.tags = makeInactive(state.tags)
            state.activeCategory = action.payload
            state.value = state.categories[action.payload]
        },
    },
})

export const faqReducer = faqSlice.reducer
export const { setActive, setValue, clearValue, setActiveCategory } =
    faqSlice.actions

function getActiveCategory(list: string[], value: string) {
    const index = list.findIndex((category) =>
        category.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    )
    return index > 0 ? index : 0
}

function makeInactive(tags: Tag[]) {
    return tags.map((tag) => ({ ...tag, isActive: false }))
}

function getListOfTagsWithActive(tags: Tag[], value: string) {
    return tags.map((tag: Tag) => ({
        ...tag,
        isActive: tag.text === value,
    }))
}
