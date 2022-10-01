import { Input } from "../input"
import { Navbar } from "../navbar"
import Button from '@mui/material/Button'
import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"

import { useNavigate } from 'react-router-dom';

import { Header } from "../header"




export const ActPerfil = () => {



    const navigate = useNavigate();



    function cambiocontra(e) {
        e.preventDefault();
        navigate(`/cambio-contrasena`)
    }


    return (
        <div className="contenido">
            <div className="conte-general">
                <Header />
                <div className="conte-imp">
                    <h1>Hola, Pearl Kulas</h1>
                    <h2>Aqui estan tus datos personales</h2>

                    <h3>Nombre</h3>
                    <Input name='nombre' value="nombre" type="text" ></Input>


                    <h3>Apellido</h3>
                    <Input name='apellido' value="apellido" type="text" ></Input>

                    <h3>Email</h3>
                    <Input name='correo' value="holi@gmail.com" type="text" ></Input>

                    <h3>Fecha de nacimiento</h3>
                    <Input name='nacimiento' value="Nov 28 2003" type="text" ></Input>

                    <h3>Número de celular</h3>
                    <h5>3330000000</h5>

                    <h3>Rama actual</h3>
                    <h5>Cachorros</h5>

                    <Button type="submit" variant="contained" color="primary">Guardar</Button>
                    <Button type="submit" variant="contained" color="primary" onClick={cambiocontra}>Cambiar Contraseña</Button>

                </div>
            </div>
            <Navbar />
        </div>


    )
}