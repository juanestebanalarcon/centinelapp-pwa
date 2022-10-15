import axios from "axios";

const CentinelApi = axios.create({
    // baseURL: 'http://192.99.247.71:9000/api/',
    baseURL: 'https://scout-centinelas113-prueba1.herokuapp.com/api',
    //baseURL:'http://localhost:9000/api'
    
});

CentinelApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token'),
    }

    return config;

})


export default CentinelApi;