import { CentinelApi } from "../Api"
import swal from 'sweetalert';
import { onListScouts } from "../store";
import { useDispatch } from "react-redux"

export const useAcudienteStore = () => {
    const dispatch = useDispatch()
  
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
         
          dispatch( onListScouts( data.acudiente_) )
    
        } catch (error) {
          console.log(error);
        }
    
      }




    return { startListAcudientes, startCrearAcudiente}
}
