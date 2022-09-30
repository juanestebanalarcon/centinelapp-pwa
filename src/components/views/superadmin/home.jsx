import { Navbar } from "../../navbar"
import "../../../styles/styles.css"
import { Header } from "../../header"
import { SelectCreacion } from "../../selectCreacion"
import { useNavigate } from 'react-router-dom';
import { Publicacion } from "../../publicacion";
import { Eventos } from "../../eventos";
import { useSelector } from 'react-redux';

import React from "react";
export const HomeSuperAd = () => {
    const navigate = useNavigate();
    const { user } = useSelector(state => state.auth);


    function admiScout(e) {
        e.preventDefault();
        navigate(`/adminscouts`)
    }


    function rama(e) {
        e.preventDefault();
        navigate(`/addRama`)
    }
    function registrar(e) {
        e.preventDefault();
        navigate(`/addUser`)
    }


    return (
        <div className="contenido">
            <div className="conte-general-home">
                <Navbar />
                <Header />
                <h1>Inicio</h1>
                <h3>Hola {user?.nombre}, en este menu podras ver lo ultimo en tu feed</h3>
                <h1>Ultimas publicaciones</h1>
                <Publicacion titulo="Crear nuevo scout"
                    conte='Corrupti iste quo quod sapiente quaerat ullam iure voluptate. Consequuntur perspiciatis sit ut amet nihil adipisci. Tempore beatae facere perferendis sapiente possimus itaque sapiente tempora repellat...'
                    persona='Tracey Armstrong'
                    calendario='09-09-2022' />
                <h1>Siguiente evento</h1>
                <Eventos mes='Sep' dia='22' nombre='Salida Lago Calima' />
                <h1>Acciones</h1>
                <h3>Estas son las acciones que puedes hacer como super-administrador</h3>
                <SelectCreacion nombre="Gestionar scouts" desc="Consulta y edita los datos" onClick={admiScout} />
                <SelectCreacion nombre="Registrar usuario" desc="Registrar un nuevo usuario" onClick={registrar} />

                <SelectCreacion nombre="Crear una nueva rama" desc="Crea una nueva rama" onClick={rama} />


            </div>
        </div>
    )
}