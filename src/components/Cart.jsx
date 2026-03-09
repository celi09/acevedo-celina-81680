import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import CartItem from './CartItem'

const Cart = () => {
    const { cart, removeItem, clear, updateQuantity, total } = useContext(CartContext)

    const preConfirm = () => {
        Swal.fire({
            title: '¿Estás seguro de borrar todo el carrito?',
            icon: 'warning',
            iconColor: '#dc3545',
            showCancelButton: true,
            confirmButtonText: 'Sí',
            cancelButtonText: 'No',
            reverseButtons: true,
            customClass: {
                popup: 'swal-quitar-articulo',
                confirmButton: 'swal-btn-blanco',
                cancelButton: 'swal-btn-blanco'
            },
            background: '#000',
            confirmButtonColor: '#fff',
            cancelButtonColor: '#fff',
            color: '#fff'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({ title: 'Borrado!', text: 'Tu carrito ahora está vacío.', icon: 'success' })
                clear()
            }
        })
    }

    const maxStock = (item) => item.stock ?? 99

    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            updateQuantity(item.id, item.quantity - 1)
        } else {
            Swal.fire({
                title: '¿Estás segura de quitar el artículo del carrito?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí',
                cancelButtonText: 'No',
                reverseButtons: true,
                customClass: {
                    popup: 'swal-quitar-articulo',
                    confirmButton: 'swal-btn-blanco',
                    cancelButton: 'swal-btn-blanco'
                },
                background: '#000',
                confirmButtonColor: '#fff',
                cancelButtonColor: '#fff',
                color: '#fff'
            }).then((result) => {
                if (result.isConfirmed) removeItem(item.id)
            })
        }
    }

    const handleIncrease = (item) => {
        const top = maxStock(item)
        if (item.quantity < top) {
            updateQuantity(item.id, Math.min(item.quantity + 1, top))
        }
    }

    const totalGeneral = total()

    return (
        <Container className="py-4">
            <h1 className="mb-4">Tu Carrito</h1>

            <Row className="d-none d-md-flex border-bottom py-2 mb-0 text-muted small fw-bold">
                <Col md={2}>Producto</Col>
                <Col md={3}>Detalle</Col>
                <Col md={3}>Cantidad</Col>
                <Col md={2} className="text-center text-md-end">Subtotal</Col>
                <Col md={2} className="text-end" />
            </Row>

            {cart.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                    onRemove={removeItem}
                    maxStock={maxStock}
                />
            ))}

            <Row className="mt-4 pt-3 border-top">
                <Col xs={12} lg={6} className="mb-3 mb-lg-0">
                    <div className="bg-light rounded p-3">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <span className="text-muted">Productos en el carrito:</span>
                            <span>{cart.length} {cart.length === 1 ? 'ítem' : 'ítems'}</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center pt-2 border-top mt-2">
                            <span className="h5 mb-0">Total a pagar:</span>
                            <span className="h5 mb-0 fw-bold">UYU {totalGeneral}</span>
                        </div>
                    </div>
                </Col>
                <Col xs={12} lg={6} className="d-flex flex-column flex-sm-row justify-content-lg-end align-items-center gap-2">
                    <Button variant="outline-danger" onClick={preConfirm}>Vaciar Carrito</Button>
                    <Link to="/checkout" className="btn btn-dark btn-terminar-compra">Terminar Compra</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Cart
