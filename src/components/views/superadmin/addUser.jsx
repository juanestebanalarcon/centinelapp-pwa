

import { Navbar } from "../../navbar"
import "../../../styles/styles.css"
import { Header } from "../../header"

import { SelectCreacion } from "../../selectCreacion"
import { useNavigate } from 'react-router-dom';
import { Publicacion } from "../../publicacion";
import { Eventos } from "../../eventos";
import { useSelector } from 'react-redux';
import { useSuperAdminStore } from '../../../Hooks';
import React, { useEffect } from "react";
export const AddUser= ()=>{
    const navigate = useNavigate();
    

    
    function acudiente(e){ 
        e.preventDefault();
        navigate(`/addAcudiente`)
    }
    
    function scout(e){ 
        e.preventDefault();
        navigate(`/addScout`)
    }
    function administrador(e){ 
        e.preventDefault();
        navigate(`/addAdministrador`)
    }
    

    return(
    <div className="contenido">
     <div className="conte-general-home">
        <Navbar/>
        <Header/>
        <h1>Registar usuario</h1>
        <h3>Elige el tipo de usuario a registrar</h3>
        
       
        <SelectCreacion nombre="Scout" desc="Registra un nuevo scout" onClick={scout}/>
        <SelectCreacion nombre="Administrador" desc="Registra un nuevo administrador" onClick={administrador}/>
        <SelectCreacion nombre="Acudiente" desc="Registra un nuevo acudiente" onClick={acudiente}/>
        
        
        </div>
        </div>
    )
}