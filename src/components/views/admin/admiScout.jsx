import { Navbar } from "../../navbar"
import "../../../styles/styles.css"
import "../../../styles/admiscout.css"
import { Header } from "../../header"

import { useSelector } from 'react-redux'
import { useScoutStore,useAdminStore } from '../../../Hooks';
import React, { useEffect } from 'react'
import { ObjScout } from "../superadmin/adminScout/objscout"

import { Button } from "@mui/material"
//import { SelectRamaAdmin } from "../../selectRamaAdmin"
import { SelectRamaAdminVer } from "../../selectRamaAdminVer"

export const AdminScoutsAdmin = () => {
    const { scouts } = useSelector(state => state.scout);
    const { user } = useSelector(state => state.auth);
    const { startListScouts } = useScoutStore();
    const {startAdminRama}=useAdminStore();
    const { startListarRamasSelect } = useScoutStore();

    const buscar = (e) => {
        e.preventDefault();

        const id = document.getElementById("rama").value

        console.log(id)
        if (id === '') {
            document.getElementById("Noe").innerHTML=""
            startListScouts()
            console.log('todos')

        } else {
            startListarRamasSelect({ id })
            
        }




    }
    useEffect(() => {
        
        startListScouts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        startAdminRama(user?.uid);
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])
    return (
        <div className="contenido">
            <div className="conte-general-home">
                <Navbar />
                <Header />
                <h1>Gestionar scouts</h1>
                <h3>Hola {user?.nombre}, usando esta tabla podras administrar los scouts creados en el sistema</h3>
                <div className="filtro-rama">
                    <SelectRamaAdminVer idcls="idclass" id='rama' placeholder="Selecciona una opción" />
                    <Button id='busq-filtro' type="submit" variant="contained" color="primary" onClick={buscar}><img id="lupa" src="https://i.ibb.co/Q8WyQVv/busqueda-de-lupa.png" alt="busqueda-de-lupa" /></Button>
                </div>

                <div className="cab-tabla-scout">
                    <h3 className="cabtabla">Nombre</h3>
                    <h4 className="cabtabla">Ver mas</h4>

                </div>
                <div id="tabla-scouts" className="tabla-scout">
                    <div id="Noe"></div>
                    {

                        scouts.map((scout) => (

                            <ObjScout
                                key={scout._id}
                                scout={scout}
                            />


                        ))
                    }
                </div>



            </div>
        </div>
    )
}