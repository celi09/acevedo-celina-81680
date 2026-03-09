import { useEffect } from 'react'
export const withLogging = (WrappedComponent) => {
    const ComponentWithLogging = (props) => {
        useEffect(() =>{
            console.log(`${WrappedComponent.name} se montó!`)
        },[])
        return (
            <WrappedComponent {...props}/>
        )
    }
    return ComponentWithLogging
}