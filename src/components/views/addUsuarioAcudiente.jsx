import { Input } from "../input"
import { Navbar } from "../navbar"
import Button from '@mui/material/Button'
import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"
import { Header } from "../header"

import { useEffect } from 'react'
import { useForm, useScoutStore, useAcudienteStore } from "../../Hooks"
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { SelectScout } from "../select-scout"
import AddIcon from '@mui/icons-material/Add';

const Acudiente = {
  nombre: '',
  apellido: '',
  email: '',
  fechaNacimiento: '',
  celular: '',

}

export const AddUsuarioAcudiente = () => {

  const { nombre, apellido, email, fecha_nacimiento, celular, onInputChange } = useForm(Acudiente);


  const { startCrearAcudiente } = useAcudienteStore();
  const { startListScouts } = useScoutStore();
  const navigate = useNavigate();

  function redirect(e) {
    e.preventDefault();
    navigate(`/home`)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const idScout1 = document.getElementById('scouts1').value;
    const idScout2 = document.getElementById('scouts2').value;

    if (nombre === '' || apellido === '' || email === '' || fecha_nacimiento === '' || celular === '' || idScout1 === '') {
      swal({
        title: "Ingrese los campos obligatorios",
        icon: "warning"

      });

      return;

    }else{
      if (celular <= 0) {
        swal({
          title: "Ingrese un numero de celular valido",
          icon: "warning"

        });

      }else{
        if(idScout1===idScout2){
          alert('Agregue difernte')
        }else{
          let Scouts=[]
          Scouts.push(idScout1)
          if(idScout2.length > 0 ){
            Scouts.push(idScout2)
          }
          startCrearAcudiente({ nombre, apellido, email, fecha_nacimiento, celular, Scouts })
          navigate(`/home`)
        }
        

      }

      
    }

    


    //console.log({nombre, apellido, correo, fechaNacimiento, celular})

    
  }

  const mostrar1= (e) =>{
    e.preventDefault();
    document.getElementById('scout2').style.display="flex"
      
  }



  useEffect(() => {
    startListScouts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    document.getElementById('scout2').style.display="none"
  }, [])

  return (
    <div className="contenido">
      <div className="conte-general">
        <Header />
        <div className="conte-imp">
          <h1>Añadir un nuevo acudiente</h1>
          <h2>En este formulario puedes crear un nuevo usuario</h2>
          <form onSubmit={onSubmit}>
            <h3>Nombre*</h3>
            <Input name='nombre' value={nombre} onChange={onInputChange} placeholder="Nombre del scout" type="text" />
            <h3>Apellido*</h3>
            <Input name='apellido' value={apellido} onChange={onInputChange} placeholder="Apellido del scout" type="text" />
            <h3>Correo electrónico*</h3>
            <Input name='email' value={email} onChange={onInputChange} placeholder="Correo" type="email" />
            <h3>Fecha de nacimiento*</h3>
            <Input name='fecha_nacimiento' value={fecha_nacimiento} onChange={onInputChange} placeholder="Fecha de nacimiento" type="date" />
            <h3>Número celular*</h3>
            <Input name='celular' value={celular} onChange={onInputChange} placeholder="Número de celular" type="number" />
            <h3>Asignar scouts*</h3>
            <div className="asigScout">
            <SelectScout id='scouts1' placeholder="Selecciona una opción" />
            <Button id='mas-scout'  variant="contained" color="primary" onClick={mostrar1}><AddIcon/></Button>
            </div>
            <div className="asigScout" id="scout2">
            <SelectScout id='scouts2' placeholder="Selecciona una opción" />
            <Button id='mas-scout'  variant="contained" color="primary" onClick={mostrar1}><AddIcon/></Button>
            </div>
            


            <Button type="submit" variant="contained" color="primary">Crear</Button>
            <Button variant="outlined" color="primary" onClick={redirect}>Cancelar</Button>
          </form>
        </div>
      </div>
      <Navbar />
    </div>


  )
}