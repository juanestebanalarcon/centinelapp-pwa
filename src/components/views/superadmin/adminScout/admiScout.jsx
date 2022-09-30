import { Navbar } from "../../../navbar"
import "../../../../styles/styles.css"
import "../../../../styles/admiscout.css"
import { Header } from "../../../header"

import { useSelector } from 'react-redux'
import { useRamasStore, useScoutStore } from '../../../../Hooks';
import React, { useEffect } from 'react'
import { ObjScout } from "./objscout"
import { Select } from "../../../select"
import { SelectRama } from "../../../selectRama"
import { Button } from "@mui/material"

export const AdminScouts= ()=>{
    const { scouts } = useSelector(state => state.scout);
    const {user} = useSelector(state=>state.auth);
    const { startListScouts } = useScoutStore();
    const { startListarRamas } = useRamasStore();
    const { startListarRamasSelect } = useScoutStore();
    
    console.log(scouts.length)

    const buscar = (e)=>{
        e.preventDefault();
       
        const id=document.getElementById("rama").value
  
        console.log(id)
        if(id==''){
            startListScouts()

        }else{
        startListarRamasSelect({id})
        if(scouts.length===0){
            console.log('no tiene ejdjd')
        }
    }
       
     
        

      }
    useEffect(() => {
        startListScouts()
        startListarRamas()
    },[])
    return(
    <div className="contenido">
     <div className="conte-general-home">
        <Navbar/>
        <Header/>
        <h1>Gestionar scouts</h1>
        <h3>Hola {user?.nombre}, usando esta tabla podras administrar los scouts creados en el sistema</h3>
        <div className="filtro-rama">
        <SelectRama idcls="idclass" id='rama' placeholder="Selecciona una opción" />
        <Button id='busq-filtro' type="submit" variant="contained" color="primary" onClick={buscar}><img id="lupa" src="https://i.ibb.co/Q8WyQVv/busqueda-de-lupa.png" alt="busqueda-de-lupa"/></Button>
        </div>
        
        <div className="cab-tabla-scout">
            <h3 className="cabtabla">Nombre</h3>
            <h4 className="cabtabla">Ver mas</h4>

        </div>
        <div id="tabla-scouts" className="tabla-scout">
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