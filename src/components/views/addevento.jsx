import { Input } from "../input"
import { Navbar } from "../navbar"
import Button from '@mui/material/Button'
import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"
import { useForm, useRamasStore } from "../../Hooks"
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { Header } from "../header"
import { useEffect } from 'react'
import { Select } from "../select"
import { TextArea } from "../textArea"
import { useSelector } from 'react-redux';
import { useEventoStore } from "../../Hooks/useEventoStore"

const Evento = {
    titulo: '',
    descripcion: '',
    fechaYHoraInicio: '',
    fechaYHoraFinal: '',
   
  
      
  }
export const AddEvento = () => {
    
    
      const { titulo, descripcion, fechaYHoraInicio, fechaYHoraFinal,  onInputChange } = useForm(Evento);
      const { user } = useSelector(state => state.auth);
      const fecha = new Date();
      let hoy=(fecha.toISOString()).toString().split('T')[0]
    
      const { startCrearEvento } = useEventoStore();
      const { startListarRamas } = useRamasStore();
      const navigate = useNavigate();


    
      function redirect(e) {
        e.preventDefault();
        navigate(`/publicaciones`)
      }
    
      const onSubmit = (e) => {
        e.preventDefault();
        let linkImagen='no tiene'
        let autorNom=user?.nombre
        let autorId=user?.uid
        let autorApe=user?.apellido
        console.log(user)
        let idRama= document.getElementById("rama").value
        console.log(idRama)
        console.log(descripcion)
        
        
    
        if (titulo === '' || descripcion === '' ) {
          swal({
            title: "Ingrese los campos obligatorios",
            icon: "warning"
    
          });
    
          return;
    
        }else{
          if( fechaYHoraInicio>fechaYHoraFinal ){
            swal({
              title: "La fecha de inicio debe ser inferior a la fecha de finalizacion",
              icon: "warning"
      
            });
      
            return;

          }else{
            startCrearEvento({ titulo, descripcion, linkImagen, autorNom, autorApe,autorId, fechaYHoraInicio, fechaYHoraFinal, idRama })
              navigate(`/home`)
            }

          }
          
            
            
    
       
          
        }
    
        
    
    
        //console.log({nombre, apellido, correo, fechaNacimiento, celular})
        
      useEffect(() => {
        startListarRamas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    
      return (
        <div className="contenido">
          <div className="conte-general">
            <Header />
            <div className="conte-imp">
              <h1>Crear un evento</h1>
              <h2>En este formulario puedes crear un nuevo evento</h2>
              <form onSubmit={onSubmit}>
                <h3>Rama del evento*</h3>
                <Select id='rama' placeholder="Selecciona una opción" />
                <h3>Titulo*</h3>
                <Input name='titulo' value={titulo} onChange={onInputChange} placeholder="Nuevo evento" type="text" />
                <h3>Mensaje*</h3>
                <TextArea name='descripcion' value={descripcion} onChange={onInputChange} placeholder="Descripción del evento" type="text" />
                <h3>Fecha de inicio*</h3>
                <Input name='fechaYHoraInicio' value={fechaYHoraInicio} onChange={onInputChange} placeholder="Selecciona una fecha" type="date" min={hoy} />
                <h3>Fecha de fin*</h3>
                <Input name='fechaYHoraFinal' value={fechaYHoraFinal} onChange={onInputChange} placeholder="Selecciona una fecha" type="date" min={hoy}/>
                <br/>             
      
                <Button type="submit" variant="contained" color="primary">Crear</Button>
                <Button variant="outlined" color="primary" onClick={redirect}>Cancelar</Button>
              </form>
            </div>
          </div>
          <Navbar />
        </div>
)}
