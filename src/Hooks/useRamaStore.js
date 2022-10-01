import { CentinelApi } from "../Api"
import swal from 'sweetalert';

export const useRamaStore = () => {
  
    const startCrearRama = async ({ nombre, edadMax, edadMin}) => {
        // console.log({ nombre, edadMax, edadMin})

        try {
            await CentinelApi.post('rama/create-Rama',{ nombre, edadMax, edadMin})
            // console.log(data)
            
                swal({
                    title: "La rama ha sido creada con éxito!",
                    icon: "success",
                  });
            
           
            
            //Alertas con el ok que viene en la data if(data.ok === true )

        } catch (error) {
            if(error.request.status === 400){
                swal({
                    title: "Error",
                    text: "Esta rama ya ha sido creada anteriormente!",
                    icon: "error",
                  });
            }
           
            
            console.log(error)
        }

    }

    return { startCrearRama }
}
