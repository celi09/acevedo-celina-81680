import '../assets/css/NavBar.css'
import CartWidget from './CartWidget.jsx'

const NavBar = () => {
    console.log('NavBar')
    return (
        <nav className="nav-container">

            {/*IZQUIERDA*/} 
            <div className="nav-left">
                <a className="anchor-nav" href="#mujer">Mujer</a>
                <a className="anchor-nav" href="#furor">Furor</a>
                <a className="anchor-nav" href="#newtrend">New Trend</a>
                <a className="anchor-nav" href="#rebajas">Rebajas</a>
                <a className="anchor-nav" href="#info">INFO</a>
            </div>

            {/*CENTRO*/}
            <div className="nav-center">
                <img src="/logo.png" alt="logo-pagina" className="logo" />
            </div>

            {/*DERECHA*/}
            <div className="nav-right">
               <CartWidget />
            </div>
        </nav>
    )

}

export default NavBar
