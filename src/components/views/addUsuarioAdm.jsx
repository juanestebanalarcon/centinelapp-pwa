
import { Navbar } from "../navbar"
import { Input } from "../input"
import Button from '@mui/material/Button'
import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"
import { Header } from "../header"
import { Select } from "../select"
import { TextArea } from "../textArea"
export const AddUsuario= ()=>{

    return(
        <div className="contenido">
        <div className="conte-general">
        <Header/>
        <div className="conte-imp">
        <h1>Añadir usuario</h1>
        <h2>En este formulario puedes crear un nuevo usuario</h2>
        <h3>Nombre</h3>
        <Input type="text"/>
        <h3>Apellido</h3>
        <Input type="text"/>
        <h3>Correo electronico</h3>
        <Input type="email"/>
        <h3>Asignar rama</h3>
        <Select placeholder="Selecciona una opción" option="Numero 1"/>
        
        <h3>Comentarios adicionales</h3>
        <TextArea placeholder="Comentarios" type="text" rows="5" cols="4"/>
        
        <Button variant="contained" color="primary">Crear</Button>
        <Button variant="outlined" color="primary">Cancelar</Button>
        </div>
        </div>
        <Navbar/>
        </div>
        
 
    )
}