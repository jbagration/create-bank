import { useEffect, useState } from 'react'
import { useGetExchangeRatesQuery } from 'src/redux/api/infoServicesApi'

import { ChangeEventType } from '../../../types/CommonTypes'

export const useCurrencyConverter = () => {
    const [fromCurrency, setFromCurrency] = useState('EUR')
    const [toCurrency, setToCurrency] = useState('RUB')

    const { data: exchangeRates } = useGetExchangeRatesQuery()

    const [amount, setAmount] = useState('1')
    const [price, setPrice] = useState(1)

    const handleChangeFromCurrency = (event: ChangeEventType) => {
        setFromCurrency(event.target.value)
    }

    const handleChangeToCurrency = (event: ChangeEventType) => {
        setToCurrency(event.target.value)
    }

    const handleSwitchCurrency = () => {
        setFromCurrency(toCurrency)
        setToCurrency(fromCurrency)
    }

    useEffect(() => {
        let fromCurrencyPrice = 1
        let toCurrencyPrice = 1

        if (fromCurrency === toCurrency) {
            setPrice(1)
            return
        }

        if (fromCurrency === 'RUB') {
            fromCurrencyPrice = 1
        }

        if (toCurrency === 'RUB') {
            toCurrencyPrice = 1
        }

        exchangeRates?.forEach((currency) => {
            if (currency.charCode === fromCurrency) {
                fromCurrencyPrice =
                    Number(currency.buyingRate) / Number(currency.nominal)
            }

            if (currency.charCode === toCurrency) {
                toCurrencyPrice =
                    Number(currency.sellingRate) / Number(currency.nominal)
            }
        })

        const newPrice = fromCurrencyPrice / toCurrencyPrice

        setPrice(newPrice)
    }, [exchangeRates, fromCurrency, toCurrency])

    return {
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
        handleChangeFromCurrency,
        handleChangeToCurrency,
        handleSwitchCurrency,
        amount,
        setAmount,
        price,
    }
}
