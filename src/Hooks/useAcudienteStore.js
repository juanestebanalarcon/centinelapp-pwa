import { CentinelApi } from "../Api"
import swal from 'sweetalert';
import { onListAcudiente, onListAcudienteScout } from "../store";
import { useDispatch } from "react-redux"
import { useParams } from 'react-router-dom';
export const useAcudienteStore = () => {
    const dispatch = useDispatch()
    const params = useParams();
    const startCrearAcudiente = async ({ nombre, apellido, email, fecha_nacimiento, celular, idScout}) => {
    
      
        try {
            await CentinelApi.post('acudientes/create-acudiente',{ nombre, apellido, email, fecha_nacimiento, celular, idScout})
           
         
                swal({
                    title: "El usuario ha sido creado con éxito!",
                    icon: "success",
                  });
            
           
            
            //Alertas con el ok que viene en la data if(data.ok === true )

        } catch (error) {
            
            if(error.request.status === 400){
                swal({
                    title: "Error",
                    text: "El correo ya se encuentra registrado!",
                    icon: "error",
                  });
            }
            
            
            
        }

    }
    const startListAcudientes= async() => {

        try {
          
          const { data } = await CentinelApi.get('acudientes/allAcudientes');
         
          dispatch( onListAcudiente( data.acudientes_) )
    
        } catch (error) {
          console.log(error);
        }
    
      }
      const startListScoutsAcudiente= async() => {

        try {
          
          const { data } = await CentinelApi.get(`acudientes/getScouts/${params._id}`);
         console.log(data.scouts_)
         dispatch( onListAcudienteScout( data.acudientes_) )
    
        } catch (error) {
          console.log(error);
        }
    
      }
      const startDeleteAcudiente = async() => {

        try {
          const id= params._id
          console.log(id)
          const { data } = await CentinelApi.delete(`acudientes/${params._id}`);
          console.log(data)
          
          
        } catch (error) {
          console.log(error)
        }
    
      }
      



    return { startListAcudientes, startCrearAcudiente, startListScoutsAcudiente,startDeleteAcudiente}
}
