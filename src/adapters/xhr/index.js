import Axios from "axios";


function returnAxiosInstance() {
    return Axios.create();
}

export function get(url, requestData){
    const axios = returnAxiosInstance();
    return axios.get(url, requestData);
}
