import { Input } from "../input"
import { Navbar } from "../navbar"
import Button from '@mui/material/Button'
import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"
import { useForm, useRamaStore} from "../../Hooks"
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { Header } from "../header"
import { useAuthStore} from "../../Hooks/useAuthStore"
import { InputD } from "../input-d"



export const ActPerfil= ()=>{

    
  
    const navigate = useNavigate();
    
    function redirect(e){ 
        e.preventDefault();
        navigate(`/home`)
    }

    function cambiocontra(e){ 
        e.preventDefault();
        navigate(`/cambio-contrasena`)
    }
    const onSubmit = (e)=>{
       
      }
  
    
    return(
        <div className="contenido">
        <div className="conte-general">
        <Header/>
        <div className="conte-imp">
        <h1>Hola, Pearl Kulas</h1>
        <h2>Aqui estan tus datos personales</h2>
 
        <h3>Nombre</h3>
        <InputD name='nombre' value="nombre" type="text" ></InputD>
        

        <h3>Apellido</h3>
        <InputD name='apellido' value="apellido" type="text" ></InputD>

        <h3>Email</h3>
        <InputD name='correo' value="holi@gmail.com" type="text" ></InputD>

        <h3>Fecha de nacimiento</h3>
        <InputD name='nacimiento' value="Nov 28 2003" type="text" ></InputD>

        <h3>Numero de celular</h3>
        <h5>3330000000</h5>

        <h3>Rama actual</h3>
        <h5>Cachorros</h5>
        
        <Button type="submit" variant="contained" color="primary">Guardar</Button>
        <Button type="submit" variant="contained" color="primary" onClick={cambiocontra}>Cambiar Contraseña</Button>
        <Button variant="outlined" color="primary" >Cerrar sesión</Button>
      
        </div>
        </div>
        <Navbar/>
        </div>
        
 
    )
}