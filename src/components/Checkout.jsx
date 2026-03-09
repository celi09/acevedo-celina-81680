import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import EmptyCart from './EmptyCart'
import { useForm } from 'react-hook-form'

const CheckoutForm = () => {
  const [orderId, setOrderId]= useState('')
  const [loading, setLoading]=useState(false)
  const {register, handleSubmit, formState:{errors}, getValues}=useForm()
    const {cart, total, clear}=useContext(CartContext)

const terminarCompra = (data)=> {
    let{name, lastname, address, email}=data
        setLoading(true)
        let order = {
            comprador: {name, lastname,address, email},
            carrito: cart,
            total: total(),
            fecha: serverTimestamp()
        }
        const orderCollection = collection(db, "orders")
        addDoc(orderCollection, order)
        .then((res)=> {
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    
}
if( !cart.length && !orderId){
    return <EmptyCart/>
}

  return (
    <>
   
       {
        orderId ?
        <div>
            <h2>Gracias por tu compra!</h2>
            <h3>Su Orden es: {orderId}</h3>
            <Link className='btn btn-dark'  to='/'>Volver a Home</Link>
        </div>
       : <div className="checkout-form-wrapper">
        <h1>Complete con sus datos</h1>
        <form className="checkout-form p-4" onSubmit={handleSubmit(terminarCompra)}>
            <div className="checkout-form-row">
                <div className="checkout-field">
                    <input className="checkout-input" name="name" type="text" placeholder="Nombre" {...register("name",{required:true, minLength:3})}/>
                    {errors?.name?.type === "required" && <small className="text-danger">Por favor completa el campo</small>}
                    {errors?.name?.type === "minLength" && <small className="text-danger">Mínimo 3 caracteres</small>}
                </div>
                <div className="checkout-field">
                    <input className="checkout-input" name="lastname" type="text" placeholder="Apellido" {...register("lastname",{required:true, minLength:2})} />
                    {errors?.lastname?.type === "required" && <small className="text-danger">Por favor completa el campo</small>}
                    {errors?.lastname?.type === "minLength" && <small className="text-danger">Mínimo 2 caracteres</small>}
                </div>
            </div>
            <div className="checkout-field checkout-field-full">
                <div className="checkout-input-wrap">
                    <input className="checkout-input" name="address" type="text" placeholder="Dirección" {...register("address",{required:true, minLength:10, maxLength:35})}/>
                    <HiOutlineMagnifyingGlass className="checkout-input-icon" size={20} aria-hidden />
                </div>
                {errors?.address?.type === "required" && <small className="text-danger">Por favor completa el campo</small>}
                {errors?.address?.type === "minLength" && <small className="text-danger">La dirección está incompleta</small>}
                {errors?.address?.type === "maxLength" && <small className="text-danger">Máximo 35 caracteres</small>}
            </div>
            <div className="checkout-field checkout-field-full">
                <input className="checkout-input" name="mail" type="email" placeholder="Correo electrónico" {...register("email", {required:true})}/>
                {errors?.email?.type === "required" && <small className="text-danger">Por favor completa el campo</small>}
            </div>
            <div className="checkout-field checkout-field-full">
                <input className="checkout-input" name="secondmail" type="email" placeholder="Repetí tu correo" {...register("secondemail", {required:true, validate: {equalsMails: mail2=> mail2 === getValues().email }})} />
                {errors?.secondemail?.type === "required" && <small className="text-danger">Por favor completa el campo</small>}
                {errors?.secondemail?.type === "equalsMails" && <small className="text-danger">Los correos no coinciden</small>}
            </div>
            <button type="submit" className="btn btn-dark" disabled={loading}>{loading ? 'Procesando Compra...' : 'Completar Compra'}</button>
        </form>
    </div>}
    
    </>
  )
}

export default CheckoutForm