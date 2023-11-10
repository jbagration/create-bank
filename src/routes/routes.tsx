import { FC } from 'react'
import { PaymentsMobileContainer } from 'src/components/Payments/PaymentsMobile/PaymentsMobileContainer'
import { FaqPage } from 'src/pages/FaqPage'
import { FavoritePaymentPage } from 'src/pages/FavoritePaymentPage'
import { PaymentSchedulePage } from 'src/pages/MainMenu/LoansPage/PaymentSchedulePage'
import { PaymentsBankPage } from 'src/pages/MainMenu/PaymentsPage/PaymentsBankPage'
import { PaymentsMobilePage } from 'src/pages/MainMenu/PaymentsPage/PaymentsMobilePage'
import { WorkInProgressPage } from 'src/pages/WorkInProgressPage/WorkInProgressPage'
import {
    TextPolicyPrivacy,
    TextServiceRules,
} from 'src/UI-components/molecules'
import {
    FavoritesUtilitiesPage,
    FavoritesUtilityTypesPage,
} from 'src/UI-components/organisms'
import { CardStatementDocument } from 'src/UI-components/organisms/CardStatementDocument/CardStatementDocument'
import { CreditFileUpload } from 'src/UI-components/organisms/CreditFileUpload/CreditFileUpload'
import { DepositSelectorContainer } from 'src/UI-components/organisms/DepositSelectorContainer/DepositSelectorContainer'
import { FavoritesPayments } from 'src/UI-components/organisms/FavoritesPayments/FavoritesPayments'
import { FavoritesDebtPage } from 'src/UI-components/organisms/FavoritesPayments/FavoritesPaymentsPages/FavoritesDebtPage'
import { FavoritesFinancePage } from 'src/UI-components/organisms/FavoritesPayments/FavoritesPaymentsPages/FavoritesFinancePage'
import { FavoritesInfoPage } from 'src/UI-components/organisms/FavoritesPayments/FavoritesPaymentsPages/FavoritesInfoPage'
import { FavoritesInternetPage } from 'src/UI-components/organisms/FavoritesPayments/FavoritesPaymentsPages/FavoritesInternetPage'
import { FavoritesMobilePage } from 'src/UI-components/organisms/FavoritesPayments/FavoritesPaymentsPages/FavoritesMobilePage'
import { FavoritesOtherPage } from 'src/UI-components/organisms/FavoritesPayments/FavoritesPaymentsPages/FavoritesOtherPage'
import { TransferOrderDetailsContainer } from 'src/UI-components/organisms/TransferOrders/TransferOrderDetails/TransferOrderDetailsContainer'
import { UserFileUpload } from 'src/UI-components/organisms/UserFileUpload/UserFileUpload'

