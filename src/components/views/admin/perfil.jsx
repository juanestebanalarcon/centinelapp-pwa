import { Navbar } from "../../navbar"
import Button from '@mui/material/Button'
import "../../../styles/boton.css"
import "../../../styles/styles.css"
import "../../../styles/login.css"

import { Header } from "../../header"
import { useAuthStore} from "../../../Hooks/useAuthStore"

import React, { useEffect } from 'react'
import { useSelector } from "react-redux"
import { useAdminStore } from "../../../Hooks"
import { useNavigate } from "react-router-dom"

export const PerfilAdmin= ()=>{
    const { startLogout } = useAuthStore();
    const {user} = useSelector(state=>state.auth);
    const { admins } = useSelector(state => state.admin);
    const {ramasAdmin}=useSelector(state => state.admin)
    
    const adminActual = admins.find(admin => admin._id === user.uid);

    console.log(adminActual)
    
    const { startListAdmin,startAdminRama } = useAdminStore();
    

  
    const navigate = useNavigate();
    
    function actualizar(e){ 
        e.preventDefault();
        navigate(`/act-perfil`)
    }
    function contrasena(e){ 
        e.preventDefault();
        navigate(`/updatepassword`)
    }
    useEffect(() => {
        startListAdmin()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        startAdminRama(user?.uid)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
   
  
    
    return(
        <div className="contenido">
        <div className="conte-general">
        <Header/>
        <div className="conte-imp">
        <h1>Hola, {adminActual?.nombre}</h1>
        <h2>Aqui estan tus datos personales</h2>
        {/* AQUI VA LA FOTO DEL USUARIO */}
        <img src={ adminActual?.link_imagen } className='foto' alt="foto"/>
 
        <h3>Nombre</h3>
        <h5>{adminActual?.nombre}</h5>

        <h3>Apellido</h3>
        <h5>{adminActual?.apellido}</h5>

        <h3>Email</h3>
        <h5>{adminActual?.email}</h5>



        <h3>Ramas administradas</h3>
                    {ramasAdmin.map(ramaA =>{
                        return(
                            <h5>{ramaA.nombre}</h5>
                        )
                    })

                    }

        <Button variant="contained" color="primary" onClick={contrasena}>Cambiar contraseña</Button>
        <Button  variant="contained" color="primary" onClick={actualizar}>Actualizar datos</Button>
        <Button variant="outlined" color="primary" onClick={startLogout}>Cerrar sesión</Button>
      
        </div>
        </div>
        <Navbar/>
        </div>
        
 
    )
}