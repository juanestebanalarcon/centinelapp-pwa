import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "../components"
import { AddRama, AddUsuario, AddUsuarioFicha, Login, PublicacionGeneral } from "../components/views"
import { ActPerfil } from "../components/views/act-perfil"
import { PerfilAcudiente } from "../components/views/acudiente/perfil"
import { PerfilAdmin } from "../components/views/admin/perfil"
import { CamContrasena } from "../components/views/cambiarContrasena"
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

export const AppRouter = () => {

    const { status, checkAuthToken, user } = useAuthStore()
    
    useEffect(() => {
        checkAuthToken();
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
                        
                        <Route path="/publicaciones" element={<PublicacionGeneral/>}/>
                        <Route path="/*" element={ <Navigate to="/"/> }/> 
                        <Route path="/adminscouts" element={<AdminScouts/>}/>
                        <Route path='/scout/:_id' element={<MostrarScout/>}/>
                        <Route path='/act-scout/:_id' element={<ActPerfilScout/>}/>
                </Routes>

            )
        }else if( user.rol === 1 ){
            return(
            <Routes>
            <Route path="/perfil" element={ <PerfilAdmin/>}/>
            <Route path="/" element={ <HomeAdmin/> }/>
            <Route path="/*" element={ <Navigate to="/"/> }/> 
            <Route path="/adminscouts" element={<AdminScouts/>}/>
            </Routes>
            )
    
        }else if( user.rol === 2 ){
            return(

            <Routes>
                <Route path="/" element={ <HomeScout/> }/>
                <Route path="/*" element={ <Navigate to="/"/> }/> 
                <Route path="/perfil" element={<PerfilScout/>}/>
                <Route path="/act-perfil" element={<ActPerfil/>}/>
                <Route path="/cambio-contrasena" element={<CamContrasena/>}/>
            </Routes>
            )
            
    
        }else if( user.rol === 3 ){
            return(
            <Routes>
            <Route path="/perfil" element={ <PerfilAcudiente/>}/>
            <Route path="/" element={ <HomeAcudiente/> }/>
            <Route path="/*" element={ <Navigate to="/"/> }/> 

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