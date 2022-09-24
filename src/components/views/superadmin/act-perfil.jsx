import { Input } from "../../input"
import { Navbar } from "../../navbar"
import Button from '@mui/material/Button'
import "../../../styles/boton.css"
import "../../../styles/styles.css"
import "../../../styles/login.css"
import { useForm, useRamaStore, useScoutStore} from "../../../Hooks"
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { Header } from "../../header"
import {  } from '../../../Hooks';
import { InputD } from "../../input-d"
import { Select } from "../../select"
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'



export const ActPerfilScout= ()=>{

    const params = useParams();
    const { scouts } = useSelector(state => state.scout);
    const scoutActual = scouts.find(scout => scout._id === (params._id));

  
    const navigate = useNavigate();

    const { startupdateScout } = useScoutStore();
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
        <h1>Actualizar datos</h1>
        <h2>Aqui estan tus datos personales</h2>
 
        <h3>Nombre</h3>
        <Input name='nombre' value={scoutActual?.nombre} type="text" onChange={  ()=>{}  } />
        

        <h3>Apellido</h3>
        <Input name='apellido' value={scoutActual?.apellido} type="text" onChange={  ()=>{}  } />

        <h3>Email</h3>
        <InputD name='correo' value={scoutActual?.email} type="text" />

        <h3>Fecha de nacimiento</h3>
        <Input name='nacimiento' value={scoutActual?.fecha_nacimiento} type="text" onChange={  ()=>{}  } />

        <h3>Numero de celular</h3>
        <Input name='celular' value={scoutActual?.celular} type="text" onChange={  ()=>{}  } />

        <h3>Rama actual</h3>
        <Select id='rama' placeholder="Selecciona una opción" />
        
        <Button type="submit" variant="contained" color="primary">Guardar</Button>
        
        <Button variant="outlined" color="primary" >Cerrar sesión</Button>
      
        </div>
        </div>
        <Navbar/>
        </div>
        
 
    )
}