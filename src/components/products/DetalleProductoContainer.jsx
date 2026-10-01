import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import DetalleProducto from './DetalleProducto'
import style from "../ListContainer.module.css"

const DetalleProductoContainer = () => {
    const {id} = useParams();

    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState("");
    const [error, setError] = useState("");

    useEffect( () => {
        fetch(`/data/productos.json`)
            .then( response => {
                if( !response.ok )
                    throw new Error("Error cargando el detalle del producto solicitado")
                return response.json()})
            .then(data => {
                const productoEncontrado = data.find(p => p.id === parseInt(id));
                return productoEncontrado;
            })
            .then(producto => setProducto(producto))
            .catch(error => setError(error.message))
            .finally(() => setCargando(false))
    }, [id] )

     return(
            <div className={style.container}>
                {
                    cargando 
                    ? ( <div className={style.loaderContainer}>
                            <div className={style.spinner}></div>
                            <span> Cargando... </span>
                        </div>)
                    : error ? <p>Error: {error}</p> 
                    : <DetalleProducto {...producto} />
                }
            </div>
    )
}

export default DetalleProductoContainer;