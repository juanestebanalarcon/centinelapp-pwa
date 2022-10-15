
import { Navbar } from "../navbar"
import { Input } from "../input"
import Button from '@mui/material/Button'
import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"
import swal from 'sweetalert';
import { Header } from "../header"

import { useForm, useRamasStore, useAdminStore } from "../../Hooks"
import { useEffect } from 'react'

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CameraAlt } from "@mui/icons-material"

const Admin = {
  nombre: '',
  apellido: '',
  email: '',
  ramasAsignadas: []

}
export const AddUsuario = () => {

  function capitalizar(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  let { nombre, apellido, email, ramasAsignadas, onInputChange } = useForm(Admin);
  let imagen;
  const [link_imagen, setLinkImagen] = useState('');
  const fileInputRefI = useRef();
  const { startCrearAdmin } = useAdminStore();
  const { startListarRamas } = useRamasStore();
  const { ramas } = useSelector(state => state.rama);

  const navigate = useNavigate();

  function redirect(e) {
    e.preventDefault();
    navigate(`/home`)
  }

  const onFileInputChangeI = async ({ target }) => {
    if (target.files === 0) return;
    const link = await startUploadingFiles(target.files, 'Imagenes')
    setLinkImagen(link);
  }

  // const verificarcheck =(e)=>{
  //     e.preventDefault();
  //     ramas.map(rama => {
  //     if(document.getElementById(rama._id)){
  //         ramasAsignadas.push(rama._id)
  //     }

  //     })
  // }

  const onSubmit = (e) => {
    e.preventDefault();
    //verificarcheck();
    let nombrex = capitalizar(nombre)
    let apellidox = capitalizar(apellido)
    
    nombre=nombrex
    apellido=apellidox
    ramas.forEach(rama => {
      if (document.getElementById(rama._id).checked) {

        ramasAsignadas.push(rama._id)
      }
    })
    if (nombre === '' || apellido === '' || email === '' || ramasAsignadas.length === 0) {
      swal({
        title: "Ingrese los campos obligatorios",
        icon: "warning"

      });

      return;

    }else{
      startCrearAdmin({ nombre, apellido, email, ramasAsignadas, link_imagen })

    }



    //console.log({nombre, apellido, correo, fechaNacimiento, celular})

    
  }
  useEffect(() => {
    startListarRamas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="contenido">
      <div className="conte-general">
        <Header />
        <div className="conte-imp">
          <h1>Añadir un nuevo administrador</h1>
          <h2>En este formulario puedes crear un nuevo usuario</h2>
          <form onSubmit={onSubmit}>
            <h3>Nombre*</h3>
            <Input name='nombre' value={nombre} onChange={onInputChange} placeholder="Nombre del scout" type="text" />
            <h3>Apellido*</h3>
            <Input name='apellido' value={apellido} onChange={onInputChange} placeholder="Apellido del scout" type="text" />
            <h3>Correo electrónico*</h3>
            <Input name='email' value={email} onChange={onInputChange} placeholder="Correo" type="email" />
            <h3>Asignar rama*</h3>

            <div className="rama-in">
              {
                ramas.map(rama => {
                  return (

                    <label className="la-rama"><input className="rama" type='checkbox' id={rama._id} value={rama._id} /><h3>{rama.nombre}</h3></label>
                    //<FormControlLabel value={rama._id} control={<Checkbox />} label={rama.nombre} />

                  )


                })
              }


            </div>
            <h3>Foto*</h3>
            <input
              type="file"
              accept="image/*"
              onChange={onFileInputChangeI}
              value={imagen}
              ref={fileInputRefI}
              style={{ display: 'none' }}
            />

            <button className='subir'
              onClick={(e) => {
                e.preventDefault();
                fileInputRefI.current.click()
              }}
            >
              <CameraAlt style={{ color: '#D5D5D5', fontSize: '35px' }}/>
              <h2 className="sel">Seleccione una foto de perfil*</h2>
            </button>
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