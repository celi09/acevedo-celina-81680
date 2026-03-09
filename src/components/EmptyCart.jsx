import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        gap: '1rem',
        textAlign: 'center'
      }}
    >
      <h1>Carrito vacío</h1>
      <h2 className="h5 text-muted">Te invitamos a ver nuestros productos</h2>
      <Link to="/" className="btn btn-dark">Ir a Comprar</Link>
    </div>
  )
}

export default EmptyCart