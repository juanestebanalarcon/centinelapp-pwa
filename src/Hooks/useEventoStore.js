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

const startCrearEvento = async ({ titulo, descripcion, linkImagen, autor, fechaYHoraInicio, fechaYHoraFinal, idRama }) => {
    
    console.log({ titulo, descripcion, linkImagen, autor, fechaYHoraInicio, fechaYHoraFinal, idRama})

    


    try {
      await CentinelApi.post('evento/create-evento', { titulo, descripcion, linkImagen, autor, fechaYHoraInicio, fechaYHoraFinal, idRama  })
      // console.log(data)

      swal({
        title: "El evento ha sido creado con éxito!",
        icon: "success",
      });



      //Alertas con el ok que viene en la data if(data.ok === true )

    } catch (error) {
      // console.log(error.request.status)
        alert(error)
        // swal({
        //   title: "Error",
        //   text: "El correo ya se encuentra registrado!",
        //   icon: "error",
        // });
      


      console.log(error)
    }

  }

  const startListLastEvento= async() => {
    const fecha = new Date();
    const hoy = fecha.getDate();
    const mesActual = fecha.getMonth() + 1; 
    const añoActual = fecha.getFullYear();
       
    let startDate =`${hoy}/${mesActual}/${añoActual}`
    console.log(startDate)
    try {
      
      const { data } = await CentinelApi.get(`evento/getEventsOfWeek`, {startDate});
      console.log(data)
      dispatch( onListEventos( data.Eventos_) )

    } catch (error) {
      console.log(error)
      

      
    }

  }

  const startListEventoGeneral= async() => {

    try {
      
      const { data } = await CentinelApi.get(`evento/allEvents`);
      console.log(data.Eventos_)
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
      console.log(data)
      dispatch( onListEventos( data.Eventos_) )
      if((data.Eventos_).length === 0){
        
        swal({
          
          title: "No existen eventos actualmente para esta rama",
          icon: "warning",
        });  
        navigate('/eventos')

      }

    } catch (error) {
      console.log(error)
      
    }

  }

  const startListEventoBusca= async() => {

    try {
      
      const { data } = await CentinelApi.get(`evento/${params._id}`);
      console.log(data.Eventos_)
      dispatch( onListEventoSelect( data.Eventos_) )

    } catch (error) {
      console.log(error)
      
    }

  }
  return { startCrearEvento,startListLastEvento, startListEventoGeneral, startListEvento, startListEventoBusca }
}
