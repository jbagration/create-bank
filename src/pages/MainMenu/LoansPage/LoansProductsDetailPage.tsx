import { LoanProductDetail } from '../../../UI-components/molecules/LoanProductCard/LoanProductDetail/LoanProductDetail'
import { useLoanProductDetail } from '../../../UI-components/molecules/LoanProductCard/LoanProductDetail/useLoanProductDetail'
import { MainMenuPage } from '../../../UI-components/organisms/MainMenuPageComponent/MainMenuPage'

export const LoansProductsDetailPage = () => {
    const { arrLoanRange, credit } = useLoanProductDetail()

    return (
        <MainMenuPage text={credit?.name} backButton>
            <LoanProductDetail arrLoanRange={arrLoanRange} credit={credit} />
        </MainMenuPage>
    )
}
