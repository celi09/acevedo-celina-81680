import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ItemDetail = ({ detail }) => {
    const { addItem } = useContext(CartContext)
    const [purchase, setPurchase] = useState(false)

    const onAdd = (cantidad) => {
        addItem(detail, cantidad)
        setPurchase(true)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Agregaste ${detail.name} a tu carrito`,
            showCancelButton: false,
            showConfirmButton: false,
            timer: 1000
        })
    }

    return (
        <Container className="py-4">
            <Row className="g-4 align-items-start">
                <Col xs={12} md={6} lg={5}>
                    <div className="d-flex justify-content-center justify-content-md-start">
                        <img
                            src={detail.img}
                            alt={detail.name}
                            className="img-fluid rounded"
                            style={{ maxHeight: '500px', objectFit: 'contain' }}
                        />
                    </div>
                </Col>
                <Col xs={12} md={6} lg={7}>
                    <div className="d-flex flex-column gap-3">
                        <h1 className="h2 fw-bold mb-0">{detail.name}</h1>
                        <p className="h5 text-dark mb-0">UYU {detail.price}</p>
                        <p className="text-muted mb-0">Stock: {detail.stock}</p>
                        {purchase
                            ? <Link to="/cart" className="btn btn-dark align-self-start">Ir al Carrito</Link>
                            : <ItemCount stock={detail.stock} onAdd={onAdd} />
                        }
                        {detail.description && (
                            <p className="mt-2 text-secondary">{detail.description}</p>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default ItemDetail