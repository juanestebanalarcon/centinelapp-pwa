import { Navbar } from "../../navbar"

import "../../../styles/boton.css"
import "../../../styles/styles.css"
import "../../../styles/login.css"
import "../../../styles/publicacionsel.css"

import { useNavigate, useParams } from 'react-router-dom';

import { Header } from "../../header"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { usePublicacionStore } from "../../../Hooks"

export const VerPublicacionView = () => {


    const params = useParams();
    const navigate = useNavigate();
    

    const { startListPublicacionGeneral, startListPublicacionBusca, startDeletePublicacion } = usePublicacionStore()
    const { publicaciones } = useSelector(state => state.publicacion)
    const publicacionActual = publicaciones.find(publicacion => publicacion._id === params._id);
    console.log(publicacionActual)
    

    useEffect(() => {

        startListPublicacionGeneral();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        startListPublicacionBusca();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="contenido">
            <div className="conte-general">
                <Header />
                <div className="conte-publisel">
                    <h1>{publicacionActual?.titulo}</h1>
                    <h2>{publicacionActual?.descripcion}</h2>
                    <div className='sub-conte-gen'>
                        <div className='sub-conte-1'>
                            <img classname="imgbtn" src='../images/publicacion/persona.svg' onerror="this.onerror=null; this.src='persona.png'" alt='home' />

                            <h3>{publicacionActual?.autor}</h3>
                        </div>
                        <div className='sub-conte-2'>
                            <img classname="imgbtn" src='../images/publicacion/calendar.svg' onerror="this.onerror=null; this.src='calendar.png'" alt='home' />
                            <h3>{publicacionActual?.fecha}</h3>
                        </div>
                    </div>
                    <br/>
                   

                </div>
                
            </div>
            <Navbar />
        </div>


    )
}