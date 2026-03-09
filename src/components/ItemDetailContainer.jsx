import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import Loader from './Loader'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
    const[detail, setDetail]= useState({})
    const [cargando, setCargando]= useState(true)
    const [invalid, setInvalid]= useState(null)
   
      const{id}= useParams()
     
     useEffect(()=>{
           const docRef= doc(db, "productos", id)
           getDoc(docRef)
           .then((res)=> {
             if(res.data()){
               setDetail({id:res.id, ...res.data()})
             }else{
               setInvalid(true)
             }
           })
           .catch((err)=> console.log(err))
           .finally(()=> setCargando(false))
       },[id])
   
     
     if(invalid){
       return(
         <div>
           <h2>El prod no existe!</h2>
           <Link className='btn btn-dark' to='/'>Volver a home</Link>
         </div>
       )
     }
   
     return (
       <div>
          {cargando ? <Loader text={'Cargando Detalle...'}/> :<ItemDetail detail={detail}/>}
       </div>
     )
   }

export default ItemDetailContainer