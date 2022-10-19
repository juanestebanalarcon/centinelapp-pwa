import { CentinelApi } from "../Api"
import swal from 'sweetalert';
import { onListAdmin, onListAdminRamas, onUploadFileAdmin } from "../store";
import { useDispatch } from "react-redux"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { fileUpload } from "../Helpers";
export const useAdminStore = () => {
    const dispatch = useDispatch()
    const params = useParams();
    const navigate = useNavigate();
    const startCrearAdmin = async ({ nombre, apellido, email,ramasAsignadas, link_imagen}) => {
        
      
        try {
             await CentinelApi.post('admin/create-admin',{ nombre, apellido, email, ramasAsignadas, link_imagen})
            // console.log(data)
            
                swal({
                    title: "El usuario ha sido creado con éxito! ",
                    icon: "success",
                  });
                  navigate(`/home`)
           
            
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
       
          dispatch( onListAdmin( data.admins_) )
    
        } catch (error) {
          console.log(error)
        }
    
      }

      const startBusqRamaAdm= async(id) => {

        try {
          
          const { data } = await CentinelApi.get(`rama/${id}`);
       
          dispatch( onListAdminRamas( data.admin_) )
    
        } catch (error) {
          console.log(error)
        }
    
      }

      const startAdminRama= async(id) => {

        try {
          
          const { data } = await CentinelApi.get(`admin/getAdminBranch/${id}`);
         
          dispatch( onListAdminRamas( data.admon.ramasAsignadas) )
    
        } catch (error) {
          console.log(error)
        }
    
      }
      const startDeleteAdmin = async() => {

        try {
 
    
          await CentinelApi.delete(`admin/${params._id}`);
        
          navigate(`/adminadmin`)
          
        } catch (error) {
          console.log(error)
        }
    
      }
      const startUpdateAdmin = async ({ id, nombre, apellido, email, fecha_nacimiento, celular, RamasNuevas }) => {
        
        try {
    
          await CentinelApi.put(`admin/${id}`, { id, nombre, apellido, email, fecha_nacimiento, celular });
       
          await CentinelApi.put(`admin/changeAdminBranch/${params._id}`, {RamasNuevas});
        
          swal({
            title: "El usuario ha sido actualizado con éxito!",
            icon: "success",
          });

    
        } catch (error) {
          console.log(error)
        }
    
      }
      const startUpdateAdminPersonal = async ({ id, nombre, apellido, email, fecha_nacimiento, celular, RamasNuevas }) => {
        
        try {
    
          await CentinelApi.put(`admin/${id}`, { id, nombre, apellido, email, fecha_nacimiento, celular });
          
          
          swal({
            title: "El usuario ha sido actualizado con éxito!",
            icon: "success",
          });

    
        } catch (error) {
          console.log(error)
        }
    
      }

      const startUpdatePassword = async ({ newPassword,currentPassword,email}) => {
        
        
        try {
    
          await CentinelApi.post(`admin/changePassword`, { newPassword,currentPassword,email });
          
          
          swal({
            title: "La contraseña ha sido actualizada con éxito!",
            icon: "success",
          });
          navigate("/perfil")

    
        } catch (error) {
          console.log(error.response.status)
          if(error.request.status===400){
            swal({
              title: "La contraseña actual es incorrecta!",
              icon: "error",
            });
          }
        }
    
      }

      const startUploadingFiles = async( files = [], tipo = '' ) => {

        dispatch(onUploadFileAdmin(true));
    
        try {
        
          const link = await fileUpload( files[0], tipo );
          dispatch(onUploadFileAdmin(false));
          return link;
    
        } catch (error) {
          return console.log(error)
        }
        
      }

    return { startCrearAdmin, startListAdmin, startBusqRamaAdm, startAdminRama, startDeleteAdmin, startUpdateAdmin, startUpdatePassword, startUpdateAdminPersonal, startUploadingFiles}
}
