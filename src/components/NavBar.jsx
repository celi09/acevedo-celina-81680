import '../assets/css/NavBar.css'
import CartWidget from './CartWidget.jsx'

const NavBar = () => {
    console.log('NavBar')
    return (
        <nav className="nav-container">

            {/*IZQUIERDA*/} 
            <div className="nav-left">
                <a className='anchor-nav' href="">Mujer</a>
                <a className='anchor-nav' href="">Furor</a>
                <a className='anchor-nav' href="">New Trend</a>
                <a className='anchor-nav' href="">Rebajas</a>
                <a className='anchor-nav' href="">INFO</a>
                    
                
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
