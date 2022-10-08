import { useDispatch } from "react-redux";
import { CentinelApi } from "../Api"
import { ListarRamas, ListarRamaScout, ListarIDRamaScout} from "../store";
import swal from 'sweetalert';
export const useRamasStore = () => {
  
    const dispatch = useDispatch();
    const startCrearRama = async ({ nombre, edadMax, edadMin}) => {
        // console.log({ nombre, edadMax, edadMin})

        try {
            await CentinelApi.post('rama/create-Rama',{ nombre, edadMax, edadMin})
            // console.log(data)
            
                swal({
                    title: "La rama ha sido creada con éxito!",
                    icon: "success",
                  });
            
           
            
            //Alertas con el ok que viene en la data if(data.ok === true )

        } catch (error) {
            if(error.request.status === 400){
                swal({
                    title: "Error",
                    text: "Esta rama ya ha sido creada anteriormente!",
                    icon: "error",
                  });
            }
           
            
            console.log(error)
        }

    }

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
    const startListarRamaIDValue= async(id) => {

        try {
            
            const { data } = await CentinelApi.get(`scouts/scoutBranch/${id}`);
            //console.log(data.branch.nombre)
            dispatch(ListarIDRamaScout(data.branch._id));
                      
  
        } catch (error) {
          console.log(error);  
        }
  
    }
    

    

    return{ startCrearRama, startListarRamas, startListarRamaID, startListarRamaIDValue}
}
