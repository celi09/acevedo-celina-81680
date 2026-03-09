import '../assets/css/NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget.jsx'
import { NavLink } from 'react-router-dom'

const categories = ['Furor', 'New Trend', 'Rebajas']

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <img src="/logo.png" alt="logo-pagina" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            {categories.map((cat) => (
                                <NavDropdown.Item key={cat} as={NavLink} to={`/category/${cat}`}>
                                    {cat}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
