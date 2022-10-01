import { useDispatch } from "react-redux";
import { CentinelApi } from "../Api"
import { ListarRamas, ListarRamaScout } from "../store";

export const useRamasStore = () => {
  
    const dispatch = useDispatch();

    const startListarRamas = async() => {

        try {
            
            const { data } = await CentinelApi.get('rama/AllRamas');
            dispatch(ListarRamas(data.ramas_));
            
            

        } catch (error) {
          console.log(error);  
        }

    }
    const startListarRamaID= async(id) => {

        try {
            
            const { data } = await CentinelApi.get(`scouts/scoutBranch/${id}`);
            //console.log(data.branch.nombre)
            dispatch(ListarRamaScout(data.branch.nombre));
                      
  
        } catch (error) {
          console.log(error);  
        }
  
    }

    

    return{ startListarRamas, startListarRamaID }
}
