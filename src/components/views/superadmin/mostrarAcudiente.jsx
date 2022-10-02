import { Navbar } from "../../navbar"
import Button from '@mui/material/Button'
import "../../../styles/boton.css"
import "../../../styles/styles.css"
import "../../../styles/login.css"
import { Header } from "../../header"
import { useSelector } from 'react-redux'
import { useAcudienteStore } from '../../../Hooks';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react'
import swal from 'sweetalert';


export const MostrarAcudiente = () => {
    const params = useParams();

    const { startListAcudientes } = useAcudienteStore();
    

    const { acudientes } = useSelector(state => state.acudiente);
    const acudienteActual = acudientes.find(acudiente => acudiente._id === (params._id));
    
    


   // const navigate = useNavigate();

    // function actualizar(e) {
    //     e.preventDefault();
    //     navigate(`/act-scout/${scoutActual._id}`)
    // }
    useEffect(() => {
       
        // eslint-disable-next-line react-hooks/exhaustive-deps
        startListAcudientes()
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    <h1>Usuario:{`${acudienteActual?.nombre} ${acudienteActual?.apellido}`}</h1>


                    <h3>Nombre</h3>
                    <h5>{acudienteActual?.nombre}</h5>

                    <h3>Apellido</h3>
                    <h5>{acudienteActual?.apellido}</h5>

                    <h3>Email</h3>
                    <h5>{acudienteActual?.email}</h5>

                    <h3>Fecha de nacimiento</h3>
                    <h5>{acudienteActual?.fecha_nacimiento}</h5>

                    <h3>Numero de celular</h3>
                    <h5>{acudienteActual?.celular}</h5>

                    <h3>Scout asociado</h3>
                    <h5>{acudienteActual?.Scout[0]}</h5>

                    
                    <Button type="submit" variant="contained" color="primary" onClick={actualizar}>Actualizar datos</Button>


                </div>
            </div>
            <Navbar />
        </div>


    )
}