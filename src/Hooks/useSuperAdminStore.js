import { CentinelApi } from "../Api"
import { onListSuperAdmin } from "../store";
import { useDispatch } from "react-redux"
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom';

export const useSuperAdminStore = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
  
    
    const startListSuperAdmin= async() => {

        try {
          
          const { data } = await CentinelApi.get('superAdmin/allSuperAdmins');
          // console.log(data)
          dispatch( onListSuperAdmin( data.SuperAdministradors_) )
    
        } catch (error) {
          console.log(error)
        }
    
      }
      const startUpdatePassword = async ({ newPassword,currentPassword,email}) => {
        
        console.log(newPassword,currentPassword,email)
        try {
    
          const { data } = await CentinelApi.post(`superAdmin/changePassword`, { newPassword,currentPassword,email });
          console.log(data)
          
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




    return { startListSuperAdmin, startUpdatePassword}
}
