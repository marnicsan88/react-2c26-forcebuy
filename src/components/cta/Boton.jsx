import styles from "./Boton.module.css"

const Boton = ({nombre , color, accion}) => {
    return(
        <button className={styles[color]} onClick={accion}>{nombre}</button>
    )
}

export default Boton