

import { Navbar } from "../navbar"
import "../../styles/styles.css"
import { Header } from "../header"
import Button from '@mui/material/Button'
import { SelectCreacion } from "../selectCreacion"
import { useNavigate } from 'react-router-dom';
export const Home= ()=>{
    const navigate = useNavigate();
    
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

    return(
    <div className="contenido">
     <div className="conte-general">
        <Navbar/>
        <Header/>

        <SelectCreacion nombre="Crear nuevo scout" onClick={scout}/>
        <SelectCreacion nombre="Crear nuevo aministrador" onClick={administrador}/>
        <SelectCreacion nombre="Crear nueva rama" onClick={rama}/>
       
        
        </div>
        </div>
    )
}