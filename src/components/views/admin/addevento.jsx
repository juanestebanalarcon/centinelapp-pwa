import { Input } from "../../input"
import { Navbar } from "../../navbar"
import Button from '@mui/material/Button'
import "../../../styles/boton.css"
import "../../../styles/styles.css"
import "../../../styles/login.css"
import { useForm, useAdminStore } from "../../../Hooks"
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { Header } from "../../header"
import { useEffect } from 'react'

import { TextArea } from "../../textArea"
import { useSelector } from 'react-redux';
import { useEventoStore } from "../../../Hooks/useEventoStore"
import { SelectRamaAdmin } from "../../selectRamaAdmin"


const Publicacion = {
    titulo: '',
    descripcion: '',
    fechaYHoraInicio: '',
    fechaYHoraFinal: '',
   
  
      
  }
export const AddEventoAdmin = () => {
    
    
      const { titulo, descripcion, fechaYHoraInicio, fechaYHoraFinal,  onInputChange } = useForm(Publicacion);
      const { user } = useSelector(state => state.auth);
    
    
      const { startCrearEvento } = useEventoStore();
      //const {ramasAdmin}=useSelector(state => state.admin)
      const {startAdminRama}=useAdminStore();
      const navigate = useNavigate();
    
      function redirect(e) {
        e.preventDefault();
        navigate(`/publicaciones`)
      }
    
      const onSubmit = (e) => {
        e.preventDefault();
        let linkImagen='no tiene'
        let autor=user?.uid
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
          
            startCrearEvento({ titulo, descripcion, linkImagen, autor, fechaYHoraInicio, fechaYHoraFinal, idRama })
              navigate(`/home`)
            }
            
    
       
          
        }
    
        
    
    
        //console.log({nombre, apellido, correo, fechaNacimiento, celular})
        
      useEffect(() => {
        startAdminRama(user?.uid);
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
                <SelectRamaAdmin id='rama' placeholder="Selecciona una opción" />
                <h3>Titulo*</h3>
                <Input name='titulo' value={titulo} onChange={onInputChange} placeholder="Nuevo evento" type="text" />
                <h3>Mensaje*</h3>
                <TextArea name='descripcion' value={descripcion} onChange={onInputChange} placeholder="Descripción del evento" type="text" />
                <h3>Fecha de inicio*</h3>
                <Input name='fechaYHoraInicio' value={fechaYHoraInicio} onChange={onInputChange} placeholder="Selecciona una fecha" type="date" />
                <h3>Fecha de fin*</h3>
                <Input name='fechaYHoraFinal' value={fechaYHoraFinal} onChange={onInputChange} placeholder="Selecciona una fecha" type="date" />
                <br/>             
      
                <Button type="submit" variant="contained" color="primary">Crear</Button>
                <Button variant="outlined" color="primary" onClick={redirect}>Cancelar</Button>
              </form>
            </div>
          </div>
          <Navbar />
        </div>
)}
