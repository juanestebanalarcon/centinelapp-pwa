import { Input } from "../../input"
import { Navbar } from "../../navbar"
import Button from '@mui/material/Button'
import "../../../styles/boton.css"
import "../../../styles/styles.css"
import "../../../styles/login.css"
import swal from 'sweetalert';

import { Header } from "../../header"
import { useForm, useAcudienteStore } from '../../../Hooks';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import { SelectScout } from "../../select-scout";
// import AddIcon from '@mui/icons-material/Add';



export const ActPerfilAcudiente = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { startListAcudientes, startUpdateAcudiente } = useAcudienteStore();
  const { acudientes } = useSelector(state => state.acudiente);
  const acudienteActual = acudientes.find(acudiente => acudiente._id === (params._id));
  function capitalizar(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }


  let { nombre = '', apellido = '', email = '', fecha_nacimiento = '', celular = '', onInputChange } = useForm(acudienteActual);
  //fecha_nacimiento=reformatDateString(fecha_nacimiento);
  //console.log(ramaIdScout)
  //document.querySelector('#rama').value=ramaIdScout

  
  const onSubmit = (e) => {
    e.preventDefault();
    const id = params._id
    let nombrex = capitalizar(nombre)
    let apellidox = capitalizar(apellido)
    
    nombre=nombrex
    apellido=apellidox
    
    
    if (nombre.trim() === '' || apellido.trim() === '' || email.trim() === '' || fecha_nacimiento.trim() === '' || celular.trim() === '') {
      swal(
        'Error',
        'No puede enviar el contenido o el titulo en blanco',
        'error'
      )
    } else {
      startUpdateAcudiente({ id, nombre, apellido, email, fecha_nacimiento, celular })
      navigate(`/scout/${params._id}`)
    }
  }


  const RegreNoG = (e) => {
    e.preventDefault();
    swal({
      title: "Salir sin guardar",
      text: "Si acepta salir, no se guardara la informacion modificada",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          navigate(`/adminacudiente`)
        } else {
          swal("Continua editando");
        }
      });
  }
  // const mostrar1= (e) =>{
  //   e.preventDefault();
  //   document.getElementById('scout2').style.display="flex"
      
  // }

  useEffect(() => {
    startListAcudientes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="contenido">
      <div className="conte-general">
        <Header />
        <div className="conte-imp">
          <h1>Actualizar datos</h1>
          <h2>Aqui estan tus datos personales</h2>
          <form onSubmit={onSubmit}>
            <h3>Nombre</h3>
            <Input name='nombre' value={nombre} type="text" onChange={onInputChange} />


            <h3>Apellido</h3>
            <Input name='apellido' value={apellido} type="text" onChange={onInputChange} />

            <h3>Email</h3>
            <Input name='email' value={email} type="email" onChange={onInputChange} />

            <h3>Fecha de nacimiento</h3>
            <Input name='fecha_nacimiento' value={fecha_nacimiento} type="date" onChange={onInputChange} />

            <h3>Numero de celular</h3>
            <Input name='celular' value={celular} type="text" onChange={onInputChange} />

            {/* <h3>Asignar scouts*</h3>
            <div className="asigScout">
              <SelectScout id='scouts1' placeholder="Selecciona una opción" />
              <Button id='mas-scout' variant="contained" color="primary" onClick={mostrar1}><AddIcon /></Button>
            </div>
            <div className="asigScout" id="scout2">
              <SelectScout id='scouts2' placeholder="Selecciona una opción" />
              <Button id='mas-scout' variant="contained" color="primary" onClick={mostrar1}><AddIcon /></Button>
            </div> */}

            <Button type="submit" variant="contained" color="primary">Guardar</Button>

            <Button variant="outlined" color="primary" onClick={RegreNoG}>Regresar</Button>
          </form>
        </div>

      </div>
      <Navbar />
    </div>


  )
}