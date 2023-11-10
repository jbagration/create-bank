import { CardProductsContainer } from '../../../../UI-components/organisms/CardProducts/CardProductrsContainer/CardProductsContainer'
import { MainMenuPage } from '../../../../UI-components/organisms/MainMenuPageComponent'

export const CardProductsPage = () => {
    return (
        <MainMenuPage text="Карточные продукты">
            <CardProductsContainer />
        </MainMenuPage>
    )
}
