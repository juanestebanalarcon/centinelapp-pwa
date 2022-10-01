

import { Navbar } from "../../navbar"
import "../../../styles/styles.css"
import { Header } from "../../header"

import { Publicacion } from "../../publicacion";
import { Eventos } from "../../eventos";
import { useSelector } from 'react-redux';
export const HomeScout= ()=>{
    const {user} = useSelector(state=>state.auth);
   

    return(
    <div className="contenido">
     <div className="conte-general-home">
        <Navbar/>
        <Header/>
        <h1>Inicio</h1>
        <h3>Hola {user?.nombre}, en este menú podras ver lo último en tu feed</h3>
        <h1>Últimas publicaciones</h1>
        <Publicacion titulo="Crear nuevo scout" 
                    conte='Corrupti iste quo quod sapiente quaerat ullam iure voluptate. Consequuntur perspiciatis sit ut amet nihil adipisci. Tempore beatae facere perferendis sapiente possimus itaque sapiente tempora repellat...'
                    persona='Tracey Armstrong'
                    calendario='09-09-2022'/>
        <h1>Siguiente evento</h1>
        <Eventos mes='Sep' dia='22' nombre='Salida Lago Calima'/>
       
        
        </div>
        </div>
    )
}