import { Navbar } from "../../navbar"
import "../../../styles/styles.css"
import { Header } from "../../header"
import { SelectCreacion } from "../../selectCreacion"
import { useNavigate } from 'react-router-dom';
import { Publicacion } from "../../publicacion";
import { Eventos } from "../../eventos";
import { useSelector } from 'react-redux';

import React, { useEffect } from "react";
import { usePublicacionStore } from "../../../Hooks";
import { useEventoStore } from "../../../Hooks/useEventoStore";
export const HomeSuperAd = () => {
    const navigate = useNavigate();
    const { user } = useSelector(state => state.auth);
    const {startListLastPublicacion}=usePublicacionStore()
    const {startListLastEvento}=useEventoStore()
    const {publicaciones}=useSelector(state => state.publicacion)
    const {eventos}=useSelector(state => state.evento)
    console.log(eventos)

    function gestionar(e) {
        e.preventDefault();
        navigate(`/adminUser`)
    }


    function rama(e) {
        e.preventDefault();
        navigate(`/addRama`)
    }
    function registrar(e) {
        e.preventDefault();
        navigate(`/addUser`)
    }

    useEffect(() => {
        startListLastPublicacion();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        startListLastEvento();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
   
   

    return (
        <div className="contenido">
            <div className="conte-general-home">
                <Navbar />
                <Header />
                <h1>Inicio</h1>
                <h3>Hola {user?.nombre}, en este menú podras ver lo último en tu feed</h3>
                <h1>Últimas publicaciones</h1>
                {
                        
                        publicaciones.map(publi =>{
                            
                    return(
                        <Publicacion titulo={publi?.titulo}
                        conte={publi?.descripcion}
                        persona={`${publi?.autor} `}
                        calendario={publi?.fecha} />
                    )
                
                })

                    
                    
                    

                }
                <h1>Siguiente evento</h1>
                <Eventos mes='Sep' dia='22' nombre='Salida Lago Calima' />
                <h1>Acciones</h1>
                <h3>Estas son las acciones que puedes hacer como super-administrador</h3>
                <SelectCreacion nombre="Registrar usuario" desc="Registrar un nuevo usuario" onClick={registrar} />
                <SelectCreacion nombre="Gestionar usuarios" desc="Consulta y edita los datos de los usuarios" onClick={gestionar} />
           
                <SelectCreacion nombre="Gestionar ramas" desc="Crea una nueva rama" onClick={rama} />


            </div>
        </div>
    )
}