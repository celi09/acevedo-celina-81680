import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Cart from './Cart'
import EmptyCart from './EmptyCart'

const CartContainer = () => {
    const { cart } = useContext(CartContext)
    return (
        <>
            {cart.length ? <Cart /> : <EmptyCart />}
        </>
    )
}

export default CartContainer