import { Input } from "../../input"
import { Navbar } from "../../navbar"
import Button from '@mui/material/Button'
import "../../../styles/boton.css"
import "../../../styles/styles.css"
import "../../../styles/login.css"
import swal from 'sweetalert';

import { Header } from "../../header"
import {useForm,useAdminStore } from '../../../Hooks';


import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';



export const ActAdmin = () => {
    const navigate = useNavigate();
    const {user} = useSelector(state=>state.auth);
    const { admins } = useSelector(state => state.admin);
    const adminActual = admins.find(admin => admin._id === user.uid);

    
    const { startListAdmin, startUpdateAdminPersonal} = useAdminStore();
       
    function capitalizar(str) {
      return str.replace(/\w\S*/g, function(txt){
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
  }
    
    
    let { nombre='', apellido='', email='', onInputChange } = useForm(adminActual);
      
      const onSubmit = (e) => {
        e.preventDefault();
        let id= user?.uid
        console.log(id)
        console.log(user)
        let nombrex = capitalizar(nombre)
        let apellidox = capitalizar(apellido)
        
        nombre=nombrex
        apellido=apellidox
        console.log(nombre, apellido)
        
        if (nombre === '' || apellido === '' || email === '' ) {
          swal({
            title: "Ingrese los campos obligatorios",
            icon: "warning"
    
          });
    
          return;
    
        }else{
           
          startUpdateAdminPersonal({ id,nombre,apellido,email })
            navigate(`/perfil`)
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
           navigate(`/perfil`)
          } else {
           
          }
        });
      }

      
    useEffect(() => {
        startListAdmin();
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

                   
                    <Button type="submit" variant="contained" color="primary">Guardar</Button>
                    
                    <Button variant="outlined" color="primary" onClick={RegreNoG}>Regresar</Button>
                    </form>
                </div>
                
            </div>
            <Navbar />
        </div>


    )
}