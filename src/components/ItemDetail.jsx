import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ItemDetail = ({ detail }) => {
    const { addItem } = useContext(CartContext)
    const [purchase, setPurchase] = useState(false)

    const onAdd = (cantidad) => {
        addItem(detail, cantidad)
        setPurchase(true)
        Swal.fire({
        position:'top-end',
        icon:'success',
        title:`Agregaste ${detail.name} a tu carrito`,
        showCancelButton:false,
        showConfirmButton:false,
        timer:1000
        })
    }
    return (
        <div style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px'
        }}>
            <h1>Detalle del: {detail.name}</h1>
            <img src={detail.img} alt={detail.name}/>
            <p>{detail.description}</p>
            <p>${detail.price},00</p>
            <p>Stock disponible: {detail.stock} unidades</p>
        {purchase 
        ? <Link to='/cart' className='btn btn-dark'>Ir al Carrito</Link>
        : <ItemCount stock={detail.stock} onAdd={onAdd}/>}
        </div>
    )
    
}


export default ItemDetail