import styles from "./Personal.module.css"
const CardPersona = ({nombre,tarea,mail,foto,estilo}) => {
    return(
        <div className={`${styles.card} ${styles[estilo]}`}>
            <div className={styles.imgContainer}>
                <img src={foto} alt={`Foto de ${nombre}`} />
            </div>
            <p>{nombre}</p>
            <p className={styles.tarea}>{tarea}</p>
            <p className={styles.tarea}>{mail}</p>
        </div>
    )
}

export default CardPersona;