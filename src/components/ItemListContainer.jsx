import { useEffect, useState } from "react"
import { getProducts } from '../mock/asyncMock'
import ItemList from './ItemList'

const ItemListContainer = ({mensaje}) => {
    const [data, setData] = useState([])
    console.log('ItemListContainer')

    //console.log(getProducts(), 'promesa')
    //getProducts().then((res) => console.log(res, 'respuesta exitosa'))
    useEffect(() => { 
        getProducts()
        .then((res) =>  setData(res))
        .catch((error) => console.log(error))
    },[]) //quiero que se ejecute una vez entonces array de depen vacio

    console.log(data)
    return(
        <div>
            <h1>{mensaje}</h1>
            {/* {data.map((producto) => <p key={producto.id} >{producto.name}</p>)} */}
            <ItemList data ={data}/>
        </div>
    )
}

export default ItemListContainer