import {
    BankBranchPage,
    ContactPage,
    ExchangeRatePage,
    Main,
    MainMenu,
} from '../pages'
import { CardProductApplyPage } from '../pages/MainMenu/CardsPage/CardProducts/CardProductApplyPage'
import { CardProductsPage } from '../pages/MainMenu/CardsPage/CardProducts/CardProductsPage'
import { OrderCardProductsInfoPage } from '../pages/MainMenu/CardsPage/CardProducts/OrderCardProductsInfoPage'
import { MyCardPage } from '../pages/MainMenu/CardsPage/MyCards/MyCardPage'
import { MyCreditCardDetailPage } from '../pages/MainMenu/CardsPage/MyCards/MyCreditCardDetailPage'
import { MyDepositCardDetailPage } from '../pages/MainMenu/CardsPage/MyCards/MyDepositCardDetailPage'
import { DepositProductsApplyPage } from '../pages/MainMenu/DepositsPage/DepositProducts/DepositProductsApplyPage'
import { DepositProductsInfoPage } from '../pages/MainMenu/DepositsPage/DepositProducts/DepositProductsInfoPage'
import { DepositProductsOrderPage } from '../pages/MainMenu/DepositsPage/DepositProducts/DepositProductsOrderPage'
import { DepositProductsPage } from '../pages/MainMenu/DepositsPage/DepositProducts/DepositProductsPage'
import { MyDepositsInfoPage } from '../pages/MainMenu/DepositsPage/MyDeposits/MyDepositsInfoPage'
import { MyDepositsPage } from '../pages/MainMenu/DepositsPage/MyDeposits/MyDepositsPage'
import { WithdrawDepositPage } from '../pages/MainMenu/DepositsPage/WithdrawDepositPage'
import { ApplyForLoan } from '../pages/MainMenu/LoansPage/ApplyForLoan'
import { LoansProductsDetailPage } from '../pages/MainMenu/LoansPage/LoansProductsDetailPage'
import { LoansProductsPage } from '../pages/MainMenu/LoansPage/LoansProductsPage'
import { MyLoansPage } from '../pages/MainMenu/LoansPage/MyLoansPage'
import { MainPage } from '../pages/MainMenu/MainPage/MainPage'
import { PaymentInfo } from '../pages/MainMenu/PaymentsPage/PaymentInfo'
import { PaymentsInternetPage } from '../pages/MainMenu/PaymentsPage/PaymentsInternetPage'
import { PaymentsMainPage } from '../pages/MainMenu/PaymentsPage/PaymentsMainPage'
import { PaymentsUtilitiesPage } from '../pages/MainMenu/PaymentsPage/PaymentsUtilitiesPage'
import { TransfersByCardPage } from '../pages/MainMenu/TransfersPage/TransfersByCardPage'
import { TransfersByDetailsPage } from '../pages/MainMenu/TransfersPage/TransfersByDetailsPage'
import { TransfersByPhonePage } from '../pages/MainMenu/TransfersPage/TransfersByPhonePage'
import { TransfersMyselfPage } from '../pages/MainMenu/TransfersPage/TransfersMyselfPage'
import { TransfersPage } from '../pages/MainMenu/TransfersPage/TransfersPage'
import { PasswordRecoveryPage } from '../pages/PasswordRecoveryPage'
import { SignInPage } from '../pages/SignInPage'
import { SignUpPage } from '../pages/SignUpPage'
import { UserAccountPage } from '../pages/UserAccountPage'

interface Route {
    component: FC
    path: string
}

const appRoute = '/'
const BankBranchPagePath = `${appRoute}/user_main/bank_branch`
const contactPagePath = `${appRoute}/user_main/contact`
const ExchangeRatePagePath = `${appRoute}/user_main/exchange_rate`
const loginPath = `${appRoute}/login`
const userMainPath = `${appRoute}/user_main/*`

export const routes: Route[] = [
    { component: BankBranchPage, path: BankBranchPagePath },
    { component: BankBranchPage, path: '/bank_branch' },
    { component: ContactPage, path: contactPagePath },
    { component: ContactPage, path: '/contact' },
    { component: ExchangeRatePage, path: ExchangeRatePagePath },
    { component: ExchangeRatePage, path: '/exchange_rate' },

    { component: UserAccountPage, path: '/user_account' },
    { component: PasswordRecoveryPage, path: '/passwordRecovery' },
    { component: TextPolicyPrivacy, path: '/registration/policy' },
    { component: TextServiceRules, path: '/registration/rules' },
    { component: WorkInProgressPage, path: '/inWork' },
]

export const restrictedRoutes: Route[] = [
    { component: Main, path: loginPath },
    { component: SignUpPage, path: '/registration' },
    { component: SignInPage, path: '/signIn' },
]

export const privateRoutes: Route[] = [
    { component: MainMenu, path: userMainPath },
]

