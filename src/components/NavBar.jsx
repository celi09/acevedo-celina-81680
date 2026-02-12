import '../assets/css/NavBar.css'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget.jsx'
import { getCategories } from '../mock/asyncMock'

const NavBar = () => {
    const categories = getCategories()

    return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
            <img src="/logo.png" alt="logo-pagina" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              {categories.map((cat) => (
                <NavDropdown.Item key={cat} as={Link} to={`/category/${cat}`}>
                  {cat}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavBar
