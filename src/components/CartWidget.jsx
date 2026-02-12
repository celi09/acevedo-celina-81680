import { Link } from 'react-router-dom'
import { HiOutlineMagnifyingGlass, HiOutlineUser, HiOutlineShoppingBag } from 'react-icons/hi2'
import { useCart } from '../context/CartContext'

const iconLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',
    padding: '0.25rem',
}

const CartWidget = () => {
    const { cartCount } = useCart()

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Link to="/search" style={iconLinkStyle} title="Buscar" aria-label="Buscar">
                <HiOutlineMagnifyingGlass size={22} />
            </Link>
            <Link to="/user" style={iconLinkStyle} title="Mi cuenta" aria-label="Mi cuenta">
                <HiOutlineUser size={22} />
            </Link>
            <Link to="/cart" style={{ ...iconLinkStyle, gap: '0.25rem' }} title="Carrito" aria-label="Carrito">
                <HiOutlineShoppingBag size={22} />
                <span style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>{cartCount}</span>
            </Link>
        </div>
    )
}

export default CartWidget