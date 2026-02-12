import { Link } from 'react-router-dom'

const NotFound = () => (
    <div style={{ padding: '3rem', textAlign: 'center' }}>
        <h1>404</h1>
        <p>Página no encontrada</p>
        <Link to="/">Volver al inicio</Link>
    </div>
)

export default NotFound
