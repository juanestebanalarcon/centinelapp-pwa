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


export const MostrarAdmin = () => {
    const params = useParams();

   
    //const {startBusqRamaAdm }=useAdminStore();

    const { admins } = useSelector(state => state.admin);
    const {ramasAdmin}=useSelector(state => state.admin)
    const adminActual = admins.find(admin => admin._id === (params._id));
    const { startListAdmin } = useAdminStore();
    console.log(ramasAdmin)
    let ramasadmin=[]
    ramasadmin=adminActual?.ramasAsignadas
    //const { ramaScout } = useSelector(state => state.rama);
    console.log(adminActual)


   // const navigate = useNavigate();

    // function actualizar(e) {
    //     e.preventDefault();
    //     navigate(`/act-scout/${scoutActual._id}`)
    // }
     useEffect(() => {
        startListAdmin()
        
    //     ramasadmin.map(ramaA =>{
    //         startBusqRamaAdm(ramaA)})
        
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])

    function actualizar(e) {
        e.preventDefault();
        swal({
            title: "Actualmente esta funcion se encuentra en desarrollo",
            icon: "warning",
          });
    }


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
                    {ramasadmin.map(ramaA =>{
                        return(
                            <h5>{ramaA}</h5>
                        )
                    })

                    }

                    
                    <Button type="submit" variant="contained" color="primary" onClick={actualizar}>Actualizar datos</Button>


                </div>
            </div>
            <Navbar />
        </div>


    )
}