import { CentinelApi } from "../Api"
import swal from 'sweetalert';
import { onListScouts } from "../store";
import { useDispatch } from "react-redux"

export const useAcudienteStore = () => {
    const dispatch = useDispatch()
  
    const startCrearAcudiente = async ({ nombre, apellido, email, fecha_nacimiento, celular, idScout}) => {
        console.log({ nombre, apellido, email, fecha_nacimiento, celular, idScout})
      
        try {
            const { data } = await CentinelApi.post('acudientes/create-acudiente',{ nombre, apellido, email, fecha_nacimiento, celular, idScout})
            console.log(data)
            
                swal({
                    title: "El usuario ha sido creado con exito!",
                    icon: "success",
                  });
            
           
            
            //Alertas con el ok que viene en la data if(data.ok === true )

        } catch (error) {
            console.log(error.request.status)
            if(error.request.status === 400){
                swal({
                    title: "Error",
                    text: "El correo ya se encuentra registrado!",
                    icon: "error",
                  });
            }
            
            
            console.log(error)
        }

    }
    const startListAcudientes= async() => {

        try {
          
          const { data } = await CentinelApi.get('acudientes/allAcudientes');
          console.log(data)
          dispatch( onListScouts( data.acudiente_) )
    
        } catch (error) {
          console.log(error)
        }
    
      }




    return { startListAcudientes, startCrearAcudiente}
}
