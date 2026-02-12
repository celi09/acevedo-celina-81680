import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useCart } from '../context/CartContext'

const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(1)
    const { addToCart } = useCart()

    const sumar = () => {
        if (count < stock) setCount(count + 1)
    }

    const restar = () => {
        if (count > 0) setCount(count - 1)
    }

    const purchase = () => addToCart(count)

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Button variant="outline-dark" onClick={restar}>-</Button>
            <span style={{ minWidth: '2rem', textAlign: 'center', fontWeight: '500' }}>{count}</span>
            <Button variant="outline-dark" onClick={sumar}>+</Button>
            <Button variant="outline-dark" onClick={purchase}>Comprar</Button>
        </div>
    )
}

export default ItemCount
