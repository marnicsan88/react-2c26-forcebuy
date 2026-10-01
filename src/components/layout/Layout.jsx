import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import styles from "./Layout.module.css"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return(
        <div className={styles.layout}>
            <Header/>
            <main>
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;