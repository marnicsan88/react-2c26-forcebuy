import Personal from "./Personal.jsx"

const PersonalList = ({equipo}) => {
    return(
        <>
            {
                equipo.map((personal) => (
                    <Personal key={personal.id} {...personal}/>
                ))
            }
        </>       
    )
}

export default PersonalList