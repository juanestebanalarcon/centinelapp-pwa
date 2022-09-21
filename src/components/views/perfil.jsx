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



export const Perfil= ()=>{
    const { startLogout } = useAuthStore();

  
    const navigate = useNavigate();
    
    function actualizar(e){ 
        e.preventDefault();
        navigate(`/act-perfil`)
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
        <h5>Pearl</h5>

        <h3>Apellido</h3>
        <h5>Kulas</h5>

        <h3>Email</h3>
        <h5>Gene30@gmail.com</h5>

        <h3>Fecha de nacimiento</h3>
        <h5>Nov 28 2021</h5>

        <h3>Numero de celular</h3>
        <h5>3330000000</h5>

        <h3>Rama actual</h3>
        <h5>Cachorros</h5>
        
        <Button type="submit" variant="contained" color="primary" onClick={actualizar}>Actualizar datos</Button>
        <Button variant="outlined" color="primary" onClick={startLogout}>Cerrar sesión</Button>
      
        </div>
        </div>
        <Navbar/>
        </div>
        
 
    )
}