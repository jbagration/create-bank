import { createContext, FC, ReactNode, useContext } from 'react'

type CurrencyContextType = {
    fromCurrency: string
    toCurrency: string
    amount: string
    setAmount: Function
    price: number
}

type CurrencyProviderType = {
    children: ReactNode
    value: CurrencyContextType
}

const initialState = {
    fromCurrency: 'EUR',
    toCurrency: 'RUB',
    amount: '1',
    setAmount: () => {},
    price: 1.5,
}

const CurrencyContext = createContext<CurrencyContextType>(initialState)

const CurrencyProvider: FC<CurrencyProviderType> = ({ children, value }) => {
    return (
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    )
}

function useCurrencyContext() {
    const context = useContext(CurrencyContext)

    if (context === undefined) {
        throw new Error(
            'useCurrencyContext must be used within a CurrencyProvider'
        )
    }

    return context
}

export { CurrencyProvider, useCurrencyContext }
