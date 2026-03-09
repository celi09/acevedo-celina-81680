import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'
import { useForm } from 'react-hook-form'

const Checkout = () => {
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
        //agregar el doc
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
       : <div>
        <h1>Complete con sus datos</h1>
        <form className='p-4 border rounded shadow-sm bg-light' onSubmit={handleSubmit(terminarCompra)}>
            <input className='form-control' name='name' type='text' placeholder='Ingresa tu nombre' {...register("name",{required:true, minLength:3})}/>
            {errors?.name?.type === "required" && <small style={{color:'red'}}>Por favor completa el campo</small>}
            {errors?.name?.type === "minLength" && <small style={{color:'red'}}>El nombre debe contener mínimo 3 caracteres</small>}
            <input className='form-control' name='lastname' type='text' placeholder='Ingresa tu apellido' {...register("lastname",{required:true, minLength:2})} />
              {errors?.lastname?.type === "required" && <small style={{color:'red'}}>Por favor completa el campo</small>}
            {errors?.lastname?.type === "minLength" && <small style={{color:'red'}}>El apellido debe contener mínimo 2 caracteres</small>}
            <input className='form-control' name='address' type='text' placeholder='Ingresa su direccion' {...register("address",{required:true, minLength:10, maxLength:35})}/>
            {errors?.address?.type === "required" && <small style={{color:'red'}}>Por favor completa el campo</small>}
            {errors?.address?.type === "minLength" && <small style={{color:'red'}}>La dirección esta incompleta</small>}
            {errors?.address?.type === "maxLength" && <small style={{color:'red'}}>La dirección es demasiado larga</small>}
            <input className='form-control' name='mail' type='email' placeholder='Ingresa tu correo' {...register("email", {required:true})}/>
              {errors?.email?.type === "required" && <small style={{color:'red'}}>Por favor completa el campo</small>}
            <input className='form-control' name='secondmail' type='email' placeholder='Repetí tu correo'  {...register("secondemail", {required:true, validate: {equalsMails: mail2=> mail2 === getValues().email }})} />
            {errors?.secondemail?.type === "required" && <small style={{color:'red'}}>Por favor completa el campo</small>}
             {errors?.secondemail?.type === "equalsMails" && <small style={{color:'red'}}>Los correos no coinciden</small>}
            <button type='submit' className='btn btn-success' disabled={loading}>{loading ? 'Procesando Compra...' : 'Completar Compra'}</button>
        </form>
    </div>}
    
    </>
  )
}

export default Checkout