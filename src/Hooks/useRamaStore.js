import { CentinelApi } from "../Api"
import swal from 'sweetalert';

export const useRamaStore = () => {
  
    const startCrearRama = async ({ nombre, edadMax, edadMin}) => {
        console.log({ nombre, edadMax, edadMin})

        try {
            const { data } = await CentinelApi.post('rama/create-Rama',{ nombre, edadMax, edadMin})
            console.log(data)
            
                swal({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success",
                  });
            
           
            
            //Alertas con el ok que viene en la data if(data.ok === true )

        } catch (error) {
            if(error.request.status === 400){
                swal({
                    title: "Error",
                    text: "Esta rama ya esta creada!",
                    icon: "error",
                  });
            }
           
            
            console.log(error)
        }

    }

    return { startCrearRama }
}
