import { useDispatch, useSelector } from "react-redux"
import { CentinelApi } from "../Api"
import { clearErrorMessage, onChecking, onLogin, onLogout} from "../store";
import swal from 'sweetalert';
export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async({ email, password, tipo }) => {

        dispatch( onChecking() );

        try {
            // console.log(tipo)
            if(tipo=== 0 ){
                
            const { data } = await CentinelApi.post('superAdmin/log-in-superAdmin',{ email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime() );
            console.log(data)
            dispatch( onLogin({ nombre: data.nombre, uid: data.uid, email: data.email, rol: tipo }) );
            }

            else if(tipo=== 1 ){
                
                const { data } = await CentinelApi.post('admin/log-in-admin',{ email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime() );
            console.log(data)
            dispatch( onLogin({ nombre: data.nombre, uid: data.uid, email: data.email, rol: tipo }) );
            }else if(tipo=== 2 ){
                const { data } = await CentinelApi.post('scouts/log-in-scout',{ email, password });
                localStorage.setItem('token', data.token);
                localStorage.setItem('token-init-date', new Date().getTime() );
                console.log(data)
                dispatch( onLogin({ nombre: data.nombre, uid: data.uid, email: data.email, rol: tipo }) );

            }else if(tipo=== 3 ){
                const { data } = await CentinelApi.post('acudientes/log-in-acudiente',{ email, password });
                localStorage.setItem('token', data.token);
                localStorage.setItem('token-init-date', new Date().getTime() );
                console.log(data)
                dispatch( onLogin({ nombre: data.nombre, uid: data.uid, email: data.email, rol: tipo}) );

            }else{
                dispatch( onLogout() ) 
            }
            
            

        } catch (error) {
            swal({
                title: "Error",
                text: "Credenciales incorrectas",
                icon: "error",
              });
            dispatch( onLogout('Credenciales incorrectas') );

            setTimeout(() =>{
                dispatch( clearErrorMessage() )
            }, 10);

        }

    }

    // const startRegister = async({ name, email, password }) => {

    //     dispatch( onChecking() );

    //     try {
            
    //         const { data } = await calendarApi.post('/auth/new',{ name, email, password });
    //         await calendarApi.post('/auth',{ email, password });
    //         localStorage.setItem('token', data.token);
    //         localStorage.setItem('token-init-date', new Date().getTime() );
    //         dispatch( onLogin({ name: data.name, uid: data.uid }) );

    //     } catch (error) {
            
    //         dispatch( onLogout(error.response.data?.msg || '') );
    //         setTimeout(() =>{
    //             dispatch( clearErrorMessage() )
    //         }, 10);


    //     }

    // }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token')
        
        if( !token ) return dispatch( onLogout() );

        try {
            
            const { data } = await CentinelApi.get('admin/',{ token });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ nombre: data.nombre, uid: data.uid, email: data.email, rol: data.rol}) );

        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }

    }

    // const startLogout = () => {

    //     localStorage.clear();
    //     dispatch( onLogoutCalendar() );
    //     dispatch( onLogout() );

    // }

    const startLogout = () => {

        localStorage.clear();
        dispatch( onLogout() );
        

    }









    return {

        status,
        user,
        errorMessage,

        startLogin,
        startLogout,
        // startRegister,
        checkAuthToken,

    }

}
