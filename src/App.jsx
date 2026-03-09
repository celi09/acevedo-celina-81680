import './App.css'
import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContainer from './components/CartContainer'
import CheckoutForm from './components/Checkout'
import Search from './components/Search'
import User from './components/User'
import Error from './components/Error'
import Footer from './components/Footer'

function App() {
  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer mensaje="Descubrí un nuevo estilo, bienvenida a Coral" />} />
        <Route path="/category/:type" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/search" element={<Search />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </CartProvider>
  )
}

export default App
