import { Navbar } from "../../navbar"
import Button from '@mui/material/Button'
import "../../../styles/boton.css"
import "../../../styles/styles.css"
import "../../../styles/login.css"
import { Header } from "../../header"
import { useSelector } from 'react-redux'
import { useAdminStore } from '../../../Hooks';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react'
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

export const MostrarAdmin = () => {
    const params = useParams();

   
    //const {startBusqRamaAdm }=useAdminStore();

    const { admins } = useSelector(state => state.admin);
    const {ramasAdmin}=useSelector(state => state.admin)
    const adminActual = admins.find(admin => admin._id === (params._id));
    const { startListAdmin, startDeleteAdmin } = useAdminStore();
    const {startAdminRama}=useAdminStore();
    console.log(ramasAdmin)
   


   const navigate = useNavigate();

    function actualizar(e) {
        e.preventDefault();
        navigate(`/act-admin/${params._id}`)
    }
    function eliminar(e) {
        
        e.preventDefault();
        console.log(params._id)
        
        swal({
            title: "Borrar administrador",
            text: "Si acepta borrar el administrador se eliminaran todos los registros del usuario",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                startDeleteAdmin();
                //falta hacer que se vea el cambio
              navigate(`/adminadmin`)
            } else {
              
            }
          });
    }
     useEffect(() => {
        startListAdmin()
        startAdminRama(params._id)
        
    //     ramasadmin.map(ramaA =>{
    //         startBusqRamaAdm(ramaA)})
        
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])

    

    return (
        <div className="contenido">
            <div className="conte-general">
                <Header />
                <div className="conte-imp">
                    <h1>Usuario:{`${adminActual?.nombre} ${adminActual?.apellido}`}</h1>


                    <h3>Nombre</h3>
                    <h5>{adminActual?.nombre}</h5>

                    <h3>Apellido</h3>
                    <h5>{adminActual?.apellido}</h5>

                    <h3>Email</h3>
                    <h5>{adminActual?.email}</h5>

                    {/* <h3>Numero de celular</h3>
                    <h5>{adminActual?.celular}</h5> */}

                    <h3>Ramas administradas</h3>
                    {ramasAdmin.map(ramaA =>{
                        return(
                            <h5>{ramaA.nombre}</h5>
                        )
                    })

                    }

                    
                    <Button type="submit" variant="contained" color="primary" onClick={actualizar}>Actualizar datos</Button>
                    <Button variant="contained" color="primary" onClick={eliminar}>Eliminar usuario</Button>

                </div>
            </div>
            <Navbar />
        </div>


    )
}