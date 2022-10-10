import { Navbar } from "../../navbar"
import Button from '@mui/material/Button'
import "../../../styles/boton.css"
import "../../../styles/styles.css"
import "../../../styles/login.css"
import { Header } from "../../header"
import { useAuthStore} from "../../../Hooks/useAuthStore"
import { useSuperAdminStore } from '../../../Hooks';
import React, { useEffect } from 'react'
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


export const PerfilSuperAdmin= ()=>{
    const { startLogout } = useAuthStore();
    const {user} = useSelector(state=>state.auth);
    const { superadmins } = useSelector(state => state.superadmin);
    const superAdminAct = superadmins.find(superadmin => superadmin._id === user.uid);
    console.log(superAdminAct)
    
    const { startListSuperAdmin } = useSuperAdminStore();
    

  
    const navigate = useNavigate();
    
    // function actualizar(e){ 
    //     e.preventDefault();
    //     navigate(`/act-perfil`)
    // }
    function contrasena(e){ 
        e.preventDefault();
        navigate(`/updatepassword`)
    }
    useEffect(() => {
        startListSuperAdmin()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
   
  
    
    return(
        <div className="contenido">
        <div className="conte-general">
        <Header/>
        <div className="conte-imp">
        <h1>Hola, {user?.nombre}</h1>
        <h2>Aqui estan tus datos personales</h2>
 
        <h3>Nombre</h3>
        <h5>{superAdminAct?.nombre}</h5>

        <h3>Apellido</h3>
        <h5>{superAdminAct?.apellido}</h5>

        <h3>Email</h3>
        <h5>{superAdminAct?.email}</h5>

        
        <Button variant="contained" color="primary" onClick={contrasena}>Cambiar contraseña</Button>
        {/* <Button type="submit" variant="contained" color="primary" onClick={actualizar}>Actualizar datos</Button> */}
        <Button variant="outlined" color="primary" onClick={startLogout}>Cerrar sesión</Button>
      
        </div>
        </div>
        <Navbar/>
        </div>
        
 
    )
}