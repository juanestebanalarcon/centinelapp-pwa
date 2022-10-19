import { CentinelApi } from "../Api"
import swal from 'sweetalert';
import { onListEventos, onListEventoSelect } from "../store";
import { useDispatch } from "react-redux"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const useEventoStore = () => {
  const dispatch = useDispatch()
  const params = useParams();
  const navigate = useNavigate();

const startCrearEvento = async ({ titulo, descripcion, linkImagen, autorNom, autorApe,autorId, fechaYHoraInicio, fechaYHoraFinal, idRama }) => {
    console.log( titulo, descripcion, linkImagen, autorNom, autorApe,autorId, fechaYHoraInicio, fechaYHoraFinal, idRama)
       try {
      await CentinelApi.post('evento/create-evento', { titulo, descripcion, linkImagen, autor:{id:autorId, nombre:autorNom, apellido:autorApe}, fechaYHoraInicio, fechaYHoraFinal, idRama  })
      

      swal({
        title: "El evento ha sido creado con éxito!",
        icon: "success",
      });



      //Alertas con el ok que viene en la data if(data.ok === true )

    } catch (error) {
  


      console.log(error)
    }

  }

  const startListLastEvento= async() => {
    
       
    
    const fecha = new Date();
    let startDate=((fecha.toISOString()).toString()).split('T')[0]

    try {
      
      
      const { data } = await CentinelApi.get(`evento/getEventsOfWeek/${startDate}`);

      dispatch( onListEventos( data.Eventos_) )

    } catch (error) {
      console.log(error)
      

      
    }

  }

  const startListLastEventoRama= async(idRama) => {
    
       
    
    const fecha = new Date();
    let startDate=fecha.toISOString();

    try {
      
      
      const { data } = await CentinelApi.get(`evento/getEventByBranch/${idRama}/${startDate}`);

      dispatch( onListEventos( data.Eventos_) )

    } catch (error) {
      console.log(error)
      

      
    }

  }

 

  const startListEventoGeneral= async() => {

    try {
      
      const { data } = await CentinelApi.get(`evento/allEvents`);
      
      dispatch( onListEventos( data.Eventos_) )

    } catch (error) {
      console.log(error.request.status)
      if(error.request.status===404){
        document.getElementById('nohay').innerHTML=''
        swal({
          
          title: "No existen publicaciones actualmente para esta rama",
          icon: "warning",
        });  
        navigate('/publicaciones')

      }
    }

  }

  const startListEvento= async() => {

    try {
          
           
      const { data } = await CentinelApi.get(`evento/getEventByBranch/${params._id}`);
      
      dispatch( onListEventos( data.Eventos_) )
      

    } catch (error) {
      if(error.request.status===404){
        document.getElementById('nohay').innerHTML=''
        swal({
          
          title: "No existen eventos actualmente para esta rama",
          icon: "warning",
        });  
        navigate('/eventos')

      }
    }

  }

  const startListEventoBusca= async() => {

    try {
      
      const { data } = await CentinelApi.get(`evento/${params._id}`);

      dispatch( onListEventoSelect( data.Eventos_) )

    } catch (error) {
      console.log(error)
      
    }

  }

  const startUpdateEvento= async({titulo, descripcion, linkImagen, fechaYHoraInicio, fechaYHoraFinal, idRama}) => {

    try {
      
      await CentinelApi.put(`evento/${params._id}`,{titulo, descripcion, linkImagen, fechaYHoraInicio, fechaYHoraFinal, idRama});
    
      navigate(`/verEvento/${params._id}`)

    } catch (error) {
      console.log(error)
      
    }

  }

  const startDeleteEvento = async() => {

    try {
      
      await CentinelApi.delete(`evento/${params._id}`);
 
      navigate(`/eventos`)
    } catch (error) {
      console.log(error)
    }

  }
  return { startCrearEvento,startListLastEvento,startListLastEventoRama, startListEventoGeneral, startListEvento, startListEventoBusca, startUpdateEvento, startDeleteEvento}
}
