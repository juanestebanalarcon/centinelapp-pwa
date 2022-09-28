import { useDispatch } from "react-redux";
import { CentinelApi } from "../Api"
import { ListarRamas } from "../store";

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

    

    return{ startListarRamas }
}
