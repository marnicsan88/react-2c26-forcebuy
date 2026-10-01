import { NavLink } from "react-router-dom"
import Boton from "../cta/Boton.jsx"
import Contador from "../cta/Contador.jsx"
import Favorito from "../cta/Favorito.jsx"
import styles from "./Producto.module.css"
import {useState} from "react"
import {Link} from "react-router-dom"

const Producto = ({id,nombre,valor,stock,foto}) => {

    const [carrito, setCarrito] = useState(0);
    const [favorito, setFavorito] = useState(false);

    const removerCarrito = () => {
        if(carrito > 0)
            setCarrito(carrito - 1)
    }

    const agregarCarrito = () => {
        if(carrito < stock)
            setCarrito(carrito + 1)
    }

    const marcarFavorito = () => {
        setFavorito(!favorito)
    }

    return(
        <div className={styles.card}>
            <Favorito favorito={favorito} marcar={marcarFavorito} />
            <Link to={`/productos/${id}`}>
                <div className={styles.imgContainer}>
                    <img src={foto} alt={`Foto de ${nombre}`} fetchPriority="high" loading="eager"/>
                </div>
                <p>{nombre}</p>
                <p className={styles.precio}>
                    AR$ {valor.toLocaleString("es-AR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
                </p>
            </Link>
            {
                carrito == 0 
                    ? <Boton nombre="Agregar al Carrito" color="azul" accion={agregarCarrito}/> 
                    : <Contador cantidad={carrito} agregar={agregarCarrito} remover={removerCarrito}/> 
            }
        </div>
    )
}

export default Producto;