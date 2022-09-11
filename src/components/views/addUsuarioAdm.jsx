import { Input } from "../input"
import { Navbar } from "../navbar"
import Button from '@mui/material/Button'
import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"
import { Header } from "../header"
import { Select } from "../select"
export const AddUsuario= ()=>{

    return(
        <div className="contenido">
        <div className="conte-general">
        <Header/>
        <h1>Añadir administrador</h1>
        <h2>En este formulario puedes crear un nuevo usuario</h2>
        <h3>Tipo</h3>
        <Select placeholder="Selecciona una opción" option="Numero 1"/>
        <h3>Nombre</h3>
        <Input placeholder="Nueva publicación" type="text"/>
        <h3>Apellido</h3>
        <Input placeholder="Nueva publicación" type="text"/>
        <h3>Correo electronico</h3>
        <Input placeholder="Nueva publicación" type="email"/>
        <h3>Asignar rama</h3>
        <Select placeholder="Selecciona una opción" option="Numero 1"/>
        <Button variant="contained" color="primary">Crear</Button>
        <Button variant="outlined" color="primary">Cancelar</Button>
        
        </div>
        <Navbar/>
        </div>
        
 
    )
}