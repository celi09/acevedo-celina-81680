import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts, getProductsByCategory } from '../mock/asyncMock'
import ItemList from './ItemList'

const ItemListContainer = ({ mensaje }) => {
    const { category } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        if (category) {
            getProductsByCategory(category)
                .then((res) => setData(res))
                .catch((error) => console.log(error))
        } else {
            getProducts()
                .then((res) => setData(res))
                .catch((error) => console.log(error))
        }
    }, [category])

    const titulo = category ? `Categoría: ${category}` : (mensaje || 'Productos')

    return (
        <div>
            <h1>{titulo}</h1>
            <ItemList data={data} />
        </div>
    )
}

export default ItemListContainer