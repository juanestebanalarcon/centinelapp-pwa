
import { Input } from "../input"
import { Navbar } from "../navbar"
import "../../styles/styles.css"
import { Header } from "../header"
import Button from '@mui/material/Button'
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
       
        <Button variant="contained" color="primary" onClick={scout}>Crear nuevo scout</Button>
        <Button variant="contained" color="primary" onClick={administrador}>Crear nuevo aministrador</Button>
        <Button variant="contained" color="primary" onClick={rama}>Crear nueva rama</Button>
        </div>
        </div>
    )
}