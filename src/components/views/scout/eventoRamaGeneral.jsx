
import { Navbar } from "../../navbar"

import "../../../styles/boton.css"
import "../../../styles/styles.css"
import "../../../styles/login.css"
import { Header } from "../../header"
//import { SelectCreacion } from "../../selectCreacion"
import { useAdminStore,  useSuperAdminStore } from "../../../Hooks"
import { useSelector } from 'react-redux';
import { useEffect } from 'react'
//import swal from 'sweetalert';
//import { BotonFlotante } from "../../btn-flotante"

import { useEventoStore } from "../../../Hooks/useEventoStore"
import { Eventos } from "../../eventos"
import { useNavigate } from "react-router-dom"


export const EventoRamaGeneralView = () => {
    const navigate = useNavigate();    
    const {startListEventoGeneral}=useEventoStore();
    const { startListSuperAdmin } = useSuperAdminStore();
    const { startListAdmin } = useAdminStore();
     
  
    const {eventos}=useSelector(state => state.evento)
    //const { admins } = useSelector(state => state.admin);
    //const { superadmins } = useSelector(state => state.superadmin);
    //const [autor, setAutor] = useState('');
    var meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Di"];

    function convertir(mes) {    
    let res
    var numeroMes = parseInt(mes);
    if(! isNaN(numeroMes) && numeroMes >= 1  && numeroMes <= 12 ) {
        res = meses[numeroMes - 1];
    }
    return res
    }
    
    //const {user} = useSelector(state=>state.auth);
    console.log(eventos)
    const rediEventos = (id) => (e) => {
        e.preventDefault();
        navigate(`/verEvento/${id}`)
    }

    


    
    

    
    // function autore(e) {
    //     e.preventDefault();
    // publicaciones.map(publi =>{
    //     if(autor.length < 0){
    //         autor = admins.find(admin => admin._id === (publi?.autor));
    //     }else{
    //         autor = superadmins.find(sadmin => sadmin._id === (publi?.autor));

    //     }
        
    //     console.log(autor)
    // })
    // }

    
    useEffect(() => {
        
        startListEventoGeneral();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        
        startListAdmin();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        startListSuperAdmin();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="contenido">
            <div className="conte-general-rela">
                <Header />
                <div className="conte-imp" id="conte-sel">
                    <h1>Rama:General</h1>
                    <h3>Aqui estan los mensajes de todas las ramas</h3>
                    
                   
                    {
                        
                        eventos.map(evento =>{
                            let fecha = (evento?.fechaYHoraInicio).toString();
                            let mes= fecha.substring(5, 7)
                            let dia= fecha.substring(8, 10)
                            
                                
                        return(
                            <Eventos nombre={evento?.titulo} 
                            dia={dia}
                            
                            mes= {convertir(mes)}
                            onClick={rediEventos(evento?._id)}
                             />
                        )
                    
                    })

                        
                        
                        

                    }
                    
                    
                    
                    

                    
                </div>
            </div>
            <Navbar />
        </div>


    )
}