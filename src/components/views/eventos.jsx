
import { Navbar } from "../navbar"

import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"
import { Header } from "../header"
import { SelectCreacion } from "../selectCreacion"
import { useRamasStore } from "../../Hooks"
import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import swal from 'sweetalert';
import { BotonFlotante } from "../btn-flotante"
import { useNavigate } from 'react-router-dom';

export const EventosGeneral = () => {

    const { startListarRamas } = useRamasStore();
    const { ramas } = useSelector(state => state.rama);
    function ingresoPubli(e) {
        e.preventDefault();
        swal({
            title: "Actualmente esta funcion se encuentra en desarrollo",
            icon: "warning",
          });
    }
    const navigate = useNavigate();

    function redireccion(e) {
        e.preventDefault();
        navigate(`/add-evento`)
    }


    
    useEffect(() => {
        startListarRamas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="contenido">
            <div className="conte-general-rela">
                <Header />
                <div className="conte-imp">
                    <h1>Eventos</h1>
                    <h3>Selecciona una rama para ver sus eventos, en icono + púedes crear un nuevo evento</h3>
                    <SelectCreacion nombre="General" desc="Publicaciones para todos" onClick={ingresoPubli}/>
                    {
                        ramas.map(rama => {
                            return (

                                <SelectCreacion nombre={rama.nombre} desc={rama.edadMin + "-" + rama.edadMax + " años"} onClick={ingresoPubli}/>


                                //<FormControlLabel value={rama._id} control={<Checkbox />} label={rama.nombre} />

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