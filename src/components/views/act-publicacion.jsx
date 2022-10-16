import { Input } from "../input"
import { Navbar } from "../navbar"
import Button from '@mui/material/Button'
import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"
import { useForm, useRamasStore, usePublicacionStore } from "../../Hooks"
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { Header } from "../header"
import { useEffect } from 'react'
import { Select } from "../select"
import { TextArea } from "../textArea"
import { useSelector } from 'react-redux';


export const ActPublicacion = () => {
  const params = useParams();
 
  
  const { startListarRamas } = useRamasStore();
  const {startListPublicacionGeneral, startListPublicacionBusca, startUpdatePublicacion}=usePublicacionStore();
  const navigate = useNavigate();  
  const { publicaciones } = useSelector(state => state.publicacion)
  const publicacionActual = publicaciones.find(publicacion => publicacion._id === params._id);
  const { ramas } = useSelector(state => state.rama);


  let { titulo='', descripcion='', ramaAsignada='', onInputChange } = useForm(publicacionActual);
  console.log(publicacionActual)  
  
      
      
    
      function redirect(e) {
        e.preventDefault();
        navigate(`/publicaciones`)
      }
    
      const onSubmit = (e) => {
        e.preventDefault();
        let linkImagen='no tiene'
       
   
        let date = new Date();
        let fecha= date.toDateString()
        ramaAsignada= document.getElementById("rama").value
       
        let desc=descripcion.replace(/n/g,'<br/>');
        descripcion= desc
        console.log(fecha)
        console.log(descripcion)
        
        
    
        if (titulo === '' || descripcion === '' ) {
          swal({
            title: "Ingrese los campos obligatorios",
            icon: "warning"
    
          });
    
          return;
    
        }else{
          
          startUpdatePublicacion({ titulo, descripcion, ramaAsignada, linkImagen, fecha })
              navigate(`/home`)
            }
            
    
       
          
        }
    
        
    
    
      
        
      useEffect(() => {
        startListarRamas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        startListPublicacionGeneral();
        startListPublicacionBusca();
      }, [])
    
      return (
        <div className="contenido">
          <div className="conte-general">
            <Header />
            <div className="conte-imp">
              <h1>Crear una publicación</h1>
              <h2>En este formulario puedes crear una nueva publicación</h2>
              <form onSubmit={onSubmit}>
                <h3>Rama del mensaje*</h3>
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
                <h3>Titulo de la publicación*</h3>
                <Input name='titulo' value={titulo} onChange={onInputChange} placeholder="Titulo de la publicación" type="text" />
                <h3>Mensaje*</h3>
                <TextArea name='descripcion' value={descripcion} onChange={onInputChange} placeholder="Descripción de la publicación" type="text" />
                 <br/>             
      
                <Button type="submit" variant="contained" color="primary">Crear</Button>
                <Button variant="outlined" color="primary" onClick={redirect}>Cancelar</Button>
              </form>
            </div>
          </div>
          <Navbar />
        </div>
)}
