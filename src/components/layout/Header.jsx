import styles from "./Header.module.css"
import logo from "../../assets/forceBuy.svg";
import Nav from "./Nav"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.bienvenida}>
                 <Link to="/">
                    <img className={styles.logo} src={logo} alt="logo de ForceBuy"/>
                    <h1>ForceBuy</h1>
                </Link>
            </div>
            <Nav />
        </header>
    )
}

export default Header;