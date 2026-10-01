import {useState, useEffect} from 'react'
import ProductosList from "./ProductosList.jsx"
import style from "../ListContainer.module.css"

const ProductosListContainer = () => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        fetch("/data/productos.json")
            .then(response => {
                if(!response.ok){
                    throw new Error("No se pudo cargar la información de los productos")
                }
                return response.json()
            })
            .then(datos => setProductos(datos))
            .catch(error => setError(error.message)) 
            .finally(() => setCargando(false))
    }, []) 

    return(
            <div className={style.container}>
                {
                    cargando 
                    ? ( <div className={style.loaderContainer}>
                            <div className={style.spinner}></div>
                            <span> Cargando... </span>
                        </div>)
                    : error ? <p>Error: {error}</p> 
                    : <ProductosList productos={productos} />
                }
            </div>
    )
}

export default ProductosListContainer