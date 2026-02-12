import { useEffect, useState } from "react"

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1)
    const [comprar, setComprar] = useState(false)
    console.log('ItemCount')

    const sumar = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    const restar = () => {
        if(count > 0){
            setCount(count - 1)
        }

    }   

    const purchase = () => {
        setComprar(!comprar)
    }

    //SE EJECUTE UNA SOLA VEZ

    useEffect(()=>{
        //CODIGO
        //CASI SIEMPRE
        console.log('ME EJECUTO UNA SOLA VEZ, CUANDO SE MONTA EL COMPONENTE')
    },[])


    //SE EJETUTE UNA SOLA VEZ Y QUE ESTE A LA ESCUCHA DE UN CAMBIO

    useEffect(()=>{
        //CODIGO
        //CASI SIEMPRE
        console.log('ME EJECUTO UNA SOLA VEZ, CUANDO SE MONTA EL COMPONENTE Y SIEMPRE QUE COMPRAR CAMBIE', comprar)
    },[comprar])

    return(
        <div>
            <button className="btn btn-danger" onClick={restar}>-</button>
            <span className="btn">{count}</span>
            <button className="btn btn-success" onClick={sumar}>+</button>
            <button className="btn btn-primary" onClick={purchase}>Comprar </button>
        </div>
    )
}

export default ItemCount
