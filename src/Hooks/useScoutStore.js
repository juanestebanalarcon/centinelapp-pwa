import { CentinelApi } from "../Api"
import swal from 'sweetalert';
import { onListScouts } from "../store";
import { useDispatch } from "react-redux"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export const useScoutStore = () => {
  const dispatch = useDispatch()
  const params = useParams();
  const navigate = useNavigate();
  const startCrearScout = async ({ nombre, apellido, email, fecha_nacimiento, celular, idRama }) => {
    // console.log({ nombre, apellido, email, fecha_nacimiento, celular, idRama})

    let link_ficha_medica = 'no tiene'


    try {
      await CentinelApi.post('scouts/create-scout', { nombre, apellido, email, fecha_nacimiento, celular, idRama, link_ficha_medica })
      // console.log(data)

      swal({
        title: "El usuario ha sido creado con éxito!",
        icon: "success",
      });



      //Alertas con el ok que viene en la data if(data.ok === true )

    } catch (error) {
      // console.log(error.request.status)
      if (error.request.status === 400) {
        swal({
          title: "Error",
          text: "El correo ya se encuentra registrado!",
          icon: "error",
        });
      }


      console.log(error)
    }

  }

  const startListScouts = async () => {

    try {

      const { data } = await CentinelApi.get('scouts/allScouts');
      // console.log(data)
      dispatch(onListScouts(data.scouts_))

    } catch (error) {
      console.log(error)
    }

  }

  

  const startListarRamasSelect = async ({ id }) => {

    try {

      const { data } = await CentinelApi.get(`rama/getScoutsAsignados/${id}`);
      console.log(data)
      if (data.rama.Scout.length === 0) {
        console.log('No hat scouts')
        document.getElementById("Noe").innerHTML="No existen scouts registrados en esta rama"
        dispatch(onListScouts(data.rama.Scout))
      }
      else {
        document.getElementById("Noe").innerHTML=""
        dispatch(onListScouts(data.rama.Scout))
      
    }
    } catch (error) {
      console.log(error);
    }

  }
  const startUpdateScout = async ({ id, nombre, apellido, email, fecha_nacimiento, celular, idScout,idRama,idRamaNueva }) => {
    console.log(idRama)
    console.log(idScout)
    console.log(idRamaNueva)
    
    try {

      const { data } = await CentinelApi.put(`scouts/${id}`, { id, nombre, apellido, email, fecha_nacimiento, celular});
      const { datar } = await CentinelApi.put(`rama/changeScoutBranch/${idRama}`, { idScout, idRamaNueva });
      console.log(data)
      console.log(datar)
      swal({
        title: "El usuario ha sido actualizado con éxito!",
        icon: "success",
      });
      navigate(`/scout/${params._id}`)


    } catch (error) {
      console.log(error)
    }

  }

  const startDeleteScout = async () => {

    try {
      const id = params._id
      console.log(id)
      const { data } = await CentinelApi.delete(`scouts/${params._id}`);
      console.log(data)
      
      navigate(`/adminscouts`)

    } catch (error) {
      console.log(error)
    }

  }
  const startUpdatePassword = async ({ newPassword,currentPassword,email}) => {
        
    console.log(newPassword,currentPassword,email)
    try {

      const { data } = await CentinelApi.post(`scouts/changePassword`, { newPassword,currentPassword,email });
      console.log(data)
      
      swal({
        title: "La contraseña ha sido actualizada con éxito!",
        icon: "success",
      });
      navigate("/perfil")


    } catch (error) {
      console.log(error)
    }

  }



  return { startCrearScout, startListScouts, startListarRamasSelect, startUpdateScout, startDeleteScout,startUpdatePassword }
}
