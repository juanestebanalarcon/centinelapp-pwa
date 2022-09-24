import { CentinelApi } from "../Api"
import swal from 'sweetalert';
import { onListSuperAdmin } from "../store";
import { useDispatch } from "react-redux"

export const useAcudienteStore = () => {
    const dispatch = useDispatch()
  
    
    const startListSperAdmin= async() => {

        try {
          
          const { data } = await CentinelApi.get('acudientes/allAcudientes');
          console.log(data)
          dispatch( onListSuperAdmin( data.acudiente_) )
    
        } catch (error) {
          console.log(error)
        }
    
      }




    return { startListSperAdmin}
}
