

import { Navbar } from "../../navbar"
import "../../../styles/styles.css"
import { Header } from "../../header"
import { SelectCreacion } from "../../selectCreacion"
import { useNavigate } from 'react-router-dom';

import React from "react";
export const GestionUser = () => {
    const navigate = useNavigate();



    function acudiente(e) {
        e.preventDefault();
        navigate(`/adminacudiente`)
    }

    function scout(e) {
        e.preventDefault();
        navigate(`/adminscouts`)
    }
    function administrador(e) {
        e.preventDefault();
        navigate(`/adminadmin`)
    }


    return (
        <div className="contenido">
            <div className="conte-general-home">
                <Navbar />
                <Header />
                <h1>Gestionar usuarios</h1>
                <h3>Elige el tipo de usuario a registrar</h3>


                <SelectCreacion nombre="Scout" desc="Gestionar scouts" onClick={scout} />
                <SelectCreacion nombre="Administrador" desc="Gestionar administradores" onClick={administrador} />
                <SelectCreacion nombre="Acudiente" desc="Gestionar acudientes" onClick={acudiente} />


            </div>
        </div>
    )
}