import { CentinelApi } from "../Api"
import swal from 'sweetalert';
import { onListScouts } from "../store";
import { useDispatch } from "react-redux"
import { ContactsOutlined } from "@mui/icons-material";
export const useScoutStore = () => {
    const dispatch = useDispatch()
    const startCrearScout = async ({ nombre, apellido, email, fecha_nacimiento, celular, idRama }) => {
        console.log({ nombre, apellido, email, fecha_nacimiento, celular, idRama})

        let link_ficha_medica='no tiene'
        
        
        try {
            const { data } = await CentinelApi.post('scouts/create-scout',{ nombre, apellido, email, fecha_nacimiento, celular, idRama, link_ficha_medica})
            console.log(data)
            
            swal({
                title: "El usuario ha sido creado con exito!",
                icon: "success",
              });
            
           
            
            //Alertas con el ok que viene en la data if(data.ok === true )

        } catch (error) {
            console.log(error.request.status)
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

    const startListScouts= async() => {

        try {
          
          const { data } = await CentinelApi.get('scouts/allScouts');
          console.log(data)
          dispatch( onListScouts( data.scouts_) )
    
        } catch (error) {
          console.log(error)
        }
    
      }

      const startupdateScout= async() => {

        try {
          
          const { data } = await CentinelApi.get('scouts/allScouts');
          console.log(data)
          dispatch( onListScouts( data.scouts_) )
    
        } catch (error) {
          console.log(error)
        }
    
      }

      const startListarRamasSelect = async({id}) => {

        try {
            
            const { data } = await CentinelApi.get(`rama/getScoutsAsignados/${id}`);
            console.log(data)
            if(data.rama.Scout.length===0){
              document.getElementById('tabla-scouts').innerHTML='No existen scouts registrados en esta rama'
            }else{
            dispatch(onListScouts( data.rama.Scout))
          }
          } catch (error) {
          console.log(error);  
        }

    }
    
    

    return { startCrearScout, startListScouts,startListarRamasSelect, startupdateScout }
}
