import { useState } from 'react'
import { Button } from 'react-bootstrap'

const MIN_CANTIDAD = 1

const ItemCount = ({ stock, onAdd }) => {
    const stockNum = Math.max(0, Number(stock) || 0)
    const [count, setCount] = useState(MIN_CANTIDAD)

    const sumar = () => {
        if (count < stockNum) setCount(count + 1)
    }

    const restar = () => {
        if (count > MIN_CANTIDAD) setCount(count - 1)
    }

    const handlePurchase = () => {
        const cantidad = Math.max(MIN_CANTIDAD, Math.min(count, stockNum))
        if (cantidad < MIN_CANTIDAD || stockNum < MIN_CANTIDAD) return
        onAdd(cantidad)
    }

    if (stockNum < MIN_CANTIDAD) {
        return <p className="text-muted mb-0">Sin stock disponible</p>
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Button
                variant="outline-dark"
                onClick={restar}
                disabled={count <= MIN_CANTIDAD}
                aria-label="Disminuir cantidad"
            >
                −
            </Button>
            <span style={{ minWidth: '2rem', textAlign: 'center', fontWeight: '500' }}>{count}</span>
            <Button
                variant="outline-dark"
                onClick={sumar}
                disabled={count >= stockNum}
                aria-label="Aumentar cantidad"
            >
                +
            </Button>
            <Button variant="outline-dark" onClick={handlePurchase}>
                Comprar
            </Button>
        </div>
    )
}

export default ItemCount
