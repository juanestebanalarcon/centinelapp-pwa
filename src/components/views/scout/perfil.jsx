
import { Navbar } from "../../navbar"
import Button from '@mui/material/Button'
import "../../../styles/boton.css"
import "../../../styles/styles.css"
import "../../../styles/login.css"

import { useNavigate } from 'react-router-dom';

import { Header } from "../../header"
import { useAuthStore} from "../../../Hooks/useAuthStore"
import { useSelector } from 'react-redux'
import { useScoutStore, useRamasStore } from '../../../Hooks';
import React, { useEffect } from 'react'

export const PerfilScout= ()=>{
    const { startLogout } = useAuthStore();
    const {user} = useSelector(state=>state.auth);
    const { scouts } = useSelector(state => state.scout);
    const scoutActual = scouts.find(scout => scout._id === user.uid);
    const { ramaScout } = useSelector(state => state.rama);
    console.log(scoutActual)
    
    const { startListScouts } = useScoutStore();
    const {startListarRamaID}= useRamasStore();
    

  
    const navigate = useNavigate();
    
    function actualizar(e){ 
        e.preventDefault();
        navigate(`/act-perfil`)
    }
    useEffect(() => {
        startListScouts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        startListarRamaID(user.uid)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
   
  
    
    return(
        <div className="contenido">
        <div className="conte-general">
        <Header/>
        <div className="conte-imp">
        <h1>Hola, {scoutActual?.nombre}</h1>
        <h2>Aquí están tus datos personales</h2>
 
        <h3>Nombre</h3>
        <h5>{scoutActual?.nombre}</h5>

        <h3>Apellido</h3>
        <h5>{scoutActual?.apellido}</h5>

        <h3>Email</h3>
        <h5>{scoutActual?.email}</h5>

        <h3>Fecha de nacimiento</h3>
        <h5>{scoutActual?.fecha_nacimiento}</h5>

        <h3>Número de celular</h3>
        <h5>{scoutActual?.celular}</h5>

        <h3>Rama actual</h3>
        <h5>{ramaScout}</h5>
        
        <Button type="submit" variant="contained" color="primary" onClick={actualizar}>Actualizar datos</Button>
        <Button variant="outlined" color="primary" onClick={startLogout}>Cerrar sesión</Button>
      
        </div>
        </div>
        <Navbar/>
        </div>
        
 
    )
}