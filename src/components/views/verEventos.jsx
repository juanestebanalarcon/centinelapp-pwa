import { Navbar } from "../navbar"
import Button from '@mui/material/Button'
import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"
import "../../styles/publicacionsel.css"

import { useParams } from 'react-router-dom';

import { Header } from "../header"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { BotonFlotanteEdit } from "../btn-flotante-edit"
import { useEventoStore } from "../../Hooks/useEventoStore"
import { Calendar } from "../calendar"

export const VerEvento = () => {


    const params = useParams();
    

    const {startListEventoGeneral, startListEventoBusca}=useEventoStore();
    const { eventos } = useSelector(state => state.evento)
    const eventoActual = eventos.find(evento => evento._id === params._id);
    console.log(eventoActual)
    
    function convertir(mes) {    
        let res
        var numeroMes = parseInt(mes);
        if(! isNaN(numeroMes) && numeroMes >= 1  && numeroMes <= 12 ) {
            res = meses[numeroMes - 1];
        }
        return res
        }
        var meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
        var inicio = (eventoActual?.fechaYHoraInicio).toString();
       var mesini= inicio.substring(4, 6)
       var diaini= inicio.substring(6, 8)

       var fin = (eventoActual?.fechaYHoraFinal).toString();
       var mesfin= fin.substring(4, 6)
       var diafin= fin.substring(6, 8)
    


    useEffect(() => {

        startListEventoGeneral();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        startListEventoBusca();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    

    


    return (
        <div className="contenido">
            <div className="conte-general">
                <Header />
                <div className="conte-publisel">
                    <h1>{eventoActual?.titulo}</h1>
                    <h2>{eventoActual?.descripcion}</h2>
                    <div className='sub-conte-gen'>
                        <div className='sub-conte-1'>
                            <img classname="imgbtn" src='../images/publicacion/persona.svg' onerror="this.onerror=null; this.src='persona.png'" alt='home' />

                            <h3>{eventoActual?.autor}</h3>


                        </div>
                       
                        <Calendar mesinicio={convertir(mesini)} diainicio={diaini} mesfin={convertir(mesfin)} diafin={diafin}/>
                       
                    </div>
                    <br/>
                    
                    
                    <Button variant="outlined" color="primary" >Eliminar</Button>

                </div>
                <BotonFlotanteEdit/>
            </div>
            <Navbar />
        </div>


    )
}