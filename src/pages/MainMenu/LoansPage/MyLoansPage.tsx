import { Preloader } from 'src/assets'
import {
    LoanApprovalNotice,
    MyCreditCardsContainer,
    MyCreditOrdersContainer,
    MyCreditsContainer,
} from 'src/components/Loans'
import { useGetLoansData } from 'src/components/Loans/hooks'

export const MyLoansPage = () => {
    const {
        cardsData,
        creditsData,
        ordersData,
        loadingCardsData,
        loadingCreditsData,
        loadingOrdersData,
        successCardsData,
        successCreditsData,
        successOrdersData,
    } = useGetLoansData()

    const preloaderCredits = loadingCreditsData && <Preloader />

    const creditContainer = successCreditsData && !!creditsData && (
        <MyCreditsContainer data={creditsData} />
    )

    const preLoaderCards = loadingCardsData && <Preloader />

    const cardsContainer = successCardsData && !!cardsData && (
        <MyCreditCardsContainer data={cardsData} />
    )

    const preLoaderOrders = loadingOrdersData && <Preloader />

    const ordersContainer = successOrdersData && !!ordersData && (
        <MyCreditOrdersContainer data={ordersData} />
    )
    return (
        <>
            <LoanApprovalNotice />
            {preloaderCredits}
            {creditContainer}
            {preLoaderCards}
            {cardsContainer}
            {preLoaderOrders}
            {ordersContainer}
        </>
    )
}
