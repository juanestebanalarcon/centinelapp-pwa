import { Input } from "../input"
import { Navbar } from "../navbar"
import Button from '@mui/material/Button'
import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"
import { Header } from "../header"
import { Select } from "../select"

export const AddUsuarioFicha= ()=>{

    return(
        <div className="contenido">
        <div className="conte-general">
        <Header/>
        <h1>Añadir scout</h1>
        <h2>En este formulario puedes crear un nuevo usuario</h2>
        <h3>Nombre</h3>
        <Input placeholder="Nombre del scout" type="text" />
        <h3>Apellido</h3>
        <Input placeholder="Apellido del scout" type="text" />
        <h3>Correo electronico</h3>
        <Input placeholder="Correo" type="email" />
        <h3>Ficha medica</h3>
        <Input placeholder="Ajunte la ficha medica" type="file" />
        <h3>Asignar rama</h3>
        <Select placeholder="Selecciona una opción" option="Numero 1"/>
        <h3>Fecha de nacimiento</h3>
        <Input placeholder="Fecha de nacimiento" type="date" />
        <h3>Numero celular</h3>
        <Input placeholder="Numero de celular" type="number" />
        <Button variant="contained" color="primary">Crear</Button>
        <Button variant="outlined" color="primary">Cancelar</Button>
        
        </div>
        <Navbar/>
        </div>
        
 
    )
}