import { Input } from "../../input"
import { Navbar } from "../../navbar"
import Button from '@mui/material/Button'
import "../../../styles/boton.css"
import "../../../styles/styles.css"
import "../../../styles/login.css"


import { Header } from "../../header"
import {useForm,useRamasStore,useScoutStore } from '../../../Hooks';
import { InputD } from "../../input-d"
import { Select } from "../../select"
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useEffect } from 'react'



export const ActPerfilScout = () => {

    const params = useParams();
    const { startListarRamas } = useRamasStore();
    const {startListarRamaIDValue}= useRamasStore();
    const { startListScouts } = useScoutStore();
    const { scouts } = useSelector(state => state.scout);
    const scoutActual = scouts.find(scout => scout._id === (params._id));
    const { ramaIdScout } = useSelector(state => state.rama);
    console.log(ramaIdScout)
    const { nombre='', apellido='', email='', fecha_nacimiento='', celular='', onInputChange } = useForm(scoutActual);
  
    //document.querySelector('#rama').value=ramaIdScout
    

    useEffect(() => {
        startListarRamas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        startListScouts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        startListarRamaIDValue(params._id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        
        
    }, [])
    return (
        <div className="contenido">
            <div className="conte-general">
                <Header />
                <div className="conte-imp">
                    <h1>Actualizar datos</h1>
                    <h2>Aqui estan tus datos personales</h2>

                    <h3>Nombre</h3>
                    <Input name='nombre' value={nombre} type="text" onChange={onInputChange}  />


                    <h3>Apellido</h3>
                    <Input name='apellido' value={apellido} type="text" onChange={onInputChange}  />

                    <h3>Email</h3>
                    <InputD name='correo' value={email} type="text" onChange={onInputChange} />

                    <h3>Fecha de nacimiento</h3>
                    <Input name='nacimiento' value={fecha_nacimiento} type="date" onChange={onInputChange}  />

                    <h3>Numero de celular</h3>
                    <Input name='celular' value={celular} type="text" onChange={onInputChange}  />

                    <h3>Rama actual</h3>
                    <Select id='rama' placeholder="Selecciona una opción" />

                    <Button type="submit" variant="contained" color="primary">Guardar</Button>

                    <Button variant="outlined" color="primary" >Cerrar sesión</Button>

                </div>
            </div>
            <Navbar />
        </div>


    )
}