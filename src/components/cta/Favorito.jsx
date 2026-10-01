import styles from "./Favorito.module.css"
import { Star } from "lucide-react"

const Favorito = ({favorito, marcar}) => {
    return(
        <button className={favorito ? styles.favorito : styles.inactivo} onClick={marcar}>
            <Star fill={favorito ? "#f4c542" : "none"}/>
        </button>
    )
}

export default Favorito