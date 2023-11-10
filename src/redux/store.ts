import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { api } from './api/api'
import { geocoderApi } from './api/geocoderApi'
import { authReducer } from './slices/auth'
import { branchReducer } from './slices/bankBranchSlice'
import { creditProductFormReducer } from './slices/creditProductsSlice'
import { depositProductsReducer } from './slices/depositProductsSlice'
import { faqReducer } from './slices/faqSlice'
import { myCardsReducer } from './slices/myCardsSlice'
import { errorNotificationMiddleware, logoutMiddleware } from './middlewares'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: [
        api.reducerPath,
        geocoderApi.reducerPath,
        'branches',
        'cardProducts',
    ],
}

export const rootReducer = combineReducers({
    auth: authReducer,
    branches: branchReducer,
    depositProducts: depositProductsReducer,
    creditProductForm: creditProductFormReducer,
    faq: faqReducer,
    myCards: myCardsReducer,
    [geocoderApi.reducerPath]: geocoderApi.reducer,
    [api.reducerPath]: api.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
                ignoredPaths: [
                    'creditProductForm.passport',
                    'creditProductForm.incomeStatement',
                ],
            },
        }).concat(
            api.middleware,
            geocoderApi.middleware,
            logoutMiddleware,
            errorNotificationMiddleware
        ),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
