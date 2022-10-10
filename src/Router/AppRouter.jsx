import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "../components"
import { AddRama, AddUsuario, AddUsuarioFicha, Login, PublicacionGeneral } from "../components/views"
import { ActPerfil } from "../components/views/act-perfil"
import { PerfilAcudiente } from "../components/views/acudiente/perfil"
import { PerfilAdmin } from "../components/views/admin/perfil"
import { HomeScout } from "../components/views/scout/home"
import { Loading } from "../components/views/loading"
import { PerfilScout } from "../components/views/scout/perfil"
import { PerfilSuperAdmin } from "../components/views/superadmin/perfil"
import { useAuthStore } from "../Hooks"
import { HomeSuperAd } from "../components/views/superadmin/home"
import { HomeAdmin } from "../components/views/admin/home"
import { HomeAcudiente } from "../components/views/acudiente/home"
import { AdminScouts } from "../components/views/superadmin/adminScout/admiScout"
import { MostrarScout } from "../components/views/superadmin/mostrarScout"
import { ActPerfilScout } from "../components/views/superadmin/act-perfil"
import { AddUsuarioAcudiente } from "../components/views/addUsuarioAcudiente"
import { AddUser } from "../components/views/superadmin/addUser"
import { AdminAdmins } from "../components/views/superadmin/adminScout/admiAdmin"
import { MostrarAdmin } from "../components/views/superadmin/mostrarAdmin"
import { GestionUser } from "../components/views/superadmin/gestionUser"
import { AdminAcudiente } from "../components/views/superadmin/adminScout/admiAcudiente"
import { MostrarAcudiente } from "../components/views/superadmin/mostrarAcudiente"
import { ActPerfilAcudiente } from "../components/views/superadmin/act-perfil-acudiente"
import { ActPerfilAdmin } from "../components/views/superadmin/act-perfil-admin"
import {AddPublicacion} from "../components/views/addpublicacion"
import { PublicacionGeneralAdmin } from "../components/views/admin/publicacion"
import { EventoGeneralAdmin } from "../components/views/admin/evento"
import { EventosGeneral } from "../components/views/eventos"
import { AddEvento } from "../components/views/addevento"
import { AddPublicacionAdmin } from "../components/views/admin/addpublicacion"
import { AddEventoAdmin } from "../components/views/admin/addevento"
import { AdminScoutsAdmin } from "../components/views/admin/admiScout"
import { CamContrasenaAdmin } from "../components/views/admin/cambiarContrasena"
import { ActAdmin } from "../components/views/admin/act-perfil"
import { PublicacionRama } from "../components/views/superadmin/publicacionRama"
import { CamContrasenaScout } from "../components/views/scout/cambiarContrasena"
import { CamContrasenaAcudiente } from "../components/views/acudiente/cambiarContrasena"
import { CamContrasenaSuperAdmin } from "../components/views/superadmin/cambiarContrasena"

