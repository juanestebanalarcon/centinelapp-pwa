import { Input } from "../../input"
import { Navbar } from "../../navbar"
import Button from '@mui/material/Button'
import "../../../styles/boton.css"
import "../../../styles/styles.css"
import "../../../styles/login.css"
import swal from 'sweetalert';

import { Header } from "../../header"
import {useForm,useAdminStore } from '../../../Hooks';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';



export const ActPerfilAdmin = () => {
    const navigate = useNavigate();
    const params = useParams();
    
    const { startListAdmin, startAdminRama, startUpdateAdmin} = useAdminStore();
   
    const { ramas } = useSelector(state => state.rama);
    
    const { admins } = useSelector(state => state.admin);
    const {ramasAdmin}=useSelector(state => state.admin)
    const adminActual = admins.find(admin => admin._id === (params._id));
    console.log(ramasAdmin)
    function capitalizar(str) {
      return str.replace(/\w\S*/g, function(txt){
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
  }
    
    
    let { nombre='', apellido='', email='', onInputChange } = useForm(adminActual);
    //fecha_nacimiento=reformatDateString(fecha_nacimiento);
    //console.log(ramaIdScout)
    //document.querySelector('#rama').value=ramaIdScout
     
  
      const onSubmit = (e) => {
        e.preventDefault();
        let id= params._id
        let nombrex = capitalizar(nombre)
        let apellidox = capitalizar(apellido)
        
        nombre=nombrex
        apellido=apellidox
        console.log(nombre, apellido)
        let ramamas=[]
        ramas.forEach(rama => {
          if (document.getElementById(rama._id).checked) {
            
            ramamas.push(rama._id)
          }
        })
        let RamasNuevas=ramamas
        if (nombre === '' || apellido === '' || email === '' || RamasNuevas.length === 0) {
          swal({
            title: "Ingrese los campos obligatorios",
            icon: "warning"
    
          });
    
          return;
    
        }else{
            console.log(RamasNuevas)
            startUpdateAdmin({ id,nombre,apellido,email,RamasNuevas })
            navigate(`/admin/${params._id}`)
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
            navigate(`/scout/${params._id}`)
          } else {
            swal("Continua editando");
          }
        });
      }

      
    useEffect(() => {
        startListAdmin();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        startAdminRama(params._id)
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
                    <Input name='nombre' value={nombre} type="text" onChange={onInputChange}  />


                    <h3>Apellido</h3>
                    <Input name='apellido' value={apellido} type="text" onChange={onInputChange}  />

                    <h3>Email</h3>
                    <Input name='email' value={email} type="email" onChange={onInputChange} />

                   
                    <h3>Asignar rama*</h3>

            <div className="rama-in">
              {
                ramas.map(ramaSE => {
                  let asignada= false
                  ramasAdmin.forEach((ramaA)=>{
                    if(ramaSE._id=== ramaA._id){
                    
                    asignada=true

                  }

                  })
                  
                  return (

                    <label className="la-rama"><input className="rama" type='checkbox' id={ramaSE._id} value={ramaSE._id} checked={asignada} /><h3>{ramaSE.nombre}</h3></label>
                    //<FormControlLabel value={rama._id} control={<Checkbox />} label={rama.nombre} />

                  )


                })
              }


            </div>


                    <Button type="submit" variant="contained" color="primary">Guardar</Button>
                    
                    <Button variant="outlined" color="primary" onClick={RegreNoG}>Regresar</Button>
                    </form>
                </div>
                
            </div>
            <Navbar />
        </div>


    )
}