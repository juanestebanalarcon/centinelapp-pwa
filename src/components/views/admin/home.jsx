

import { Navbar } from "../../navbar"
import "../../../styles/styles.css"
import { Header } from "../../header"

import { SelectCreacion } from "../../selectCreacion"
import { useNavigate } from 'react-router-dom';
import { Publicacion } from "../../publicacion";
import { Eventos } from "../../eventos";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useAdminStore } from "../../../Hooks"

export const HomeAdmin= ()=>{
    const navigate = useNavigate();
    const { startListAdmin,startAdminRama } = useAdminStore();
    const {user} = useSelector(state=>state.auth);
    const { admins } = useSelector(state => state.admin);
    const {ramasAdmin}=useSelector(state => state.admin)
    
    const adminActual = admins.find(admin => admin._id === user.uid);

    function admiScout(e){ 
        e.preventDefault();
        navigate(`/adminscouts`)
    }
    
    useEffect(() => {
        startListAdmin()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        startAdminRama(user?.uid)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
    <div className="contenido">
     <div className="conte-general-home">
        <Navbar/>
        <Header/>
        <h1>Inicio</h1>
        <h3>Hola {user?.nombre}, en este menú podras ver lo último en tu feed</h3>
        <h1>Últimas publicaciones</h1>
        <Publicacion titulo="Bienvenido Scout" 
                    conte='Corrupti iste quo quod sapiente quaerat ullam iure voluptate. Consequuntur perspiciatis sit ut amet nihil adipisci. Tempore beatae facere perferendis sapiente possimus itaque sapiente tempora repellat...'
                    persona='Tracey Armstrong'
                    calendario='09-09-2022'/>
        <h1>Siguiente evento</h1>
        <Eventos mes='Sep' dia='22' nombre='Salida Lago Calima'/>
        <h1>Acciones</h1>
        <h3>Estas son las acciones que puedes hacer como administrador</h3>
        <SelectCreacion nombre="Gestionar scouts" desc="Consulta y edita los datos" onClick={admiScout}/>
        
       
        
        </div>
        </div>
    )
}