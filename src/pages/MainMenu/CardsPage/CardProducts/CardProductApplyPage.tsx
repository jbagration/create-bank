import { MainMenuPage } from '../../../../UI-components/organisms'
import { CardProductApply } from '../../../../UI-components/organisms/CardProducts/CardProductApply/CardProductApply'

export const CardProductApplyPage = () => {
    return (
        <MainMenuPage text="Выберите способ получения" backButton>
            <CardProductApply />
        </MainMenuPage>
    )
}
