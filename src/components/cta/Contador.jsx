import botonStyle from "./Boton.module.css"
import contadorStyle from "./Contador.module.css"

const Contador = ({cantidad, agregar, remover}) => {
    return(
        <div className={contadorStyle.container}>
            <button className={`${botonStyle.rojo} ${contadorStyle.remover}`} onClick={remover}> - </button>
            <input className={contadorStyle.inputCantidad} disabled type="text" maxLength={3} value={cantidad}/>
            <button className={`${botonStyle.verde} ${contadorStyle.agregar}`} onClick={agregar}> + </button>
        </div>
    )
}    

export default Contador;