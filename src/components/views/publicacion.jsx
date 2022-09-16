
import { Navbar } from "../navbar"

import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"
import { Header } from "../header"
import { SelectCreacion } from "../selectCreacion"

export const PublicacionGeneral= ()=>{

    return(
        <div className="contenido">
        <div className="conte-general">
        <Header/>
        <div className="conte-imp">
        <h1>Publicaciones</h1>
        <h3>Selecciona una rama para ver sus mensajes, en icono + púedes crear una nueva publicacion</h3>
        <SelectCreacion nombre="General" desc="Publicaciones para todos"/>
        <SelectCreacion nombre="Cachorros" desc="10-12 Años"/>
        </div>
        </div>
        <Navbar/>
        </div>
        
 
    )
}