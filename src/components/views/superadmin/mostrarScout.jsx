import { Navbar } from "../../navbar"
import Button from '@mui/material/Button'
import "../../../styles/boton.css"
import "../../../styles/styles.css"
import "../../../styles/login.css"
import { Header } from "../../header"
import { useSelector } from 'react-redux'
import { useRamasStore, useScoutStore } from '../../../Hooks';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


export const MostrarScout = () => {
    const params = useParams();
    
    const { startListScouts } = useScoutStore();
    const { startDeleteScout } = useScoutStore();
    const {startListarRamaID}= useRamasStore();

    const { scouts } = useSelector(state => state.scout);
    const scoutActual = scouts.find(scout => scout._id === (params._id));
    const { ramaScout } = useSelector(state => state.rama);
    


   const navigate = useNavigate();

    function actualizar(e) {
        e.preventDefault();
        navigate(`/act-scout/${params._id}`)
    }
    function eliminar(e) {
        e.preventDefault();
        console.log(params._id)
        
        swal({
            title: "Borrar scout",
            text: "Si acepta borrar el scout se eliminaran todos los registros del usuario",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                startDeleteScout();
                //falta hacer que se vea el cambio
              navigate(`/adminscouts`)
            } else {
              
            }
          });
    }
    useEffect(() => {
        startListScouts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        startListarRamaID(params._id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    

    return (
        <div className="contenido">
            <div className="conte-general">
                <Header />
                <div className="conte-imp">
                    <h1>Usuario:{`${scoutActual?.nombre} ${scoutActual?.apellido}`}</h1>


                    <h3>Nombre</h3>
                    <h5>{scoutActual?.nombre}</h5>

                    <h3>Apellido</h3>
                    <h5>{scoutActual?.apellido}</h5>

                    <h3>Email</h3>
                    <h5>{scoutActual?.email}</h5>

                    <h3>Fecha de nacimiento</h3>
                    <h5>{scoutActual?.fecha_nacimiento}</h5>

                    <h3>Numero de celular</h3>
                    <h5>{scoutActual?.celular}</h5>

                    <h3>Rama actual</h3>
                    <h5>{ramaScout}</h5>

                    <Button  variant="contained" color="primary" onClick={actualizar}>Descargar Ficha Medica</Button>
                    <Button type="submit" variant="contained" color="primary" onClick={actualizar}>Actualizar datos</Button>
                    <Button variant="contained" color="primary" onClick={eliminar}>Eliminar usuario</Button>

                </div>
            </div>
            <Navbar />
        </div>


    )
}