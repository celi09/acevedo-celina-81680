import { useEffect } from 'react'
//HOC = FUNCION QUE RECIBE UN COMPONENTE Y RETORNA UN NUEVO COMPONENTE
export const withLogging = (WrappedComponent) => {
    //es el neuvo componente que se crea con este hoc
    const ComponentWithLogging = (props) => {
        //es la nueva funcionalidad que le doy con el HOC
        useEffect(() =>{
            console.log(`${WrappedComponent.name} se montó!`)
        },[])
        //muestra ekl componente original con todas sus props
        return (
            <WrappedComponent {...props}/>
        )
    }
    //retorna nuevo componenete
    return ComponentWithLogging
}