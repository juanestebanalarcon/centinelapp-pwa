import axios from "axios";

const CentinelApi = axios.create({
    baseURL: 'https://scout-centinelas113-prueba1.herokuapp.com/api/',
});

CentinelApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token'),
    }

    return config;

})


export default CentinelApi;