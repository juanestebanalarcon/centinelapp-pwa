import { Input } from "../input"
import { Navbar } from "../navbar"
import Button from '@mui/material/Button'
import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"
import { useForm, useRamasStore } from "../../Hooks"
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { Header } from "../header"

const Rama = {
  nombre: '',
  edadMax: '',
  edadMin: ''

}

export const AddRama = () => {

  const { nombre, edadMax, edadMin, onInputChange } = useForm(Rama);
  const { startCrearRama } = useRamasStore();
  const navigate = useNavigate();

  function redirect(e) {
    e.preventDefault();
    navigate(`/home`)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (nombre === '' || edadMax === '' || edadMin === '') {
      swal({
        title: "Ingrese los campos obligatorios",
        icon: "warning"
      });
      return;

    }else{
      if(edadMax< 1 ||edadMin < 1 ){
        swal({
          title: "Las edades deben ser superiores o iguales a 1 año",
          icon: "warning"
        });
        return;

      }else{
        startCrearRama({ nombre, edadMax, edadMin })
      }
      

    }


    
  }


  return (
    <div className="contenido">
      <div className="conte-general">
        <Header />
        <div className="conte-imp">
          <h1>Crear rama</h1>
          <h2>En este formulario puedes crear una nueva rama</h2>
          <form onSubmit={onSubmit}>
            <h3>Nombre*</h3>
            <Input name='nombre' value={nombre} onChange={onInputChange} placeholder="Nombre de la rama" type="text" />
            <h3>Edades*</h3>
            <div className="hori-edad">
              <Input name='edadMax' iddiv='maxedad' value={edadMax} onChange={onInputChange} placeholder="Max" type="number" min="1"/>
              <Input name='edadMin' iddiv='minedad' value={edadMin} onChange={onInputChange} placeholder="Min" type="number" min= "1"/>
            </div>
            <br/>
            <Button type="submit" variant="contained" color="primary">Crear</Button>
            <Button variant="outlined" color="primary" onClick={redirect}>Cancelar</Button>
          </form>
        </div>
      </div>
      <Navbar />
    </div>


  )
}