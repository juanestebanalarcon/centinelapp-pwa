import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { Layout } from "../components"
import { AddRama, AddUsuario, AddUsuarioFicha, AddUsuarioIniAd, AddUsuarioIniSc, Home, Login, PublicacionGeneral } from "../components/views"

export const AppRouter = () => {

    const { status, errorMessage } = useSelector( state => state.auth )

  return (
    <Routes>
    <Route path="/" element={<Layout />} />
    <Route path="/home" element={ <Home/> }/>
            <Route path="/login" element={ <Login/> }/>
            <Route path="/addAdministrador" element={ <AddUsuario/> }/>
            <Route path="/addRama" element={ <AddRama/> }/>
            <Route path="/addScout" element={ <AddUsuarioFicha/>}/>
            <Route path="/addUserAd" element={ <AddUsuarioIniAd/>}/>
            <Route path="/addUserSc" element={ <AddUsuarioIniSc/>}/>
            <Route path="/publicaciones" element={<PublicacionGeneral/>}/>
  </Routes>
  )
}
