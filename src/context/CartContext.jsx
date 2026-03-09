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
            const maxStock = (cart.find(p => p.id === item.id)?.stock ?? item.stock ?? 99)
            setCart(
                cart.map((prod)=>{
                    if(prod.id === item.id){
                        const newQty = Math.min(prod.quantity + qty, maxStock)
                        return {...prod, quantity: newQty}
                    }else{
                        return prod
                    }
                })
            )

        }else{
            setCart([...cart, {...item, quantity: qty, stock: item.stock ?? 99}])
        }
    }

    const clear = ()=>{
        setCart([])
    }

    const removeItem = (id)=> {
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    const updateQuantity = (id, newQty)=> {
        if (newQty <= 0) {
            setCart(cart.filter((prod)=> prod.id !== id))
            return
        }
        const maxStock = (p) => p.stock ?? 99
        setCart(
            cart.map((prod)=>
                prod.id === id
                    ? { ...prod, quantity: Math.min(newQty, maxStock(prod)) }
                    : prod
            )
        )
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
        <CartContext.Provider value={{cart, addItem, clear, removeItem, updateQuantity, total, cartQuantity}}>
            {children}
        </CartContext.Provider>
    )
}