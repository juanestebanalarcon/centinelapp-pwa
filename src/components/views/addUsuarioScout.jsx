import { Input } from "../input"
import { Navbar } from "../navbar"
import Button from '@mui/material/Button'
import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"
import { Header } from "../header"
import { Select } from "../select"
import { useRef } from 'react'


export const AddUsuarioFicha= ()=>{
    
  
    const fileInputRef = useRef()
    
    


    return(
        <div className="contenido">
        <div className="conte-general">
        <Header/>
        <div className="conte-imp">
        <h1>Añadir scout</h1>
        <h2>En este formulario puedes crear un nuevo usuario</h2>
        <h3>Nombre</h3>
        <Input placeholder="Nombre del scout" type="text" />
        <h3>Apellido</h3>
        <Input placeholder="Apellido del scout" type="text" />
        <h3>Correo electronico</h3>
        <Input placeholder="Correo" type="email" />
        <h3>Ficha medica</h3>
        
        <div className='btn-file-30'>
            
            <input
              type="file"
              
              
              ref = { fileInputRef }
              style={{ display : 'none' }}
            />

            <button className='subir-imagen'
              
              onClick = { ()=> fileInputRef.current.click() }
            >
               <img classname="imgbtn" src='./images/boton/upload.svg' onerror="this.onerror=null; this.src='upload.png'"  alt='*'/>
               <h2>Seleccione un archivo*</h2>
            </button>
            </div>
        <h3>Asignar rama</h3>
        <Select placeholder="Selecciona una opción" option="Numero 1"/>
        <h3>Fecha de nacimiento</h3>
        <Input placeholder="Fecha de nacimiento" type="date" />
        <h3>Numero celular</h3>
        <Input placeholder="Numero de celular" type="number" />
        <Button variant="contained" color="primary">Crear</Button>
        <Button variant="outlined" color="primary">Cancelar</Button>
        </div>
        </div>
        <Navbar/>
        </div>
        
 
    )
}