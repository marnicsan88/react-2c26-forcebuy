import {useState, useEffect} from 'react'
import PersonalList from "./PersonalList.jsx"
import style from "../ListContainer.module.css"

const PersonalListContainer = () => {

    const [equipo, setEquipo] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        fetch("/data/personal.json")
            .then(response => {
                if(!response.ok){
                    throw new Error("No se pudo cargar la información del equipo")
                }
                return response.json()
            })
            .then(datos => setEquipo(datos))
            .catch(error => setError(error.message)) 
            .finally(() => setCargando(false))
    }, []) 

    return(
        <div>
            <p>Nuestro Equipo</p>
            <div className={style.container}>
                {
                    cargando 
                    ? ( <div className={style.loaderContainer}>
                            <div className={style.spinner}></div>
                            <span> Cargando Equipo... </span>
                        </div>)
                    : error ? <p>Error: {error}</p> 
                    : <PersonalList equipo={equipo} />
                }
            </div>
        </div>
    )
}

export default PersonalListContainer