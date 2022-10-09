import { CentinelApi } from "../Api"
import swal from 'sweetalert';
// import { onListEventos } from "../store";
// import { useDispatch } from "react-redux"
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

export const useEventoStore = () => {
  // const dispatch = useDispatch()
  // const params = useParams();
  // const navigate = useNavigate();

const startCrearEvento = async ({ titulo, descripcion, linkImagen, autor, fechaYHoraInicio, fechaYHoraFinal, ramaAsignada }) => {
    
    console.log({ titulo, descripcion, linkImagen, autor, fechaYHoraInicio, fechaYHoraFinal, ramaAsignada})

    


    try {
      await CentinelApi.post('evento/create-evento', { titulo, descripcion, linkImagen, autor, fechaYHoraInicio, fechaYHoraFinal, ramaAsignada  })
      // console.log(data)

      swal({
        title: "La publicacion ha sido creado con éxito!",
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
  return { startCrearEvento }
}
