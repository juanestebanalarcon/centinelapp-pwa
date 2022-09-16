import { Input } from "../input"
import { Navbar } from "../navbar"
import Button from '@mui/material/Button'
import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"
import { Header } from "../header"

export const AddRama= ()=>{

    return(
        <div className="contenido">
        <div className="conte-general">
        <Header/>
        <div className="conte-imp">
        <h1>Crear rama</h1>
        <h2>En este formulario puedes crear una nueva rama</h2>
        <h3>Nombre</h3>
        <Input placeholder="Nueva publicación" type="text"/>
        <h3>Nombre participantes</h3>
        <Input placeholder="Nueva publicación" type="text"/>
        <h3>Edades</h3>
        <div className="hori-edad">
        <Input placeholder="Max" type="number"/>
        <Input placeholder="Min" type="number"/>
        </div>
        <Button variant="contained" color="primary">Crear</Button>
        <Button variant="outlined" color="primary">Cancelar</Button>
        </div>
        </div>
        <Navbar/>
        </div>
        
 
    )
}