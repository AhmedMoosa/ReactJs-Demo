import Axios from 'axios';
//import interceptor from './interceptors';

const http = Axios.create({
    baseURL: process.env.API_URL,
});


//http.interceptors.request.use(interceptor)
export default http;