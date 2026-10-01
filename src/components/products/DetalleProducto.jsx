import style from "./DetalleProducto.module.css"
import Boton from "../cta/Boton.jsx"
import {Link} from "react-router-dom"

const DetalleProducto = ({nombre,valor,stock,foto}) => {
     return(
            <div className={style.container}>
                <Link to="/productos">
                    Volver a Productos
                </Link>
                <div className={style.detailContainer}>
                    <div className={style.imgContainer}>
                        <img src={foto} alt="foto producto" />
                    </div>
                    <div className={style.descriptionContainer}>
                        <p className={style.nombre}>{nombre}</p>
                        <div>
                            <p className={style.detalle}>DETALLE</p>
                            <p className={style.descripcion}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus iusto ab impedit voluptatibus nemo asperiores debitis facere nesciunt dolorem, dolores culpa dolor, enim rem sapiente fugiat adipisci dignissimos distinctio natus.
                            </p>
                        </div>
                        
                        <p className={style.precio}>AR$
                            {valor && valor.toLocaleString("es-AR", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                        </p>
                        <p className={style.stock}>
                            <span>
                                <Boton nombre="Agregar al Carrito" color="black" />
                            </span> &nbsp;
                            <span>(Disponible: {stock})</span>
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default DetalleProducto;