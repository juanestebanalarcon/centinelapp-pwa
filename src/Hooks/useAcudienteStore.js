import { CentinelApi } from "../Api"
import swal from 'sweetalert';
import { onListAcudiente, onListAcudienteScout, onUploadFileAcudiente } from "../store";
import { useDispatch } from "react-redux"
import {  useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { fileUpload } from "../Helpers";
export const useAcudienteStore = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const params = useParams();
    const startCrearAcudiente = async ({ nombre, apellido, email, fecha_nacimiento, celular, Scouts, link_imagen}) => {
    
      
        try {
            await CentinelApi.post('acudientes/create-acudiente',{ nombre, apellido, email, fecha_nacimiento, celular, Scouts, link_imagen})
           
         
                swal({
                    title: "El usuario ha sido creado con éxito!",
                    icon: "success",
                  });
                  navigate(`/home`)
            
           
            
            //Alertas con el ok que viene en la data if(data.ok === true )

        } catch (error) {
            
            if(error.request.status === 400){
                swal({
                    title: "Error",
                    text: "El correo ya se encuentra registrado!",
                    icon: "error",
                  });
            }
            
            
            
        }

    }
    const startListAcudientes= async() => {

        try {
          
          const { data } = await CentinelApi.get('acudientes/allAcudientes');
         
          dispatch( onListAcudiente( data.acudientes_) )
    
        } catch (error) {
          console.log(error);
        }
    
      }
      const startListScoutsAcudiente= async() => {

        try {
          
          const { data } = await CentinelApi.get(`acudientes/getScouts/${params._id}`);
          
       
         dispatch( onListAcudienteScout( data.scouts_.Scout) )
    
        } catch (error) {
          console.log(error);
        }
    
      }
      const startDeleteAcudiente = async() => {

        try {
        
      
          await CentinelApi.delete(`acudientes/${params._id}`);

          
          navigate(`/adminacudiente`)
        } catch (error) {
          console.log(error)
        }
    
      }
      
      const startUpdateAcudiente = async ({ id, nombre, apellido, email, fecha_nacimiento, celular, scouts }) => {
        
        try {
    
          await CentinelApi.put(`acudientes/${id}`, { id, nombre, apellido, email, fecha_nacimiento, celular, scouts });
          
         
          swal({
            title: "El usuario ha sido actualizado con éxito!",
            icon: "success",
          });
          navigate(`/acudientes/${params._id}`)
          
        } catch (error) {
          console.log(error)
        }
    
      }
      const startUpdatePassword = async ({ newPassword,currentPassword,email}) => {
        
        try {
    
          await CentinelApi.post(`acudientes/changePassword`, { newPassword,currentPassword,email });
   
          
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

        dispatch(onUploadFileAcudiente(true));
    
        try {
        
          const link = await fileUpload( files[0], tipo );
          dispatch(onUploadFileAcudiente(false));
          return link;
    
        } catch (error) {
          return console.log(error)
        }
        
      }

    return { startListAcudientes, startCrearAcudiente, startListScoutsAcudiente,startDeleteAcudiente,startUpdateAcudiente, startUpdatePassword, startUploadingFiles}
}
