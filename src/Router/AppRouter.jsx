import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "../components"
import { AddRama, AddUsuario, AddUsuarioFicha,  Home, Login, PublicacionGeneral } from "../components/views"
import { ActPerfil } from "../components/views/act-perfil"
import { CamContrasena } from "../components/views/cambiarContrasena"
import { HomeScout } from "../components/views/homeScout"
import { Loading } from "../components/views/loading"
import { Perfil } from "../components/views/perfil"
import { useAuthStore } from "../Hooks"

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
            </Routes>
        )
    }else{

        if ( user.rol === 0 ){
            return(

                <Routes>
                        <Route path="/" element={ <Home/> }/>
                        
                        <Route path="/addAdministrador" element={ <AddUsuario/> }/>
                        <Route path="/addRama" element={ <AddRama/> }/>
                        <Route path="/addScout" element={ <AddUsuarioFicha/>}/>
                        <Route path="/load" element={ <Loading/>}/>
                        
                        <Route path="/act-perfil" element={<ActPerfil/>}/>
                        <Route path="/cambio-contrasena" element={<CamContrasena/>}/>
                        <Route path="/publicaciones" element={<PublicacionGeneral/>}/>
                        <Route path="/*" element={ <Navigate to="/"/> }/> 
                </Routes>

            )
        }else if( user.rol === 1 ){
    
        }else if( user.rol === 2 ){
            return(

            <Routes>
                <Route path="/" element={ <HomeScout/> }/>
                <Route path="/*" element={ <Navigate to="/"/> }/> 
                <Route path="/perfil" element={<Perfil/>}/>
                <Route path="/act-perfil" element={<ActPerfil/>}/>
            </Routes>
            )
            
    
        }else if( user.rol === 3 ){
    
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