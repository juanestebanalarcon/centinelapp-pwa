
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

export const PublicacionGeneral = () => {

    const { startListarRamas } = useRamasStore();
    const { ramas } = useSelector(state => state.rama);
    function ingresoPubli(e) {
        e.preventDefault();
        swal({
            title: "Actualmente esta funcion se encuentra en desarrollo",
            icon: "warning",
          });
    }
    useEffect(() => {
        startListarRamas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="contenido">
            <div className="conte-general">
                <Header />
                <div className="conte-imp">
                    <h1>Publicaciones</h1>
                    <h3>Selecciona una rama para ver sus mensajes, en icono + púedes crear una nueva publicacion</h3>
                    <SelectCreacion nombre="General" desc="Publicaciones para todos" onClick={ingresoPubli}/>
                    {
                        ramas.map(rama => {
                            return (

                                <SelectCreacion nombre={rama.nombre} desc={rama.edadMin + "-" + rama.edadMax + " años"} onClick={ingresoPubli}/>


                                //<FormControlLabel value={rama._id} control={<Checkbox />} label={rama.nombre} />

                            )


                        })
                    }

                    
                </div>
            </div>
            <Navbar />
        </div>


    )
}