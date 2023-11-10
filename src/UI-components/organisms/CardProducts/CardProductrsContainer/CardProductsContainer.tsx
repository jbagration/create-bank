import { Preloader } from '../../../../assets/svg'
import { useGetCardProductsQuery } from '../../../../redux/api/cardProductsApi'
import { CardProducts } from '../CardProducts'

export const CardProductsContainer = () => {
    const { data, isSuccess, isLoading } = useGetCardProductsQuery()

    if (isLoading) {
        return <Preloader />
    }
    return data && isSuccess ? <CardProducts data={data} /> : null
}
