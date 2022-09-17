import { CentinelApi } from "../Api"
import swal from 'sweetalert';

export const useAdminStore = () => {
  
    const startCrearAdmin = async ({ nombre, apellido, email,ramasAsignadas}) => {
        console.log({ nombre, apellido, email, ramasAsignadas})
        let rama=['Rama009']
        try {
            const { data } = await CentinelApi.post('admin/create-admin',{ nombre, apellido, email, ramasAsignadas})
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
                swal({
                    title: "Good job!",
                    text: "error 400",
                    icon: "error",
                  });
            }
            
            
            console.log(error)
        }

    }

    return { startCrearAdmin }
}
