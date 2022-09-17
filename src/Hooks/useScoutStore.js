import { CentinelApi } from "../Api"
import swal from 'sweetalert';

export const useScoutStore = () => {
  
    const startCrearScout = async ({ nombre, apellido, email, fecha_nacimiento, celular, rama }) => {
        console.log({ nombre, apellido, email, fecha_nacimiento, celular, rama})
        
        let link_ficha_medica='no tiene'
        let esActivo='true';
        
        try {
            const { data } = await CentinelApi.post('scouts/create-scout',{ nombre, apellido, email, fecha_nacimiento, celular, rama, link_ficha_medica})
            console.log(data)
            
                swal({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success",
                  });
            
           
            
            //Alertas con el ok que viene en la data if(data.ok === true )

        } catch (error) {
            console.log(error.request.status)
            if(error.request.status === 400){
                alert('coreeo')
            }
            
            
            console.log(error)
        }

    }

    return { startCrearScout }
}