export const AppRouter = () => {

    const { status, checkAuthToken, user } = useAuthStore()
    
    useEffect(() => {
        checkAuthToken();
       // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    
    if( status === "checking"){
        return (
            <>
            <Loading/>
                
            </>
        )
    }

    if ( status === "Not-Authenticated" ){
        return(
            <Routes>
                <Route path="/login" element={ <Login/> }/>
                <Route path="/*" element={ <Layout/> }/> 
                <Route path="/load" element={ <Loading/>}/>
            </Routes>
        )
    }else{

        if ( user.rol === 0 ){
            return(

                <Routes>
                        <Route path="/" element={ <HomeSuperAd/> }/>
                        <Route path="/addUser" element={<AddUser/>}/>
                        <Route path="/addAdministrador" element={ <AddUsuario/> }/>
                        <Route path="/addRama" element={ <AddRama/> }/>
                        <Route path="/addScout" element={ <AddUsuarioFicha/>}/>
                        <Route path="/addAcudiente" element={<AddUsuarioAcudiente/>}/>
                        <Route path="/perfil" element={ <PerfilSuperAdmin/>}/>
                        <Route path="/act-perfil" element={<ActPerfil/>}/>
                        <Route path="/updatepassword" element={<CamContrasenaSuperAdmin/>}/>
                        
                        
                        
                        <Route path="/publicaciones" element={<PublicacionGeneral/>}/>
                        <Route path="/*" element={ <Navigate to="/"/> }/> 

                        <Route path="/adminUser" element={<GestionUser/>}/>
                        <Route path="/adminscouts" element={<AdminScouts/>}/>
                        <Route path='/scout/:_id' element={<MostrarScout/>}/>
                        <Route path="/adminadmin" element={<AdminAdmins/>}/>
                        <Route path='/admin/:_id' element={<MostrarAdmin/>}/>
                        <Route path="/adminacudiente" element={<AdminAcudiente/>}/>
                        <Route path='/acudientes/:_id' element={<MostrarAcudiente/>}/>
                        
                        <Route path='/act-scout/:_id' element={<ActPerfilScout/>}/>
                        <Route path="/act-acud/:_id" element={<ActPerfilAcudiente/>}/>
                        <Route path="/act-admin/:_id" element={<ActPerfilAdmin/>}/>

                        <Route path="/publicaciones" element={<PublicacionGeneral/>}/>
                        <Route path="/add-publicacion" element={<AddPublicacion/>}/>
                        <Route path="/pub-rama/:_id" element={<PublicacionRama/>}/>

                        <Route path="/eventos" element={<EventosGeneral/>}/>
                        <Route path="/add-evento" element={<AddEvento/>}/>
                </Routes>

            )
        }else if( user.rol === 1 ){
            return(
            <Routes>
            <Route path="/perfil" element={ <PerfilAdmin/>}/>
            <Route path="/" element={ <HomeAdmin/> }/>
            <Route path="/*" element={ <Navigate to="/"/> }/> 
            <Route path="/adminscouts" element={<AdminScoutsAdmin/>}/>
            <Route path="/publicaciones" element={<PublicacionGeneralAdmin/>}/>
            <Route path="/add-publicacion" element={<AddPublicacionAdmin/>}/>
            <Route path="/eventos" element={<EventoGeneralAdmin/>}/>
            <Route path="/add-evento" element={<AddEventoAdmin/>}/>
            <Route path="/updatepassword" element={<CamContrasenaAdmin/>}/>
            <Route path="/act-perfil" element={<ActAdmin/>}/>
            </Routes>
            )
    
        }else if( user.rol === 2 ){
            return(

            <Routes>
                <Route path="/" element={ <HomeScout/> }/>
                <Route path="/*" element={ <Navigate to="/"/> }/> 
                <Route path="/perfil" element={<PerfilScout/>}/>
                
                <Route path="/updatepassword" element={<CamContrasenaScout/>}/>
            </Routes>
            )
            
    
        }else if( user.rol === 3 ){
            return(
            <Routes>
            <Route path="/perfil" element={ <PerfilAcudiente/>}/>
            <Route path="/" element={ <HomeAcudiente/> }/>
            <Route path="/*" element={ <Navigate to="/"/> }/> 
            <Route path="/updatepassword" element={<CamContrasenaAcudiente/>}/>
            

            </Routes>
            )
        }

    }

//   return (
//     <Routes>

//         {

//             (status === 'Not-Authenticated')
//                 ?(
//                     <>
//                         <Route path="/login" element={ <Login/> }/>
//                         <Route path="/*" element={ <Layout/> }/> 
//                     </>
//                 )
//                 :(
//                     ( user.tipo === "1" )
//                         ?(
//                     <>
//                         <Route path="/" element={ <Home/> }/>
                        
//                         <Route path="/addAdministrador" element={ <AddUsuario/> }/>
//                         <Route path="/addRama" element={ <AddRama/> }/>
//                         <Route path="/addScout" element={ <AddUsuarioFicha/>}/>
//                         <Route path="/load" element={ <Loading/>}/>
                      
//                         <Route path="/publicaciones" element={<PublicacionGeneral/>}/>
//                         <Route path="/*" element={ <Navigate to="/"/> }/> 
//                     </>
//                     ):(null

//                     )
//           )
          

//         }

//     </Routes>
//         )

    }