import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { HiOutlineMagnifyingGlass, HiOutlineUser, HiOutlineShoppingBag } from 'react-icons/hi2'

const CartView = () => {
    const {cart, removeItem, clear, total}= useContext(CartContext)
    const preConfirm =()=>{
        Swal.fire({
  title: "¿Estás seguro de borrar todo el carrito?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  cancelButtonText:"No",
  confirmButtonText: "Si"
}).then((result) => {
  if (result.isConfirmed) {
   
    Swal.fire({
      title: "Borrado!",
      text: "Tu carrito ahora esta vacio.",
      icon: "success"
    });
     clear()
  }
});
    }
  return (
    <div>
        <h1>Tu Carrito</h1>
        <div>
            {
                cart.map((compra)=> (
                    <div key={compra.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem'}}>
                        <img src={compra.img} alt={compra.name} style={{width:'10rem'}}/>
                        <span>{compra.name}</span>
                        <span>${compra.price},00</span>
                        <span>cantidad: {compra.quantity}</span>
                        <span>precio final:${compra.price*compra.quantity},00</span>
                        <button className='btn btn-danger' onClick={()=> removeItem(compra.id)} >X</button>
                    </div>
                ))
                
            }
            {/* LLAMAR Y ARMAR UNA FUNCION QUE CALCULE EL TOTAL A PAGAR DESDE EL CONTEXTO */}
            <span>Total a pagar: ${total()}</span>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', padding:'2rem'}}>
                <button className='btn btn-danger' onClick={preConfirm}>Vaciar Carrito</button>
                <Link className='btn btn-success' to='/checkout'>Terminar Compra</Link>
            </div>
        </div>
    </div>
  )
}

export default CartView