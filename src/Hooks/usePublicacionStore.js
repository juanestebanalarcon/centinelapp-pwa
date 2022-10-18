import { CentinelApi } from "../Api"
import swal from 'sweetalert';
import { onListPublicaciones, onListPublicacionSel } from "../store";
import { useDispatch } from "react-redux"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const usePublicacionStore = () => {
  const dispatch = useDispatch()
  const params = useParams();
  const navigate = useNavigate();
const startCrearPublicacion = async ({ titulo, descripcion, ramaAsignada, linkImagen, autor, fecha  }) => {
    
    console.log({ titulo, descripcion, ramaAsignada, linkImagen, autor, fecha})
    try {
      await CentinelApi.post('publicaciones/create-publicacion', { titulo, descripcion, ramaAsignada, linkImagen, autor, fecha})
      // console.log(data)

      swal({
        title: "La publicacion ha sido creado con éxito!",
        icon: "success",
      });


    } catch (error) {
      // console.log(error.request.status)
        alert(error)
        // swal({
        //   title: "Error",
        //   text: "El correo ya se encuentra registrado!",
        //   icon: "error",
        // });
      


      console.log(error)
    }

  }
  const startListPublicacion= async() => {

    try {
      
      const { data } = await CentinelApi.get(`publicaciones/byBranch/${params._id}`);
      dispatch( onListPublicaciones( data.publicaciones_) )

    } catch (error) {
      console.log(error.request.status)
      if(error.request.status===404){
        document.getElementById('nohay').innerHTML=''
        swal({
          
          title: "No existen publicaciones actualmente para esta rama",
          icon: "warning",
        });  
        navigate('/publicaciones')

      }
    }

  }
  const startListPublicacionGeneral= async() => {

    try {
      
      const { data } = await CentinelApi.get(`publicaciones/allPublicaciones`);
      dispatch( onListPublicaciones( data.publicaciones_) )

    } catch (error) {
      console.log(error.request.status)
      if(error.request.status===404){
        document.getElementById('nohay').innerHTML=''
        swal({
          
          title: "No existen publicaciones actualmente para esta rama",
          icon: "warning",
        });  
        navigate('/publicaciones')

      }
    }

  }

  const startListLastPublicacion= async() => {

    try {
      
      const { data } = await CentinelApi.get(`publicaciones/lastTwoPubli`);
      dispatch( onListPublicaciones( data.publicaciones_) )

    } catch (error) {
      console.log(error)
      
    }

  }

  const startListLastPublicacionRama= async(ramaIdScout) => {
    console.log(ramaIdScout)
    try {
      
      
      const { data } = await CentinelApi.get(`publicaciones/lastTwoPubliByBranch/${ramaIdScout}`);
      dispatch( onListPublicaciones( data.publicaciones_) )

    } catch (error) {
      console.log(error)
      
    }

  }
  const startListPublicacionBusca= async() => {

    try {
      
      const { data } = await CentinelApi.get(`publicaciones/${params._id}`);

      dispatch( onListPublicacionSel( data.publicaciones_) )

    } catch (error) {
      console.log(error)
      
    }

  }
  const startUpdatePublicacion= async({titulo, descripcion, ramaAsignada, linkImagen, fecha}) => {

    try {
      
      await CentinelApi.put(`publicaciones/${params._id}`,{titulo, descripcion, ramaAsignada, linkImagen, fecha});
      
      navigate(`/verPublicacion/${params._id}`)

    } catch (error) {
      console.log(error)
      
    }

  }
  const startDeletePublicacion = async() => {

    try {
      
      await CentinelApi.delete(`publicaciones/${params._id}`);
      
      
      navigate(`/publicaciones`)
    } catch (error) {
      console.log(error)
    }

  }

  

  


  return { startCrearPublicacion, startListPublicacionGeneral, startListPublicacion, startListLastPublicacion, startListLastPublicacionRama, startListPublicacionBusca, startUpdatePublicacion, startDeletePublicacion}
}
