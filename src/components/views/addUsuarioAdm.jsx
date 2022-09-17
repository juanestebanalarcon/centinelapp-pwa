
import { Navbar } from "../navbar"
import { Input } from "../input"
import Button from '@mui/material/Button'
import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"
import swal from 'sweetalert';
import { Header } from "../header"
import { Select } from "../select"
import { TextArea } from "../textArea"
import { useForm, useRamasStore, useAdminStore } from "../../Hooks"
import { useEffect, useRef } from 'react'
import { Checkboxs } from "../checkbox"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux';

const Admin={
    nombre:'',
    apellido:'',
    email:'',
    ramasAsignadas:[]
    
}
export const AddUsuario= ()=>{
    

    const { nombre, apellido, email, ramasAsignadas, onInputChange } = useForm(Admin);

    const { startCrearAdmin } = useAdminStore();
    const { startListarRamas } = useRamasStore();
    const { ramas } = useSelector( state => state.rama );
    
    // const verificarcheck =(e)=>{
    //     e.preventDefault();
    //     ramas.map(rama => {
    //     if(document.getElementById(rama._id)){
    //         ramasAsignadas.push(rama._id)
    //     }
                          
    //     })
    // }

    const onSubmit = (e)=>{
        e.preventDefault();
        //verificarcheck();
        ramas.map(rama => {
            if(document.getElementById(rama._id).checked){
                
                ramasAsignadas.push(rama._id)
            }})
        if(nombre ==='' || apellido===''|| email==='' ){
          swal({
            title: "Ingrese los campos obligatorios",
            icon: "warning"
            
          });
  
         return ;
          
        }
    
  
        
        //console.log({nombre, apellido, correo, fechaNacimiento, celular})
        
        startCrearAdmin({nombre, apellido, email,ramasAsignadas})
      }
      useEffect(() => {
        startListarRamas();
      },[])
    return(
        <div className="contenido">
        <div className="conte-general">
        <Header/>
        <div className="conte-imp">
        <h1>Añadir usuario</h1>
        <h2>En este formulario puedes crear un nuevo usuario</h2>
        <form onSubmit={ onSubmit }> 
        <h3>Nombre*</h3>
          <Input name='nombre' value={ nombre } onChange={ onInputChange } placeholder="Nombre del scout" type="text" />
          <h3>Apellido*</h3>
          <Input name='apellido' value={ apellido } onChange={ onInputChange } placeholder="Apellido del scout" type="text" />
          <h3>Correo electronico*</h3>
          <Input name='email' value={ email } onChange={ onInputChange } placeholder="Correo" type="email" />
          <h3>Asignar rama*</h3>
          
    
        {
                    ramas.map(rama => {
                            return(
                       
                            <label><input  type='checkbox' id={rama._id} value={rama._id} />{rama.nombre}</label>
                            //<FormControlLabel value={rama._id} control={<Checkbox />} label={rama.nombre} />
                           
                           )

                           
                    })
                }
      
    
   
        
        <Button type="submit" variant="contained" color="primary">Crear</Button>
        <Button variant="outlined" color="primary">Cancelar</Button>
        </form>
        </div>
        </div>
        <Navbar/>
        </div>
        
 
    )
}