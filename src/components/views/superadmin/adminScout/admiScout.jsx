import { Navbar } from "../../../navbar"
import "../../../../styles/styles.css"
import { Header } from "../../../header"
import { useAuthStore} from "../../../../Hooks/useAuthStore"
import { useSelector } from 'react-redux'
import { useScoutStore } from '../../../../Hooks';
import React, { useEffect } from 'react'
import { ObjScout } from "./objscout"

export const AdminScouts= ()=>{
    const { scouts } = useSelector(state => state.scout);
    const { startListScouts } = useScoutStore();
    console.log(scouts)
    useEffect(() => {
        startListScouts()
    },[])
    return(
    <div className="contenido">
     <div className="conte-general-home">
        <Navbar/>
        <Header/>
        <h1>Administrar scouts</h1>
        <h3>Hola Usuario, usando esta tabla podras administrar los scouts creados en el sistema</h3>
        <div>
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