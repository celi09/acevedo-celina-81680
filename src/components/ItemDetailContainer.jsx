import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneProduct } from '../mock/asyncMock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState({})

    useEffect(() => {
        if (id) {
            getOneProduct(id)
                .then((res) => setDetail(res))
                .catch((err) => console.log(err))
        }
    }, [id])

    if (!detail.id) return <div>Cargando...</div>

    return (
        <div>
            <ItemDetail detail={detail} />
        </div>
    )
}

export default ItemDetailContainer