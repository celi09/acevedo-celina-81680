import { useState } from 'react'
import { Button } from 'react-bootstrap'

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)

    const sumar = () => {
        if (count < stock) setCount(count + 1)
    }

    const restar = () => {
        if (count > 0) setCount(count - 1)
    }

    const purchase = () => onAdd(count)

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
