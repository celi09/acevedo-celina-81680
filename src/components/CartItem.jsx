import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const CartItem = ({ item, onIncrease, onDecrease, onRemove, maxStock }) => {
    const subtotal = item.price * item.quantity
    return (
        <Row className="align-items-center border-bottom py-3 g-2">
            <Col xs={12} md={2} className="text-center text-md-start">
                {item.img && (
                    <img
                        src={item.img}
                        alt={item.name}
                        className="img-fluid rounded"
                        style={{ maxWidth: 120, maxHeight: 140, objectFit: 'cover' }}
                    />
                )}
            </Col>
            <Col xs={12} md={3}>
                <div className="fw-bold">{item.name}</div>
                {item.size && <div className="small text-muted">Talle: {item.size}</div>}
                {item.color && <div className="small text-muted">Color: {item.color}</div>}
                <div className="small text-muted mt-1">UYU {item.price} c/u</div>
            </Col>
            <Col xs={12} md={3} className="d-flex align-items-center justify-content-center justify-content-md-start">
                <div className="d-flex align-items-center border rounded">
                    <Button
                        variant="outline-secondary"
                        size="sm"
                        className="rounded-0 border-0"
                        onClick={() => onDecrease(item)}
                    >
                        −
                    </Button>
                    <span className="px-3 py-1" style={{ minWidth: 36, textAlign: 'center' }}>
                        {item.quantity}
                    </span>
                    <Button
                        variant="outline-secondary"
                        size="sm"
                        className="rounded-0 border-0"
                        onClick={() => onIncrease(item)}
                        disabled={item.quantity >= maxStock(item)}
                    >
                        +
                    </Button>
                </div>
            </Col>
            <Col xs={12} md={2} className="text-center text-md-end">
                <div className="small text-muted">Subtotal</div>
                <div className="fw-bold">UYU {subtotal}</div>
            </Col>
            <Col xs={12} md={2} className="text-center text-md-end">
                <Button variant="outline-danger" size="sm" onClick={() => onRemove(item.id)}>
                    Quitar
                </Button>
            </Col>
        </Row>
    )
}

export default CartItem
