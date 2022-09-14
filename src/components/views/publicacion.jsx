import { Input } from "../input"
import { Navbar } from "../navbar"
import Button from '@mui/material/Button'
import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"
import { Header } from "../header"

export const Publicacion= ()=>{

    return(
        <div className="contenido">
        <div className="conte-general">
        <Header/>
        <div className="conte-imp">
        <h1>Publicaciones</h1>
        <h2>Selecciona una rama para ver sus mensajes, en icono + púedes crear una nueva publicacion</h2>
        <SelectCreacion nombre="General" desc="Publicaciones para todos"/>
        <SelectCreacion nombre="Cachorros" desc="10-12 Años"/>
        </div>
        </div>
        <Navbar/>
        </div>
        
 
    )
}