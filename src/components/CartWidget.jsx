import { Link } from 'react-router-dom'
import { HiOutlineMagnifyingGlass, HiOutlineUser, HiOutlineShoppingBag } from 'react-icons/hi2'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Badge } from 'react-bootstrap'

const iconLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',
    padding: '0.25rem',
}

/**
 * Muestra el ícono del carrito y el total de unidades agregadas al contexto (suma de cantidades de todos los ítems).
 */
const CartWidget = () => {
    const { cartQuantity } = useContext(CartContext)
    const totalUnidades = cartQuantity()

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Link to="/search" style={iconLinkStyle} title="Buscar" aria-label="Buscar">
                <HiOutlineMagnifyingGlass size={22} />
            </Link>
            <Link to="/user" style={iconLinkStyle} title="Mi cuenta" aria-label="Mi cuenta">
                <HiOutlineUser size={22} />
            </Link>
            <Link
                to="/cart"
                style={{ ...iconLinkStyle, gap: '0.25rem' }}
                title={totalUnidades > 0 ? `Carrito (${totalUnidades} ${totalUnidades === 1 ? 'unidad' : 'unidades'})` : 'Carrito'}
                aria-label={totalUnidades > 0 ? `Carrito con ${totalUnidades} unidades` : 'Carrito'}
            >
                <HiOutlineShoppingBag size={22} aria-hidden />
                {totalUnidades > 0 && (
                    <Badge bg="dark" style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>
                        {totalUnidades}
                    </Badge>
                )}
            </Link>
        </div>
    )
}

export default CartWidget