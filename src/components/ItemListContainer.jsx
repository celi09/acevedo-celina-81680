import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from './ItemList'
import Loader from './Loader'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"

const ItemListContainer = ({ mensaje }) => {
    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const { type } = useParams()

    useEffect(() => {
        queueMicrotask(() => setLoading(true))
        const prodCollection = type ?  query(collection(db,"productos"), where("category", "==", type)): collection(db,"productos")
        getDocs(prodCollection)
        .then((res)=>{
           const list = res.docs.map((doc)=> {
               return {
                   id:doc.id,
                   ...doc.data()
               }
           })
           setData(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
   },[type])
  
    return (
        <>
            {loading
                ? <Loader text={type ? 'Cargando Categoría...' : 'Cargando Productos...'} />
                : (
                    <div className="pb-4">
                        <div className="px-3 pt-3 pb-2">
                            <h1 className="h4 fw-bold">
                                {mensaje}{type && <span style={{ textTransform: 'capitalize' }}> {type}</span>}
                            </h1>
                        </div>
                        <ItemList data={data} />
                    </div>
                )}
        </>
    )
}

export default ItemListContainer