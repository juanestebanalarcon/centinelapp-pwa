import { CentinelApi } from "../Api"
import swal from 'sweetalert';
import { onListAdmin, onListAdminRamas } from "../store";
import { useDispatch } from "react-redux"

export const useAdminStore = () => {
    const dispatch = useDispatch()
    const startCrearAdmin = async ({ nombre, apellido, email,ramasAsignadas}) => {
        // console.log({ nombre, apellido, email, ramasAsignadas})
      
        try {
             await CentinelApi.post('admin/create-admin',{ nombre, apellido, email, ramasAsignadas})
            // console.log(data)
            
                swal({
                    title: "El usuario ha sido creado con éxito! ",
                    icon: "success",
                  });
            
           
            
            //Alertas con el ok que viene en la data if(data.ok === true )

        } catch (error) {
            // console.log(error.request.status)
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

    const startListAdmin= async() => {

        try {
          
          const { data } = await CentinelApi.get('admin/AllAdmins');
          console.log(data)
          dispatch( onListAdmin( data.admin_) )
    
        } catch (error) {
          console.log(error)
        }
    
      }

      const startBusqRamaAdm= async(id) => {

        try {
          
          const { data } = await CentinelApi.get(`rama/${id}`);
          console.log(data)
          dispatch( onListAdminRamas( data.admin_) )
    
        } catch (error) {
          console.log(error)
        }
    
      }
    return { startCrearAdmin, startListAdmin, startBusqRamaAdm}
}
