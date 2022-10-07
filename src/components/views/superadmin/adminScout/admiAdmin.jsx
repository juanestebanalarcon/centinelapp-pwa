import { Navbar } from "../../../navbar"
import "../../../../styles/styles.css"
import "../../../../styles/admiscout.css"
import { Header } from "../../../header"

import { useSelector } from 'react-redux'
import { useRamasStore, useAdminStore } from '../../../../Hooks';
import React, { useEffect } from 'react'


import { SelectRama } from "../../../selectRama"
import { Button } from "@mui/material"
import { ObjAdmin } from "./objAdmin"

export const AdminAdmins = () => {
    const { admins } = useSelector(state => state.admin);
    const { user } = useSelector(state => state.auth);
    const { startListAdmin } = useAdminStore();
    const { startListarRamas } = useRamasStore();
    

    const buscar = (e) => {
        e.preventDefault();

        const id = document.getElementById("rama").value

        console.log(id)
       




    }
    useEffect(() => {
        startListAdmin()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        startListarRamas()
        // eslint-disable-next-line react-hooks/exhaustive-deps
     
    
    }, [])
    return (
        <div className="contenido">
            <div className="conte-general-home">
                <Navbar />
                <Header />
                <h1>Gestionar Administradores</h1>
                <h3>Hola {user?.nombre}, usando esta tabla podras administrar los scouts creados en el sistema</h3>
                {/* <div className="filtro-rama">
                    <SelectRama idcls="idclass" id='rama' placeholder="Selecciona una opción" />
                    <Button id='busq-filtro' type="submit" variant="contained" color="primary" onClick={buscar}><img id="lupa" src="https://i.ibb.co/Q8WyQVv/busqueda-de-lupa.png" alt="busqueda-de-lupa" /></Button>
                </div> */}

                <div className="cab-tabla-scout">
                    <h3 className="cabtabla">Nombre</h3>
                    <h4 className="cabtabla">Ver mas</h4>

                </div>
                <div id="tabla-scouts" className="tabla-scout">
                    {

                        admins.map((admin) => (

                            <ObjAdmin
                                key={admin._id}
                                admin={admin}
                            />


                        ))
                    }
                </div>



            </div>
        </div>
    )
}