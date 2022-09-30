import { Input } from "../input"
import { Navbar } from "../navbar"
import Button from '@mui/material/Button'
import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"


import { Header } from "../header"




export const CamContrasena = () => {








    return (
        <div className="contenido">
            <div className="conte-general">
                <Header />
                <div className="conte-imp">
                    <h1>Cambiar contraseña</h1>
                    <h2>Aqui puedes cambiar la contraseña, la contraseña original se encuentra en tu correo correo@correo.com, tiene que contener mayusculas, minusculas, simbolo y minimo 8 caracteres de longitud</h2>
                    <br />
                    <h3>Contraseña antigua</h3>
                    <Input name='nombre' value="contrasenaA" placeholder="Nombre del scout" type="text" />


                    <h3>Nueva contraseña</h3>
                    <Input name='nombre' value="contrasenaN" placeholder="Nombre del scout" type="text" />



                    <h3>Confirmar nueva contraseña</h3>
                    <Input name='nombre' value="contrasenaNC" placeholder="Nombre del scout" type="text" />


                    <Button type="submit" variant="contained" color="primary">Cambiar contraseña</Button>

                    <Button variant="outlined" color="primary" >Cancelar</Button>

                </div>
            </div>
            <Navbar />
        </div>


    )
}