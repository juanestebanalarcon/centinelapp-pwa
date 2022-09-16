import axios from "axios";

const CentinelApi = axios.create({
    baseURL: 'http://localhost:9000/api',
});

CentinelApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token'),
    }

    return config;

})


export default CentinelApi;