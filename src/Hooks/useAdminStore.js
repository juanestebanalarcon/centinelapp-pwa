import { CentinelApi } from "../Api"
import swal from 'sweetalert';
import { onListAdmin, onListAdminRamas } from "../store";
import { useDispatch } from "react-redux"
import { useParams } from 'react-router-dom';
export const useAdminStore = () => {
    const dispatch = useDispatch()
    const params = useParams();
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
          dispatch( onListAdmin( data.admins_) )
    
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

      const startAdminRama= async(id) => {

        try {
          
          const { data } = await CentinelApi.get(`admin/getAdminBranch/${id}`);
          console.log(data)
          dispatch( onListAdminRamas( data.admon.ramasAsignadas) )
    
        } catch (error) {
          console.log(error)
        }
    
      }
      const startDeleteAdmin = async() => {

        try {
          const id= params._id
          console.log(id)
          const { data } = await CentinelApi.delete(`admin/${params._id}`);
          console.log(data)
          swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          
        } catch (error) {
          console.log(error)
        }
    
      }
    return { startCrearAdmin, startListAdmin, startBusqRamaAdm, startAdminRama, startDeleteAdmin}
}
