
import { Navbar } from "../../navbar"

import "../../../styles/boton.css"
import "../../../styles/styles.css"
import "../../../styles/login.css"
import { Header } from "../../header"
import { SelectCreacion } from "../../selectCreacion"
import { useAdminStore } from "../../../Hooks"
import { useSelector } from 'react-redux';
import { useEffect } from 'react'
//import swal from 'sweetalert';
import { BotonFlotante } from "../../btn-flotante"
import { useNavigate } from 'react-router-dom';


export const EventoGeneralAdmin = () => {
    //const params = useParams();
    const {startAdminRama}=useAdminStore();
    const {ramasAdmin}=useSelector(state => state.admin)
    const {user} = useSelector(state=>state.auth);
    console.log(ramasAdmin)
    
    const navigate = useNavigate();

    function redireccion(e) {
        e.preventDefault();
        navigate(`/add-evento`)
    }
    const publi = (idrama) => (e) => {
        e.preventDefault();
        navigate(`/evento-rama/${ idrama }`)
    }
    function general(e) {
        e.preventDefault();
        navigate(`/evento-General`)
    }


    
    useEffect(() => {
        startAdminRama(user?.uid);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="contenido">
            <div className="conte-general-rela">
                <Header />
                <div className="conte-imp">
                <h1>Eventos</h1>
                    <h3>Selecciona una rama para ver sus eventos, en icono + púedes crear un nuevo evento</h3>
                    <SelectCreacion nombre="General" desc="Publicaciones para todos" onClick={general}/>
                    {ramasAdmin.map(rama =>{
                        return(
                            <SelectCreacion nombre={rama.nombre} desc={rama.edadMin + "-" + rama.edadMax + " años"} onClick={publi(rama._id)}/>
                        )
                    })

                    }
                    
                    
                    
                    <BotonFlotante onClick={redireccion}/>

                    
                </div>
            </div>
            <Navbar />
        </div>


    )
}