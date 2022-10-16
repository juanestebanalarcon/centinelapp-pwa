

import { Navbar } from "../../navbar"
import "../../../styles/styles.css"
import { Header } from "../../header"

import { Publicacion } from "../../publicacion";
import { Eventos } from "../../eventos";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { usePublicacionStore, useRamasStore, useScoutStore } from "../../../Hooks";
import { useEventoStore } from "../../../Hooks/useEventoStore";
import { useNavigate } from "react-router-dom";
export const HomeScout = () => {
    const navigate = useNavigate();
    

    var meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Di"];
    const rediPublicacion = (id) => (e) => {
        e.preventDefault();
        navigate(`/verPublicacion/${id}`)
    }

    function convertir(mes) {    
    let res
    var numeroMes = parseInt(mes);
    if(! isNaN(numeroMes) && numeroMes >= 1  && numeroMes <= 12 ) {
        res = meses[numeroMes - 1];
    }
    return res
    }
    const rediEventos = (id) => (e) => {
        e.preventDefault();
        navigate(`/verEvento/${id}`)
    }

    const { user } = useSelector(state => state.auth);
    const { ramaIdScout } = useSelector(state => state.rama);
    const { publicaciones } = useSelector(state => state.publicacion);
    const { eventos } = useSelector(state => state.evento);
    console.log(user?.uid)
    console.log(ramaIdScout)
    const { startListScouts } = useScoutStore();
    const { startListarRamaIDValue } = useRamasStore();
    const { startListLastPublicacionRama } = usePublicacionStore();
    const { startListLastEventoRama } = useEventoStore();
    
    useEffect(() => {
        startListScouts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        startListarRamaIDValue(user?.uid)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        startListLastPublicacionRama(ramaIdScout)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        startListLastEventoRama(ramaIdScout)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    

    return (
        <div className="contenido">
            <div className="conte-general-home">
                <Navbar />
                <Header />
                <h1>Inicio</h1>
                <h3>Hola {user?.nombre}, en este menú podras ver lo último en tu feed</h3>
                <h1>Últimas publicaciones</h1>
                {

                    publicaciones.map(publi => {

                        return (
                            <Publicacion titulo={publi?.titulo}
                                conte={publi?.descripcion}
                                persona={`${publi?.autor} `}
                                calendario={publi?.fecha}
                                onClick={rediPublicacion(publi?._id)} />
                        )

                    })



                }
                <h1>Siguiente evento</h1>
                {

                    eventos.map(event => {
                        let fecha = (event?.fechaYHoraInicio).toString();
                        let mes = fecha.substring(5, 7)
                        let dia = fecha.substring(8, 10)


                        return (
                            <Eventos nombre={event?.titulo}
                                dia={dia}

                                mes={convertir(mes)}
                                onClick={rediEventos(event?._id)}
                            />
                        )
                    })

                }


            </div>
        </div>
    )
}