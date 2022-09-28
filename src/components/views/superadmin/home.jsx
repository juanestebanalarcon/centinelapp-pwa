

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
export const HomeSuperAd= ()=>{
    const navigate = useNavigate();
    const {user} = useSelector(state=>state.auth);
    //const { superadmins } = useSelector(state => state.superAdmin);
   // const scoutActual = superadmins.find(superAd => superAd._id === user.uid);
    const { startListSuperAdmin } = useSuperAdminStore();
    
    //console.log(scoutActual)

    function admiScout(e){ 
        e.preventDefault();
        navigate(`/adminscouts`)
    }
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
    function rama(e){ 
        e.preventDefault();
        navigate(`/addRama`)
    }
    useEffect(()=>{
        startListSuperAdmin()
    },[])

    return(
    <div className="contenido">
     <div className="conte-general-home">
        <Navbar/>
        <Header/>
        <h1>Inicio</h1>
        <h3>Hola Usuario, en este menu podras ver lo ultimo en tu feed</h3>
        <h1>Ultimas publicaciones</h1>
        <Publicacion titulo="Crear nuevo scout" 
                    conte='Corrupti iste quo quod sapiente quaerat ullam iure voluptate. Consequuntur perspiciatis sit ut amet nihil adipisci. Tempore beatae facere perferendis sapiente possimus itaque sapiente tempora repellat...'
                    persona='Tracey Armstrong'
                    calendario='09-09-2022'/>
        <h1>Siguiente evento</h1>
        <Eventos mes='Sep' dia='22' nombre='Salida Lago Calima'/>
        <h1>Acciones</h1>
        <h3>Estas son las acciones que puedes hacer como super-administrador</h3>
        <SelectCreacion nombre="Administrar scouts" desc="Consulta y edita los datos" onClick={admiScout}/>
        <SelectCreacion nombre="Registrar usuario" desc="Registra un nuevo scout" onClick={scout}/>
        <SelectCreacion nombre="Registrar usuario" desc="Registra un nuevo administrador" onClick={administrador}/>
        <SelectCreacion nombre="Registrar usuario" desc="Registra un nuevo acudiente" onClick={acudiente}/>
        <SelectCreacion nombre="Crear una nueva rama" desc="Crea una nueva rama" onClick={rama}/>
       
        
        </div>
        </div>
    )
}