import styles from "./Nav.module.css"
import { Link } from "react-router-dom"
const Nav = () => {
    return (
        <div className={styles.nav}>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/productos">Productos</Link>
                </li>
                <li>
                    <Link to="contacto">Contacto</Link>
                </li>
                <li>
                    <Link to="carrito">Carrito</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav