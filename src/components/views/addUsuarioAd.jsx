import { Input } from "../input"
import { Navbar } from "../navbar"
import Button from '@mui/material/Button'
import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"
import { Header } from "../header"
import { useNavigate } from 'react-router-dom';
export const AddUsuarioIniAd= ()=>{
    const navigate = useNavigate();
    
    function admin(e){ 
        e.preventDefault();
        navigate(`/addAdministrador`)
    }
    return(
        <div className="contenido">
        <div className="conte-general">
        <Header/>
        <div className="conte-imp">
        <h1>Añadir usuario</h1>
        <h2>En este formulario puedes crear un nuevo usuario</h2>
        <h3>Nombre</h3>
        <Input placeholder="Nueva publicación" type="text"/>
        <h3>Apellido</h3>
        <Input placeholder="Nueva publicación" type="text"/>
        <h3>Correo electronico</h3>
        <Input placeholder="Nueva publicación" type="email"/>
        <Button variant="contained" color="primary" onClick={admin}>Crear</Button>
        <Button variant="outlined" color="primary">Cancelar</Button>
        </div>
        </div>
        <Navbar/>
        </div>
        
 
    )
}