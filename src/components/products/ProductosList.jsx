import Producto from "./Producto.jsx"

const ProductosList = ({productos}) => {
    return(
        <>
            {
                productos.map((producto) => (
                    <Producto key={producto.id} {...producto}/>
                ))
            }
        </>       
    )
}

export default ProductosList