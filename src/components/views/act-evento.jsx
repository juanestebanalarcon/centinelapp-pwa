import { Input } from "../input"
import { Navbar } from "../navbar"
import Button from '@mui/material/Button'
import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"
import { useForm, useRamasStore } from "../../Hooks"
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { Header } from "../header"
import { useEffect } from 'react'
import { TextArea } from "../textArea"
import { useSelector } from 'react-redux';
import { useEventoStore } from "../../Hooks/useEventoStore"


export const ActEvento = () => {
  const params = useParams();
  
  const {startListEventoGeneral, startListEventoBusca, startUpdateEvento}=useEventoStore();
  const { startListarRamas } = useRamasStore();
  const navigate = useNavigate();
  const { eventos } = useSelector(state => state.evento)
  const eventoActual = eventos.find(evento => evento._id === params._id);
  const { ramas } = useSelector(state => state.rama);

  const fecha = new Date();
  let hoy=(fecha.toISOString()).toString().split('T')[0]
  const { titulo= '', descripcion='', fechaYHoraInicio='', fechaYHoraFinal='', ramaAsignada='',  onInputChange } = useForm(eventoActual);
      
    
    
      
    
      function redirect(e) {
        e.preventDefault();
        navigate(`/verEvento/${params._id}`)
      }
    
      const onSubmit = (e) => {
        e.preventDefault();
        let linkImagen='no tiene'
       
      
        let idRama= document.getElementById("rama").value

    
        
        
    
        if (titulo === '' || descripcion === '' ) {
          swal({
            title: "Ingrese los campos obligatorios",
            icon: "warning"
    
          });
    
          return;
    
        }else{
          
          startUpdateEvento({ titulo, descripcion, linkImagen,  fechaYHoraInicio, fechaYHoraFinal, idRama })
            
            }
            
    
       
          
        }

        
  
    
        
    
    
       
        
      useEffect(() => {
        startListarRamas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        startListEventoGeneral();
        startListEventoBusca();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    
      return (
        <div className="contenido">
          <div className="conte-general">
            <Header />
            <div className="conte-imp">
              <h1>Actualizar un evento</h1>
              <h2>En este formulario puedes actualizar evento</h2>
              <form onSubmit={onSubmit}>
                <h3>Rama del evento*</h3>
                <select id='rama'  className='cajon-select'  >
                          <option value="">Seleccione una rama</option>
                          {
                            
                  

                              ramas.map(rama => {
                                let ramaes= false
                                
                                if(ramaAsignada[0]===rama._id){
                                    ramaes=true
                              
                                }
                                  return (
                                      <option value={rama._id} selected={ramaes}>{rama.nombre} </option>
                                  )
                              })
                          }
                      </select>
                <h3>Titulo*</h3>
                <Input name='titulo' value={titulo} onChange={onInputChange} placeholder="Nuevo evento" type="text" />
                <h3>Mensaje*</h3>
                <TextArea name='descripcion' value={descripcion} onChange={onInputChange} placeholder="Descripción del evento" type="text" />
                <h3>Fecha de inicio*</h3>
                <Input name='fechaYHoraInicio' value={((fechaYHoraInicio).toString()).split('T')[0]} onChange={onInputChange} placeholder="Selecciona una fecha" type="date" min={hoy}/>
                <h3>Fecha de fin*</h3>
                <Input name='fechaYHoraFinal' value={((fechaYHoraFinal).toString()).split('T')[0]} onChange={onInputChange} placeholder="Selecciona una fecha" type="date" min={hoy} />
                <br/>             
      
                <Button type="submit" variant="contained" color="primary">Actualizar</Button>
                <Button variant="outlined" color="primary" onClick={redirect}>Cancelar</Button>
              </form>
            </div>
          </div>
          <Navbar />
        </div>
)}
