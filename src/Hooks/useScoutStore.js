import { CentinelApi } from "../Api"


export const useScoutStore = () => {
  
    const startCrearScout = async ({ nombre, apellido, email, fechaNacimiento, celular, rama }) => {
        console.log({ nombre, apellido, email, fechaNacimiento, celular, rama})
        let password = '123456789';
        try {
            const { data } = await CentinelApi.post('scouts/create-scout',{ nombre, apellido, email, password, fechaNacimiento, celular, rama })

            //Alertas con el ok que viene en la data if(data.ok === true )

        } catch (error) {
            console.log(error)
        }

    }

    return { startCrearScout }
}
