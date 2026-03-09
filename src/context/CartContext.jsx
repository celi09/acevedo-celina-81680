/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState, createContext } from "react"

export const CartContext = createContext()
const carritoLS = JSON.parse(localStorage.getItem('carrito')) || []
export const CartProvider = ({children})=>{
    const [cart, setCart]=useState(carritoLS)

    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(cart))
    },[cart])

    const addItem = (item, qty)=>{
        if(IsInCart(item.id)){
            setCart(
                cart.map((prod)=>{
                    if(prod.id === item.id){
                        return {...prod, quantity: prod.quantity + qty}
                    }else{
                        return prod
                    }
                })
            )

        }else{
            setCart([...cart, {...item, quantity:qty}])
        }
    }

    const clear = ()=>{
        setCart([])
    }

    const removeItem = (id)=> {
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    const IsInCart =(id)=> {
        return cart.some((prod)=> prod.id === id)
    }

    const total = ()=> {
        return cart.reduce((acc, prod)=> (acc += prod.quantity * prod.price), 0)
    }

const cartQuantity = ()=> {
    return cart.reduce((acc, prod)=> acc += prod.quantity, 0)
}
    
    return(
        <CartContext.Provider value={{cart, addItem, clear, removeItem, total, cartQuantity}}>
            {children}
        </CartContext.Provider>
    )
}