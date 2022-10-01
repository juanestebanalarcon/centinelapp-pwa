import { CentinelApi } from "../Api"
import { onListSuperAdmin } from "../store";
import { useDispatch } from "react-redux"

export const useSuperAdminStore = () => {
    const dispatch = useDispatch()
  
    
    const startListSuperAdmin= async() => {

        try {
          
          const { data } = await CentinelApi.get('superAdmin/allSuperAdmins');
          // console.log(data)
          dispatch( onListSuperAdmin( data.SuperAdministradors_) )
    
        } catch (error) {
          console.log(error)
        }
    
      }




    return { startListSuperAdmin}
}
