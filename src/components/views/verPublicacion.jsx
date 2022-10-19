import { Navbar } from "../navbar"
import Button from '@mui/material/Button'
import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"
import "../../styles/publicacionsel.css"

import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { Header } from "../header"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { usePublicacionStore } from "../../Hooks"
import { BotonFlotanteEdit } from "../btn-flotante-edit"

export const VerPublicacion = () => {


    const params = useParams();
    const navigate = useNavigate();
    

    const { startListPublicacionGeneral, startListPublicacionBusca, startDeletePublicacion } = usePublicacionStore()
    const { publicaciones } = useSelector(state => state.publicacion)
    const publicacionActual = publicaciones.find(publicacion => publicacion._id === params._id);
    
   
    function eliminar(e) {
        e.preventDefault();
        
        
        swal({
            title: "Borrar publicacion",
            text: "¿Esta seguro de borrar todo el contenido de la publicacion ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                startDeletePublicacion();
                
              
            } else {
             return
            }
          });
    }
    const rediPublicacion = (id) => (e) => {
        e.preventDefault();
        navigate(`/actPublicacion/${id}`)
    }


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

                            <h3>{`${publicacionActual?.autor?.nombre} ${publicacionActual?.autor?.apellido} `}</h3>
                        </div>
                        <div className='sub-conte-2'>
                            <img classname="imgbtn" src='../images/publicacion/calendar.svg' onerror="this.onerror=null; this.src='calendar.png'" alt='home' />
                            
                            <h3>{publicacionActual?.fecha}</h3>
                        </div>
                    </div>
                    <br/>
                    <Button variant="outlined" color="primary" onClick={eliminar} >Eliminar</Button>

                </div>
                <BotonFlotanteEdit onClick={rediPublicacion(publicacionActual?._id)}/>
            </div>
            <Navbar />
        </div>


    )
}