import { Input } from "../../input"
import { Navbar } from "../../navbar"
import Button from '@mui/material/Button'
import "../../../styles/boton.css"
import "../../../styles/styles.css"
import "../../../styles/login.css"
import { useForm, useRamaStore} from "../../../Hooks"
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { Header } from "../../header"
import { useAuthStore} from "../../../Hooks/useAuthStore"
import { useSelector } from 'react-redux'
import { useScoutStore } from '../../../Hooks';
import { useParams } from 'react-router-dom';
import React, { useEffect, useMemo } from 'react'


export const MostrarScout= ()=>{
    const params = useParams();
   
   
    const { scouts } = useSelector(state => state.scout);
    const scoutActual = scouts.find(scout => scout._id === (params._id));

    console.log(scouts)
    console.log(scoutActual)
    console.log()
   
    
    const { startListScouts } = useScoutStore();
    function activos(){
        let estado= scoutActual?.esActivo
        if(estado){
            return "valido";
        }else{
            return "no valido"
        }
    }

  
    const navigate = useNavigate();
    
    function actualizar(e){ 
        e.preventDefault();
        navigate(`/act-scout/${scoutActual._id}`)
    }
    useEffect(() => {
        startListScouts()
    },[])
   
  
    
    return(
        <div className="contenido">
        <div className="conte-general">
        <Header/>
        <div className="conte-imp">
        <h1>Datos personales</h1>
        
 
        <h3>Nombre</h3>
        <h5>{scoutActual?.nombre}</h5>

        <h3>Apellido</h3>
        <h5>{scoutActual?.apellido}</h5>

        <h3>Email</h3>
        <h5>{scoutActual?.email}</h5>

        <h3>Fecha de nacimiento</h3>
        <h5>{scoutActual?.fecha_nacimiento}</h5>

        <h3>Numero de celular</h3>
        <h5>{scoutActual?.celular}</h5>

        <h3>Rama actual</h3>
        <h5>Cachorros</h5>

        <h3>Estado</h3>
        <h5>{activos()}</h5>        
        <Button type="submit" variant="contained" color="primary" onClick={actualizar}>Actualizar datos</Button>

      
        </div>
        </div>
        <Navbar/>
        </div>
        
 
    )
}