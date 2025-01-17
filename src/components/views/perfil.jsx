import { Input } from "../input"
import { Navbar } from "../navbar"
import Button from '@mui/material/Button'
import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"
import { useForm, useRamaStore } from "../../Hooks"
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { Header } from "../header"
import { useAuthStore } from "../../Hooks/useAuthStore"
import { useSelector } from 'react-redux'
import { useScoutStore } from '../../Hooks';
import React, { useEffect } from 'react'

export const Perfil = () => {
    const { startLogout } = useAuthStore();
    const { user } = useSelector(state => state.auth);
    const { scouts } = useSelector(state => state.scout);
    const scoutActual = scouts.find(scout => scout._id === user.uid);
    console.log(scoutActual)

    const { startListScouts } = useScoutStore();



    const navigate = useNavigate();

    function actualizar(e) {
        e.preventDefault();
        navigate(`/act-perfil`)
    }
    useEffect(() => {
        startListScouts()
    }, [])



    return (
        <div className="contenido">
            <div className="conte-general">
                <Header />
                <div className="conte-imp">
                    <h1>Hola, {scoutActual?.nombre}</h1>
                    <h2>Aqui estan tus datos personales</h2>

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
                    <h5>Cachorros</h5>

                    <Button type="submit" variant="contained" color="primary" onClick={actualizar}style={{
                    width: '90%',
                    background: '#C1121F',
                    margin: '5%',
                    fontFamily: 'Ubuntu',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '18px'

              }}>Actualizar datos</Button>
                    <Button variant="outlined" color="primary" onClick={startLogout}>Cerrar sesión</Button>

                </div>
            </div>
            <Navbar />
        </div>


    )
}