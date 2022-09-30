import { Input } from "../input"
import { Navbar } from "../navbar"
import Button from '@mui/material/Button'
import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"
import { Header } from "../header"
import { Select } from "../select"
import { useEffect} from 'react'
import { useForm, useRamasStore, useScoutStore } from "../../Hooks"
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const Scout = {
  nombre: '', 
  apellido: '', 
  email: '',  
  fechaNacimiento: '', 
  celular: ''
}

export const AddUsuarioFicha= ()=>{
    
    const { nombre, apellido, email, fecha_nacimiento, celular, onInputChange } = useForm(Scout);
    

    const { startCrearScout } = useScoutStore();
    const { startListarRamas } = useRamasStore();
    // const [ link_ficha_medica, setlink_ficha_medica ] = useState('');
    const navigate = useNavigate();



    // const onFileInputChange  = async({ target }) =>{
    //   if( target.files === 0 ) return;
    //   setlink_ficha_medica( await startUploadingImages( target.files ));
    // }
    function redirect(e){ 
        e.preventDefault();
        navigate(`/home`)
    }

    const onSubmit = (e)=>{
      e.preventDefault();
      const idRama = document.getElementById('rama').value;
      if(nombre ==='' || apellido===''|| email==='' || fecha_nacimiento==='' || celular===''|| idRama===''){
        swal({
          title: "Ingrese los campos obligatorios",
          icon: "warning"
          
        });

       return ;
        
      }else{
        if(celular <= 0){
          swal({
            title: "Ingrese un numero de celular valido",
            icon: "warning"
            
          });

        }
      }

      
      //console.log({nombre, apellido, correo, fechaNacimiento, celular})
      
      startCrearScout({nombre, apellido, email, fecha_nacimiento, celular, idRama})
    }

    

    useEffect(() => {
      startListarRamas();
    },[])

    return(
        <div className="contenido">
        <div className="conte-general">
        <Header/>
        <div className="conte-imp">
        <h1>Añadir un nuevo scout</h1>
        <h2>En este formulario puedes crear un nuevo usuario</h2>
        <form onSubmit={ onSubmit }> 
          <h3>Nombre*</h3>
          <Input name='nombre' value={ nombre } onChange={ onInputChange } placeholder="Nombre del scout" type="text" />
          <h3>Apellido*</h3>
          <Input name='apellido' value={ apellido } onChange={ onInputChange } placeholder="Apellido del scout" type="text" />
          <h3>Correo electronico*</h3>
          <Input name='email' value={ email } onChange={ onInputChange } placeholder="Correo" type="email" />
          <h3>Asignar rama*</h3>
          <Select id='rama' placeholder="Selecciona una opción" />
          <h3>Fecha de nacimiento*</h3>
          <Input name='fecha_nacimiento' value={ fecha_nacimiento } onChange={ onInputChange } placeholder="Fecha de nacimiento" type="date" />
          <h3>Numero celular*</h3>
          <Input name='celular' value={ celular } onChange={ onInputChange } placeholder="Numero de celular" type="number" />
          {/* <h3>Ficha medica*</h3> */}
          {/* <input
              type="file"
              accept=".pdf, .doc"
              onChange={  onFileInputChange }
              value={ link_ficha_medica}
              ref = { fileInputRef }
              style={{ display : 'none' }}
            /> */}
          <Button type="submit" variant="contained" color="primary">Crear</Button>
          <Button variant="outlined" color="primary" onClick={redirect}>Cancelar</Button>
        </form>
        </div>
        </div>
        <Navbar/>
        </div>
        
 
    )
}