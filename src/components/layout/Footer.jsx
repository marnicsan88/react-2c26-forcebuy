import PersonalListContainer from "../nosotros/PersonalListContainer"
import styles from "./Footer.module.css"

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.newsletter}>
                <label>Newsletter: </label>
                <input type="newsletter" placeholder="Ingresa tu email..."></input>
                <a href="#">Enviar</a>
            </div>
            <PersonalListContainer />
            <ul>
                <li>
                    <a href="#">Terminos y Condiciones</a>
                </li>
                <li>
                    <a href="#">Pol&iacute;ticas de Privacidad</a>
                </li>
                <li>
                    <a href="#">Pol&iacute;ticas de Cookies</a>
                </li>
                <li>
                    <a href="#">Reclamos</a>
                </li>
            </ul>
            <p>&copy; 2026 ForceBuy S.R.L. - Todos los derechos reservados</p>
            <p>Av. Falsa 123, CP 1405, Coruscant</p>
        </footer>
    )
}

export default Footer