export const sidebarRoutes: Route[] = [
    { component: MainPage, path: '' },
    { component: FaqPage, path: 'faq' },
    { component: PaymentsMainPage, path: 'payments' },
    { component: FavoritesFinancePage, path: 'payments/financepage' },
    { component: FavoritesDebtPage, path: 'payments/financepage/debt' },
    { component: PaymentsBankPage, path: 'payments/financepage/new' },
    { component: FavoritesUtilityTypesPage, path: 'payments/utilities' },
    { component: FavoritesUtilitiesPage, path: 'payments/utilities/:type' },
    { component: PaymentsUtilitiesPage, path: 'payments/utilities/:type/new' },
    { component: FavoritesInfoPage, path: 'payments/infopage' },
    { component: FavoritesMobilePage, path: 'payments/infopage/mobile' },
    { component: PaymentsMobilePage, path: 'payments/infopage/mobile/new' },
    { component: FavoritesInternetPage, path: 'payments/infopage/internet' },
    { component: PaymentsInternetPage, path: 'payments/infopage/internet/new' },
    { component: PaymentInfo, path: 'payments/paymentconfirm' },
    { component: FavoritesOtherPage, path: 'payments/other' },
    { component: FavoritesPayments, path: 'payments/favoritespayments' },
    {
        component: FavoritePaymentPage,
        path: 'payments/favoritespayments/:transferOrderId',
    },
    {
        component: FavoritesFinancePage,
        path: 'payments/favoritespayments/financepage',
    },
    {
        component: FavoritesDebtPage,
        path: 'payments/favoritespayments/financepage/debt',
    },
    {
        component: FavoritesInfoPage,
        path: 'payments/favoritespayments/infopage',
    },
    {
        component: FavoritesMobilePage,
        path: 'payments/favoritespayments/infopage/mobile',
    },
    {
        component: PaymentsMobileContainer,
        path: 'payments/favoritespayments/infopage/mobile/new',
    },
    {
        component: FavoritesInternetPage,
        path: 'payments/favoritespayments/infopage/internet',
    },
    { component: TransfersPage, path: 'transfers' },
    { component: PaymentInfo, path: 'transfers/info' },
    { component: TransfersByPhonePage, path: 'transfers/phone' },
    { component: TransfersMyselfPage, path: 'transfers/myself' },
    { component: TransfersByCardPage, path: 'transfers/card' },
    { component: TransfersByDetailsPage, path: 'transfers/details' },
    { component: MyLoansPage, path: 'credits' },
    { component: ApplyForLoan, path: 'credits/products/apply/:id' },
    { component: LoansProductsPage, path: 'credits/products' },
    { component: LoansProductsDetailPage, path: 'credits/products/:id' },
    { component: PaymentSchedulePage, path: 'credits/:creditId/schedule' },
    { component: MyCardPage, path: 'cards/my_cards' },
    { component: CardStatementDocument, path: 'cards/my_cards/statement' },
    { component: MyCreditCardDetailPage, path: 'cards/my_cards/credit/:id' },
    {
        component: TransferOrderDetailsContainer,
        path: 'cards/my_cards/credit/:id/:transferOrderId',
    },
    { component: MyDepositCardDetailPage, path: 'cards/my_cards/deposit/:id' },
    {
        component: TransferOrderDetailsContainer,
        path: 'cards/my_cards/deposit/:id/:transferOrderId',
    },
    { component: CardProductsPage, path: 'cards/products' },
    { component: OrderCardProductsInfoPage, path: 'cards/products/:cardId' },
    {
        component: CardProductApplyPage,
        path: 'cards/products/:cardId/account/apply',
    },
    {
        component: DepositSelectorContainer,
        path: 'cards/products/:cardId/account',
    },
    { component: MyDepositsPage, path: 'deposits/my_deposits' },
    { component: MyDepositsInfoPage, path: 'deposits/my_deposits/:id' },
    { component: DepositProductsPage, path: 'deposits/products' },
    { component: DepositProductsInfoPage, path: 'deposits/products/:name' },
    {
        component: DepositProductsApplyPage,
        path: 'deposits/products/apply/:name',
    },
    {
        component: DepositProductsOrderPage,
        path: 'deposits/products/order/:id',
    },
    {
        component: WithdrawDepositPage,
        path: 'deposits/my_deposits/withdraw-deposit/:id',
    },
    { component: UserAccountPage, path: '/user_profile' },
    {
        component: UserFileUpload,
        path: 'user_profile/upload',
    },
    {
        component: CreditFileUpload,
        path: 'credits/products/apply/:id/upload',
    },
]
