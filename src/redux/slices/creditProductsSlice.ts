import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { NewApply } from 'src/components/Loans/ApplyForm/ApplyForm.type'

type CreditProductFields = Omit<NewApply, 'creationDate'>

export type CreditProductFormState = {
    productFields: CreditProductFields
    files: FileList[]
    documentsForLoan: (FileList | null)[]
    passport: File | null
    incomeStatement: File | null
}

const initialState: CreditProductFormState = {
    productFields: {
        amount: 0,
        periodMonths: 0,
        monthlyIncome: '',
        monthlyExpenditure: '',
        employerIdentificationNumber: '',
        productId: 0,
    },
    files: [] as FileList[],
    documentsForLoan: [null, null],
    passport: null,
    incomeStatement: null,
}
type DocType = 'passport' | 'incomeStatement'
type DocumentForLoan = {
    file: File
    type: string
}
export const creditProductFormSlice = createSlice({
    name: 'creditProducts',
    initialState,
    reducers: {
        saveCreditState(state, action: PayloadAction<CreditProductFields>) {
            state.productFields = action.payload
        },
        setDocumentsForLoan(state, action: PayloadAction<DocumentForLoan>) {
            if (action.payload.type === 'passport') {
                state.passport = action.payload.file
            } else {
                state.incomeStatement = action.payload.file
            }
        },
        deleteDocument(state, action: PayloadAction<string>) {
            if (action.payload === 'passport') {
                state.passport = null
            } else {
                state.incomeStatement = null
            }
        },
        clearDocumentsForLoan(state) {
            state.passport = null
            state.incomeStatement = null
        },
        resetCreditState(state) {
            state.files = []
            state.productFields = {
                amount: 0,
                periodMonths: 0,
                monthlyIncome: '',
                monthlyExpenditure: '',
                employerIdentificationNumber: '',
                productId: 0,
            }
        },
    },
})

export const { reducer: creditProductFormReducer } = creditProductFormSlice
export const {
    saveCreditState,
    setDocumentsForLoan,
    deleteDocument,
    clearDocumentsForLoan,
    resetCreditState,
} = creditProductFormSlice.actions
