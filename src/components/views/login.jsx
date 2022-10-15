
import { Input } from "../input"

import swal from 'sweetalert';

import Button from '@mui/material/Button'
import "../../styles/styles.css"
import "../../styles/login.css"
import "../../styles/boton.css"
import { useAuthStore, useForm } from "../../Hooks";
import { Select } from "../select-tipo";
import { InputPassword } from "../input-password";

const login = {
    tipo: '',
    email: '',
    password: '',
}

export const Login = () => {

    // function ingreso(e){ 
    //     e.preventDefault();
    //     navigate(`/home`)
    // }

    
    let { email, password, onInputChange } = useForm(login);
    const { startLogin } = useAuthStore();

    const onSubmit = (e) => {
        e.preventDefault();
        let emailx = email.toLowerCase()
        const tipo = parseInt(document.getElementById('tipo').value);
        email= emailx
        console.log(email)
        if (email === '' || password === ''|| tipo ==='') {
            swal({
                title: "Ingrese los campos obligatorios",
                icon: "warning"

            });

            return;

        }else{
            if(password.length<8){
                swal({
                    title: "Las contraseñas deben ser mayores a 8 caracteres",
                    icon: "warning"
    
                });

            }else{
                console.log(email, password, tipo);
            startLogin({ email, password, tipo });

            }
            
            

        }
        
    }

    return (
        <div className="Login">
            <div className="conte-login">
                <h1>Bienvenido de nuevo</h1>
                <h2>Ingresa a tu cuenta</h2>
                <form onSubmit={onSubmit}>
                    <h3>Tipo de usuario</h3>
                    <Select id="tipo" />
                    <h3>Correo electronico</h3>
                    <Input name="email" value={email} onChange={onInputChange} placeholder="example@mail.com" type="email" />
                    <h3>Contraseña</h3>
                    <InputPassword name="password" value={password} onChange={onInputChange} placeholder="Tu contraseña" type="password" />
                    <br/>
                    <Button type="submit" variant="contained" color="primary">Ingresa</Button>
                </form>
            </div>
        </div>


    )
}